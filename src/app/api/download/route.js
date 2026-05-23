import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

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
        data: {
          downloadCount: {
            increment: 1,
          },
        },
      }),
      prisma.downloadLog.create({
        data: {
          pageId: id,
        },
      }),
    ]);

    // 3. Perform server-side redirect to static printable PDF file
    return NextResponse.redirect(new URL(page.pdfPath, request.url));

  } catch (error) {
    console.error("Error logging download:", error);
    return new NextResponse("Server error logging download", { status: 500 });
  }
}
