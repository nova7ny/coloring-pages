import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import AdContainer from "@/components/AdContainer";

export const revalidate = 0;

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const category = await prisma.category.findUnique({
    where: { id },
  });

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `Free Printable ${category.name} Coloring Pages | High-Res PDFs`,
    description: category.description || `Download and print high-quality ${category.name} coloring sheets. Free vector-grade printable PDFs for kids and teachers.`,
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const resolvedSearchParams = await searchParams;
  const activeSubcategory = resolvedSearchParams.sub || null;
  const sortBy = resolvedSearchParams.sort || "popular";

  // 1. Fetch Category Details
  const category = await prisma.category.findUnique({
    where: { id },
  });

  if (!category) {
    notFound();
  }

  // 2. Fetch all pages inside this category
  const whereClause = { categoryId: id };
  if (activeSubcategory) {
    whereClause.subcategory = activeSubcategory;
  }

  const orderByClause = {};
  if (sortBy === "newest") {
    orderByClause.createdAt = "desc";
  } else {
    orderByClause.downloadCount = "desc";
  }

  const pages = await prisma.coloringPage.findMany({
    where: whereClause,
    orderBy: orderByClause,
  });

  // 3. Extract unique subcategories for filter pills
  const allCategoryPages = await prisma.coloringPage.findMany({
    where: { categoryId: id },
    select: { subcategory: true }
  });
  
  const subcategories = Array.from(
    new Set(allCategoryPages.map(p => p.subcategory).filter(Boolean))
  );

  return (
    <>
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
        <AdContainer type="leaderboard" slotId="category-top-banner" />

        {/* SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{category.name}</span>
        </div>

        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>{category.iconPath || '🎨'}</span> Free {category.name} Coloring Sheets
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '800px', lineHeight: '1.5' }}>
            {category.description} Adjust page orientation or layout and click download to get your high-resolution A4/Letter size vector PDF.
          </p>
        </div>

        {/* Filters and Sorting Shelf */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '16px',
            marginBottom: '32px',
            borderBottom: '2px solid var(--border-color)',
            paddingBottom: '20px'
          }}
        >
          {/* Subcategory Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link 
              href={`/category/${id}?sort=${sortBy}`}
              className="nav-item"
              style={{
                backgroundColor: !activeSubcategory ? 'var(--sage-bg)' : 'transparent',
                color: !activeSubcategory ? 'var(--sage-text)' : 'var(--text-secondary)',
                fontWeight: '700',
                border: '1px solid var(--border-color)'
              }}
            >
              All {category.name}
            </Link>
            {subcategories.map(sub => (
              <Link 
                key={sub}
                href={`/category/${id}?sub=${encodeURIComponent(sub)}&sort=${sortBy}`}
                className="nav-item"
                style={{
                  backgroundColor: activeSubcategory === sub ? 'var(--sage-bg)' : 'transparent',
                  color: activeSubcategory === sub ? 'var(--sage-text)' : 'var(--text-secondary)',
                  fontWeight: '700',
                  border: '1px solid var(--border-color)'
                }}
              >
                {sub}
              </Link>
            ))}
          </div>

          {/* Sorting Dropdown/Links */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '14px', fontWeight: '700' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Sort By:</span>
            <Link 
              href={`/category/${id}?sort=popular${activeSubcategory ? `&sub=${activeSubcategory}` : ''}`}
              style={{ 
                color: sortBy === 'popular' ? 'var(--peach-text)' : 'var(--text-secondary)',
                textDecoration: sortBy === 'popular' ? 'underline' : 'none'
              }}
            >
              Popular
            </Link>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <Link 
              href={`/category/${id}?sort=newest${activeSubcategory ? `&sub=${activeSubcategory}` : ''}`}
              style={{ 
                color: sortBy === 'newest' ? 'var(--peach-text)' : 'var(--text-secondary)',
                textDecoration: sortBy === 'newest' ? 'underline' : 'none'
              }}
            >
              Newest
            </Link>
          </div>
        </div>

        {/* Coloring Grid */}
        {pages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 0', border: '2px dashed var(--border-color)', borderRadius: '16px' }}>
            <span style={{ fontSize: '48px' }}>😴</span>
            <h3 style={{ marginTop: '16px' }}>No coloring pages found</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Check back soon! Our agents are currently generating beautiful art for this section.</p>
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
                        {category.name} {page.subcategory ? `> ${page.subcategory}` : ''}
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
                      <AdContainer type="rectangle" slotId="category-inline-ad" />
                    </div>
                  </>
                );
              }

              return cardMarkup;
            })}
          </div>
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
