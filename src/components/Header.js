"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="nav-header">
      <div className="nav-content">
        {/* Brand Logo Stacked: Logo Image on Left, Word Part on Right */}
        <Link href="/" className="logo-link">
          <img src="/logo.png" alt="Coloring Palace Logo" className="header-logo" />
          <span className="logo-title">Coloring <span className="logo-accent">Palace</span></span>
        </Link>

        {/* Hamburger Menu Toggle Button */}
        <button 
          onClick={toggleMenu} 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`} 
          aria-label="Toggle Navigation Menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Backdrop Overlay */}
        <div 
          className={`menu-backdrop ${isMenuOpen ? "open" : ""}`} 
          onClick={closeMenu}
        />

        {/* Slide-out Sidebar Drawer Navigation */}
        <nav className={`menu-drawer ${isMenuOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <span className="drawer-brand">Menu</span>
            <button onClick={closeMenu} className="drawer-close" aria-label="Close Menu">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="drawer-links">
            <Link href="/" onClick={closeMenu} className={`drawer-item ${active === "home" ? "active" : ""}`}>
              Home
            </Link>
            <Link href="/trending" onClick={closeMenu} className={`drawer-item ${active === "trending" ? "active" : ""}`}>
              Trending
            </Link>
            <Link href="/contact" onClick={closeMenu} className={`drawer-item ${active === "contact" ? "active" : ""}`}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

