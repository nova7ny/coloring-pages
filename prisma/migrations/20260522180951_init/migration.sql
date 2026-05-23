-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "iconPath" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ColoringPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryId" TEXT NOT NULL,
    "subcategory" TEXT,
    "title" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "seoTitle" TEXT NOT NULL,
    "seoDescription" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "pdfPath" TEXT NOT NULL,
    "downloadCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ColoringPage_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DownloadLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pageId" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DownloadLog_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "ColoringPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
