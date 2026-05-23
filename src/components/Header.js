import Link from "next/link";

export default function Header({ active }) {
  return (
    <header className="nav-header">
      <div className="nav-content">
        <Link href="/" className="logo-link">
          <img src="/logo.png" alt="Coloring Palace Logo" className="header-logo" />
          <span className="logo-title">Coloring <span className="logo-accent">Palace</span></span>
        </Link>
        <nav className="nav-links">
          <Link href="/" className={`nav-item ${active === "home" ? "active" : ""}`}>Home</Link>
          <Link href="/trending" className={`nav-item ${active === "trending" ? "active" : ""}`}>Trending</Link>
          <Link href="/contact" className={`nav-item ${active === "contact" ? "active" : ""}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
