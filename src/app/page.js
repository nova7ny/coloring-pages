import Link from "next/link";
import { prisma } from "@/lib/db";
import AdContainer from "@/components/AdContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header active="home" />

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

        {/* Search the Palace Section (Horizontal Layout with rotated Sword arrow) */}
        <section className="search-section-new">
          <div className="search-card-horizontal">
            <h2 className="search-heading-horizontal">Search the Palace</h2>
            
            {/* Playful medieval sword arrow divider (points right on desktop, down on mobile) */}
            <div className="sword-container-horizontal">
              <svg viewBox="0 0 100 200" width="40" height="80" xmlns="http://www.w3.org/2000/svg" className="sword-svg-horizontal">
                {/* Pommel (Golden) */}
                <circle cx="50" cy="20" r="8" fill="#D4AF37" stroke="#997A15" strokeWidth="1.5" />
                <circle cx="50" cy="20" r="3" fill="#FFE57F" />

                {/* Grip/Handle (Gold wraps over dark wood) */}
                <rect x="46" y="28" width="8" height="35" rx="3" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1" />
                <line x1="46" y1="35" x2="54" y2="35" stroke="#D4AF37" strokeWidth="1.5" />
                <line x1="46" y1="43" x2="54" y2="43" stroke="#D4AF37" strokeWidth="1.5" />
                <line x1="46" y1="51" x2="54" y2="51" stroke="#D4AF37" strokeWidth="1.5" />
                <line x1="46" y1="59" x2="54" y2="59" stroke="#D4AF37" strokeWidth="1.5" />

                {/* Crossguard (Golden curved wings) */}
                <path d="M 25 63 C 25 63, 40 68, 50 68 C 60 68, 75 63, 75 63 C 75 63, 70 73, 50 73 C 30 73, 25 63, 25 63 Z" fill="#D4AF37" stroke="#997A15" strokeWidth="1.5" />
                <polygon points="50,65 54,69 50,73 46,69" fill="#E53935" />

                {/* Blade (Silver, double-edged 3D depth) */}
                <path d="M 40 73 L 40 170 L 50 190 L 50 73 Z" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="0.5" />
                <path d="M 50 73 L 50 190 L 60 170 L 60 73 Z" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="0.5" />
                <line x1="50" y1="73" x2="50" y2="188" stroke="#757575" strokeWidth="1.5" />
                
                {/* Shiny metallic highlight */}
                <path d="M 42 78 L 42 165 L 45 165 L 45 78 Z" fill="#FFFFFF" opacity="0.4" />
              </svg>
            </div>

            {/* Native HTML Form that submits on hitting Enter (No search button) */}
            <form action="/search" method="GET" className="search-input-wrapper-horizontal">
              <input 
                type="text" 
                name="q" 
                placeholder="Search thousands of coloring pages (e.g. unicorn, dog, dragon...)" 
                required 
                className="search-input"
              />
            </form>
          </div>
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
        {/* Semantic SEO content section to improve Text-to-HTML ratio and rankings */}
        <section className="homepage-seo-section" style={{ marginTop: '48px', borderTop: '1px solid var(--border-color)', paddingTop: '32px' }}>
          <h2 className="section-title">
            <span>📚</span> Free Printable Coloring Pages FAQ
          </h2>
          <div className="seo-faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '20px' }}>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-primary)' }}>Are the coloring pages on ColoringPalace completely free?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Yes! Every single coloring sheet on our site is 100% free to print and download for personal, educational, and non-commercial use. There are no subscriptions, registration walls, or hidden fees. Simply browse your favorite categories, find a drawing you love, and start printing.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-primary)' }}>How do I download and print these coloring sheets?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Printing is quick and easy. Click on any coloring page thumbnail to open its detail view, then click the prominent "Download PDF" button. A high-resolution, vector-grade PDF will open or download instantly. Ensure your printer settings are set to "Fit to Page" for the best border alignment on standard US Letter or A4 paper.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-primary)' }}>What makes your coloring vectors premium-grade?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Unlike low-resolution coloring templates that turn blurry or pixelated when printed, all of our sheets are processed as crisp, vector-grade line art. This ensures clean, smooth outlines whether you color with standard crayons, fine gel pens, or heavy markers.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-primary)' }}>Can teachers use these templates in the classroom?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Absolutely! We actively encourage teachers, homeschoolers, and educators to print as many copies as needed for class activities, lessons, and crafting projects. Coloring helps children build fine motor skills, hand-eye coordination, and focus.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
