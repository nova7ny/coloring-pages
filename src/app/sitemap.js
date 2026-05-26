import { prisma } from "@/lib/db";

export default async function sitemap() {
  const baseUrl = "https://coloringpalace.cloud";

  // 1. Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/trending`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  try {
    // 2. Fetch categories from database
    const categories = await prisma.category.findMany();
    const categoryUrls = categories.map((category) => ({
      url: `${baseUrl}/category/${category.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    }));

    // 3. Fetch coloring pages from database
    const coloringPages = await prisma.coloringPage.findMany();
    const coloringPageUrls = coloringPages.map((page) => ({
      url: `${baseUrl}/coloring-page/${page.id}`,
      lastModified: page.createdAt ? new Date(page.createdAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticPages, ...categoryUrls, ...coloringPageUrls];
  } catch (error) {
    console.error("Error generating dynamic sitemap:", error);
    return staticPages;
  }
}
