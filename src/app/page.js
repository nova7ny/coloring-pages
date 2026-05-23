import Link from "next/link";
import { prisma } from "@/lib/db";
import AdContainer from "@/components/AdContainer";

// Enable dynamic rendering so database updates show up in real-time
export const revalidate = 0;

export default async function Home() {
  // 1. Fetch all categories from database
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { pages: true }
      }
    }
  });

  // 2. Fetch Top Trending Pages (sorted by downloadCount)
  const trendingPages = await prisma.coloringPage.findMany({
    take: 5,
    orderBy: {
      downloadCount: "desc"
    },
    include: {
      category: true
    }
  });

  return (
    <>
      <header className="nav-header">
        <div className="nav-content">
          <Link href="/" className="logo-link">
            ColoringPalace<span className="logo-dot"></span>
          </Link>
          <nav className="nav-links">
            <Link href="/" className="nav-item active">Home</Link>
            <Link href="/trending" className="nav-item">Trending</Link>
            <Link href="/contact" className="nav-item">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="app-container">
        {/* Top Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="top-home-banner" />

        {/* Hero Banner Section */}
        <section className="hero-section">
          <h1 className="hero-title">Free, High-Resolution Coloring Pages</h1>
          <p className="hero-subtitle">
            Download and print thousands of premium vector-grade coloring sheets. Perfect for teachers, parents, kids, and meditative adult relaxation!
          </p>
          <Link href="/trending" className="download-btn">
            🔥 Explore Top Trending
          </Link>
        </section>

        {/* Categories Section */}
        <section style={{ marginTop: '24px' }}>
          <h2 className="section-title">
            <span>🎨</span> Explore Coloring Categories
          </h2>
          
          <div className="category-grid">
            {categories.map((cat, index) => {
              // Assign a pastel color based on index
              const colors = [
                { bg: 'var(--sage-bg)', text: 'var(--sage-text)' },
                { bg: 'var(--blue-bg)', text: 'var(--blue-text)' },
                { bg: 'var(--peach-bg)', text: 'var(--peach-text)' },
                { bg: 'var(--lavender-bg)', text: 'var(--lavender-text)' }
              ];
              const color = colors[index % colors.length];

              return (
                <Link key={cat.id} href={`/category/${cat.id}`}>
                  <div className="category-card">
                    <div 
                      className="category-icon-wrapper" 
                      style={{ backgroundColor: color.bg, color: color.text }}
                    >
                      {cat.iconPath || '🎨'}
                    </div>
                    <h3 className="category-card-title">{cat.name}</h3>
                    <p className="category-card-desc">{cat.description}</p>
                    <div style={{ marginTop: '12px', fontSize: '13px', fontWeight: '700', color: color.text }}>
                      {cat._count.pages} Pages Available
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Dynamic Mid-Page Ad */}
        <AdContainer type="leaderboard" slotId="mid-home-banner" />

        {/* Trending Coloring Pages Shelf */}
        {trendingPages.length > 0 && (
          <section style={{ marginTop: '16px' }}>
            <h2 className="section-title">
              <span>🔥</span> Popular & Trending Now
            </h2>

            <div className="coloring-grid">
              {trendingPages.map((page) => {
                let badgeClass = "difficulty-easy";
                if (page.difficulty === "Medium") badgeClass = "difficulty-medium";
                if (page.difficulty === "Hard") badgeClass = "difficulty-hard";

                return (
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
                          {page.category.name}
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
              })}
            </div>
          </section>
        )}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2026 ColoringPalace. All rights reserved. High-resolution vector-grade printable PDFs.</p>
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#A0998E' }}>
            Terms of Use | Privacy Policy | <Link href="/contact" style={{ textDecoration: 'underline' }}>Takedown Request Form</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
