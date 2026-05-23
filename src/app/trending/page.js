import Link from "next/link";
import { prisma } from "@/lib/db";
import AdContainer from "@/components/AdContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 0;

export async function generateMetadata() {
  return {
    title: "Trending Coloring Pages - Most Popular Free Printables | ColoringPalace",
    description: "Discover the top 20 most popular free printable coloring pages downloaded by parents and teachers this week. High-resolution vector-grade PDFs.",
  };
}

export default async function TrendingPage() {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // 1. Group downloads in the last 7 days
  const trendingGroups = await prisma.downloadLog.groupBy({
    by: ['pageId'],
    _count: {
      pageId: true
    },
    where: {
      timestamp: {
        gte: sevenDaysAgo
      }
    },
    orderBy: {
      _count: {
        pageId: 'desc'
      }
    },
    take: 20
  });

  const trendingIds = trendingGroups.map(g => g.pageId);

  // 2. Fetch pages matching those IDs
  let pages = [];
  if (trendingIds.length > 0) {
    const fetchedPages = await prisma.coloringPage.findMany({
      where: {
        id: { in: trendingIds }
      },
      include: {
        category: true
      }
    });

    // Sort according to group-by count order
    const pagesMap = new Map(fetchedPages.map(p => [p.id, p]));
    pages = trendingIds
      .map(id => pagesMap.get(id))
      .filter(Boolean);
  }

  // 3. Fallback: If we need more to reach 20 pages, fetch lifetime downloadCount desc
  if (pages.length < 20) {
    const excludedIds = pages.map(p => p.id);
    const remainingCount = 20 - pages.length;

    const fallbackPages = await prisma.coloringPage.findMany({
      where: {
        id: { notIn: excludedIds }
      },
      orderBy: {
        downloadCount: 'desc'
      },
      take: remainingCount,
      include: {
        category: true
      }
    });

    pages = [...pages, ...fallbackPages];
  }

  return (
    <>
      <Header active="trending" />

      <main className="app-container">
        {/* Top Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="trending-top-banner" />

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Trending</span>
        </div>

        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>🔥</span> Top Trending Coloring Pages
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '800px', lineHeight: '1.5' }}>
            Explore the most popular printable coloring templates this week! Our community tracks daily print and download activity to feature the most loved drawings for kids and adults. Updated in real-time.
          </p>
        </div>

        {/* Coloring Grid */}
        {pages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 0', border: '2px dashed var(--border-color)', borderRadius: '16px' }}>
            <span style={{ fontSize: '48px' }}>😴</span>
            <h3 style={{ marginTop: '16px' }}>No trending pages found</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Our community is busy generating art! Check back soon once the first downloads are registered.</p>
          </div>
        ) : (
          <div className="coloring-grid">
            {pages.map((page, index) => {
              let badgeClass = "difficulty-easy";
              if (page.difficulty === "Medium") badgeClass = "difficulty-medium";
              if (page.difficulty === "Hard") badgeClass = "difficulty-hard";

              const cardMarkup = (
                <div key={page.id} className="coloring-card" style={{ position: "relative" }}>
                  {/* Rank Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: index < 3 ? 'var(--peach-text)' : 'var(--sage-text)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: '800',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      zIndex: 10
                    }}
                  >
                    #{index + 1}
                  </div>
                  <Link href={`/coloring-page/${page.id}`}>
                    <div className="coloring-card-preview">
                      <img 
                        className="coloring-card-img" 
                        src={page.imagePath} 
                        alt={page.title} 
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className="coloring-card-info">
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--sage-text)', marginBottom: '4px' }}>
                        {page.category.name} {page.subcategory ? `> ${page.subcategory}` : ''}
                      </div>
                      <Link href={`/coloring-page/${page.id}`}>
                        <h3 className="coloring-card-title">{page.title}</h3>
                      </Link>
                    </div>
                    <div className="coloring-card-meta">
                      <span className={`difficulty-badge ${badgeClass}`}>{page.difficulty}</span>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                        📥 {page.downloadCount} prints
                      </span>
                    </div>
                  </div>
                </div>
              );

              // Render an inline advertisement card after page number 4
              if (index === 3) {
                return (
                  <>
                    {cardMarkup}
                    <div 
                      key="inline-ad" 
                      className="coloring-card" 
                      style={{ 
                        gridColumn: 'span 1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FAF9F6',
                        border: '2px dashed var(--border-color)',
                        padding: '12px'
                      }}
                    >
                      <AdContainer type="rectangle" slotId="trending-inline-ad" />
                    </div>
                  </>
                );
              }

              return cardMarkup;
            })}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
