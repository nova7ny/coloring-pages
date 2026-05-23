import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import AdContainer from "@/components/AdContainer";

export const revalidate = 0;

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const page = await prisma.coloringPage.findUnique({
    where: { id },
  });

  if (!page) {
    return {
      title: "Coloring Page Not Found",
    };
  }

  return {
    title: page.seoTitle || `${page.title} - Free PDF Printable Coloring Page`,
    description: page.seoDescription || `Free high-resolution printable PDF of ${page.title}. Perfect coloring sheet for kids, classrooms, and family crafting. Download in one-click.`,
  };
}

export default async function ColoringPageDetail({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 1. Fetch Coloring Page details
  const page = await prisma.coloringPage.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });

  if (!page) {
    notFound();
  }

  // 2. Fetch up to 4 related pages in the same category (excluding current page)
  const relatedPages = await prisma.coloringPage.findMany({
    where: {
      categoryId: page.categoryId,
      id: { not: id },
    },
    take: 4,
    orderBy: {
      downloadCount: "desc",
    },
  });

  // 3. Setup JSON-LD CreativeWork Schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": page.title,
    "description": page.seoDescription || `Free printable ${page.title} coloring page.`,
    "genre": "Coloring Page",
    "image": `http://localhost:3000${page.imagePath}`,
    "educationalUse": "Coloring Activity",
    "difficulty": page.difficulty,
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      {/* Inject Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="nav-header">
        <div className="nav-content">
          <Link href="/" className="logo-link">
            ColoringPalace<span className="logo-dot"></span>
          </Link>
          <nav className="nav-links">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/trending" className="nav-item">Trending</Link>
            <Link href="/contact" className="nav-item">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="app-container">
        {/* Dynamic Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="detail-top-banner" />

        {/* Dynamic SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/category/${page.categoryId}`}>{page.category.name}</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{page.title}</span>
        </div>

        {/* Two-Column Details Layout */}
        <div className="detail-container">
          
          {/* Left Column - Preview, Share, SEO Article */}
          <div className="detail-main">
            <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>
              {page.title}
            </h1>
            
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
              Category: <Link href={`/category/${page.categoryId}`} style={{ color: 'var(--sage-text)', textDecoration: 'underline' }}>{page.category.name}</Link>
              {page.subcategory && ` > Subcategory: ${page.subcategory}`}
            </div>

            {/* Image Preview Frame */}
            <div className="preview-container">
              <img 
                className="preview-img" 
                src={page.imagePath} 
                alt={`${page.title} Preview Drawing`} 
              />
            </div>

            {/* Social Sharing Component Placeholder */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '32px', padding: '16px', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-secondary)' }}>Share this sheet:</span>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px' }} title="Share on Pinterest">📌</button>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px' }} title="Share on Facebook">🔵</button>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px' }} title="Send via Email">✉️</button>
            </div>

            {/* SEO Articles content */}
            <article className="seo-content">
              <h2>Coloring Ideas & Mediums</h2>
              <p>
                This high-quality <strong>{page.title}</strong> is designed to offer a fantastic creative experience. For coloring, we recommend trying standard colored pencils for detailed areas or wax crayons for younger colorists. If you are printing on heavy-grade mixed media paper, you can even explore light watercolors or soft brush markers without worrying about paper bleed!
              </p>
              
              <h2>Perfect for Teachers & Homeschooling</h2>
              <p>
                All our templates are provided as free vector-grade printables in a standardized PDF format. Teachers can easily download and print multiple copies to use as a quiet classroom reward, an art activity, or a supplemental visual aid for teaching lessons about <strong>{page.category.name}</strong>.
              </p>

              <h2>How to Print Your PDF Page</h2>
              <p>
                Clicking the prominent download button in the details panel triggers a direct redirect to our high-resolution vector PDF, pre-formatted to fit perfectly on standard <strong>US Letter</strong> or <strong>A4</strong> paper sizes. Ensure your printer scale settings are adjusted to "Fit to Page" for a clean border alignment.
              </p>
            </article>

            {/* Inline Ad Rectangle */}
            <AdContainer type="rectangle" slotId="detail-bottom-rectangle" />
          </div>

          {/* Right Column - Download Actions, Meta, Skyscraper Ad */}
          <div className="detail-sidebar">
            
            {/* Primary Action Box */}
            <div className="detail-sidebar-block" style={{ border: '2px solid var(--peach-text)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--peach-text)' }}>📥 Print & Download</h3>
              
              {/* Direct Link to API Download Tracker */}
              <a 
                href={`/api/download?id=${page.id}`} 
                className="download-btn" 
                style={{ width: '100%', textDecoration: 'none', display: 'flex' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>

              <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4' }}>
                100% Free download. Standard PDF format. Optimized for home printing.
              </p>
            </div>

            {/* Metadata Detail Box */}
            <div className="detail-sidebar-block">
              <h3 style={{ fontSize: '18px', marginBottom: '16px', borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>Sheet Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Difficulty:</span>
                  <span style={{ fontWeight: '700' }}>{page.difficulty}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>File Format:</span>
                  <span style={{ fontWeight: '700' }}>High-Res PDF</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Total Prints:</span>
                  <span style={{ fontWeight: '700' }}>{page.downloadCount}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>License:</span>
                  <span style={{ fontWeight: '700', color: 'var(--sage-text)' }}>Free Personal Use</span>
                </div>
              </div>
            </div>

            {/* Skyscraper Sidebar Ad */}
            <AdContainer type="skyscraper" slotId="detail-sidebar-skyscraper" />
          </div>
        </div>

        {/* Related Suggestions Grid */}
        {relatedPages.length > 0 && (
          <section style={{ marginTop: '48px' }}>
            <h2 className="section-title">
              <span>🖼️</span> You May Also Like
            </h2>
            
            <div className="coloring-grid">
              {relatedPages.map((related) => {
                let badgeClass = "difficulty-easy";
                if (related.difficulty === "Medium") badgeClass = "difficulty-medium";
                if (related.difficulty === "Hard") badgeClass = "difficulty-hard";

                return (
                  <div key={related.id} className="coloring-card">
                    <Link href={`/coloring-page/${related.id}`}>
                      <div className="coloring-card-preview">
                        <img 
                          className="coloring-card-img" 
                          src={related.imagePath} 
                          alt={related.title} 
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <div className="coloring-card-info">
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--sage-text)', marginBottom: '4px' }}>
                          {page.category.name}
                        </div>
                        <Link href={`/coloring-page/${related.id}`}>
                          <h3 className="coloring-card-title">{related.title}</h3>
                        </Link>
                      </div>
                      <div className="coloring-card-meta">
                        <span className={`difficulty-badge ${badgeClass}`}>{related.difficulty}</span>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                          📥 {related.downloadCount} prints
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
