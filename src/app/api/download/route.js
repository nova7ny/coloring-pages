import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import path from "path";
import fs from "fs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing coloring page ID", { status: 400 });
  }

  try {
    // 1. Verify if coloring page exists in database
    const page = await prisma.coloringPage.findUnique({
      where: { id },
    });

    if (!page) {
      return new NextResponse("Coloring page not found", { status: 404 });
    }

    // 2. Increment downloadCount and insert DownloadLog in a transaction
    await prisma.$transaction([
      prisma.coloringPage.update({
        where: { id },
        data: { downloadCount: { increment: 1 } },
      }),
      prisma.downloadLog.create({
        data: { pageId: id },
      }),
    ]);

    // 3. Locate the high-resolution image on disk
    // page.imagePath is like "/content/dinosaurs/happy-brontosaurus/image.png"
    const imagePath = path.join(process.cwd(), "public", page.imagePath);

    if (!fs.existsSync(imagePath)) {
      return new NextResponse("Image file not found on server", { status: 404 });
    }

    // 4. Dynamically generate a valid A4 PDF using PDFKit
    const PDFDocument = (await import("pdfkit")).default;

    const pdfBuffer = await new Promise((resolve, reject) => {
      const doc = new PDFDocument({
        size: "A4",
        margins: { top: 40, bottom: 40, left: 40, right: 40 },
        autoFirstPage: true,
      });

      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      // --- Page Title ---
      doc
        .font("Helvetica-Bold")
        .fontSize(16)
        .fillColor("#2D312E")
        .text(page.title, { align: "center" });

      doc.moveDown(0.5);

      // --- Difficulty badge line ---
      doc
        .font("Helvetica")
        .fontSize(10)
        .fillColor("#6B726E")
        .text(`Difficulty: ${page.difficulty}  •  Category: ${page.subcategory || ""}`, {
          align: "center",
        });

      doc.moveDown(0.75);

      // --- Embed the coloring page image, scaled to fit the printable area ---
      const pageWidth = doc.page.width - 80;   // account for margins
      const pageHeight = doc.page.height - 200; // reserve space for title + footer

      doc.image(imagePath, {
        fit: [pageWidth, pageHeight],
        align: "center",
        valign: "center",
      });

      // --- Branded footer ---
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor("#A0A8A4")
        .text(
          "Free printable coloring page from ColoringPalace.cloud — Print, color, and enjoy!",
          40,
          doc.page.height - 50,
          { align: "center", width: pageWidth }
        );

      doc.end();
    });

    // 5. Return the PDF as a binary download
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${id}.pdf"`,
        "Content-Length": pdfBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error("Error generating PDF download:", error);
    return new NextResponse("Server error generating PDF", { status: 500 });
  }
}
