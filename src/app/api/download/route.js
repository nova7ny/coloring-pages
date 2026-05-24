import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import path from "path";
import fs from "fs";
import PDFDocument from "pdfkit";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing coloring page ID", { status: 400 });
  }

  try {
    // 1. Verify coloring page exists in database
    const page = await prisma.coloringPage.findUnique({ where: { id } });

    if (!page) {
      return new NextResponse("Coloring page not found", { status: 404 });
    }

    // 2. Track the download
    await prisma.$transaction([
      prisma.coloringPage.update({
        where: { id },
        data: { downloadCount: { increment: 1 } },
      }),
      prisma.downloadLog.create({ data: { pageId: id } }),
    ]);

    // 3. Locate image on disk
    const imagePath = path.join(process.cwd(), "public", page.imagePath);

    if (!fs.existsSync(imagePath)) {
      console.error(`[PDF] Image not found at: ${imagePath}`);
      return new NextResponse("Image file not found on server", { status: 404 });
    }

    // 4. Generate a clean, single-page, full-bleed A4 PDF — image only, no text
    const pdfBuffer = await new Promise((resolve, reject) => {
      try {
        // Tiny 4pt margins so the image fills the page edge-to-edge
        const margin = 4;

        const doc = new PDFDocument({
          size: "A4",
          margins: { top: margin, bottom: margin, left: margin, right: margin },
          autoFirstPage: true,
        });

        const chunks = [];
        doc.on("data", (chunk) => chunks.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(chunks)));
        doc.on("error", reject);

        // Full printable area
        const printWidth  = doc.page.width  - margin * 2;
        const printHeight = doc.page.height - margin * 2;

        // Embed the image scaled to fill the entire printable area
        doc.image(imagePath, margin, margin, {
          fit: [printWidth, printHeight],
          align: "center",
          valign: "center",
        });

        doc.end();
      } catch (innerErr) {
        reject(innerErr);
      }
    });

    // 5. Serve the PDF as a download attachment
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${id}.pdf"`,
        "Content-Length": pdfBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error("[PDF Generation Error]", error?.message || error);
    console.error(error?.stack || "");
    return new NextResponse(
      `Server error generating PDF: ${error?.message || "unknown"}`,
      { status: 500 }
    );
  }
}
