import Link from "next/link";
import { prisma } from "@/lib/db";
import AdContainer from "@/components/AdContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 0;

// Dynamic SEO Metadata Generation
export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || "";

  return {
    title: query 
      ? `Coloring Pages Matching "${query}" | Free PDFs | Coloring Palace`
      : "Search Coloring Pages | Coloring Palace",
    description: query
      ? `Download and print free vector-grade high-resolution coloring pages matching "${query}". Perfect for kids, parents, and adults.`
      : "Search thousands of premium high-resolution coloring pages in our palace database. Free printable A4/Letter size vector PDFs.",
  };
}

export default async function SearchPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = (resolvedSearchParams.q || "").trim();

  // 1. Fetch search results from SQLite dev.db using case-insensitive OR queries
  let pages = [];
  if (query) {
    pages = await prisma.coloringPage.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { subcategory: { contains: query } },
          { tags: { contains: query } },
          { category: { name: { contains: query } } }
        ]
      },
      include: {
        category: true
      },
      orderBy: {
        downloadCount: "desc"
      }
    });
  }

  // 2. Fetch active categories for the Empty State recommendations
  const categories = await prisma.category.findMany({
    take: 6,
    include: {
      _count: {
        select: { pages: true }
      }
    }
  });

  return (
    <>
      <Header />

      <main className="app-container">
        {/* Dynamic Ad Leaderboard at the top */}
        <AdContainer type="leaderboard" slotId="search-top-banner" />

        {/* SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Search</span>
        </div>

        {/* Header Section */}
        <div style={{ marginBottom: '24px' }}>
          <h1 className="search-results-title">
            Search Results for <span className="search-results-query">"{query || "All"}"</span>
          </h1>
          <p className="search-meta-summary">
            {pages.length > 0 
              ? `⚔️ Found ${pages.length} matching sheets in the Palace archives`
              : "No matches found in the Palace scroll scrolls"
            }
          </p>
        </div>

        {/* Search Results Grid or Empty State Card */}
        {pages.length === 0 ? (
          <div className="empty-state-card">
            <span className="empty-state-icon">🛡️</span>
            <h3 className="empty-state-title">Alas, No Coloring Pages Match Your Quest</h3>
            <p className="empty-state-text">
              Our royal scribes couldn't find any pages matching <strong>"{query}"</strong>. Try checking your spelling, using more general keywords, or explore one of our popular categories below:
            </p>
            <div className="recommendations-box">
              {categories.map((cat) => (
                <Link key={cat.id} href={`/category/${cat.id}`} className="rec-tag">
                  {cat.iconPath || '🎨'} {cat.name} ({cat._count.pages})
                </Link>
              ))}
              <Link href="/trending" className="rec-tag" style={{ background: 'var(--sage-bg)', color: 'var(--sage-text)' }}>
                🔥 Trending Now
              </Link>
            </div>
          </div>
        ) : (
          <div className="coloring-grid">
            {pages.map((page, index) => {
              let badgeClass = "difficulty-easy";
              if (page.difficulty === "Medium") badgeClass = "difficulty-medium";
              if (page.difficulty === "Hard") badgeClass = "difficulty-hard";

              const cardMarkup = (
                <div key={page.id} className="coloring-card">
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

              // Inject an inline ad card after page number 4
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
                      <AdContainer type="rectangle" slotId="search-inline-ad" />
                    </div>
                  </>
                );
              }

              return cardMarkup;
            })}
          </div>
        )}

        {/* Dynamic bottom ad placement */}
        <AdContainer type="leaderboard" slotId="search-bottom-banner" />
      </main>

      <Footer />
    </>
  );
}
