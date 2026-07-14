import Link from "next/link";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© 2026 ColoringPalace. All rights reserved. High-resolution vector-grade printable PDFs.</p>
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#A0998E' }}>
          <Link href="/about" style={{ textDecoration: 'underline' }}>About Us</Link> | <Link href="/terms" style={{ textDecoration: 'underline' }}>Terms of Service</Link> | <Link href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link> | <Link href="/contact" style={{ textDecoration: 'underline' }}>Contact & Takedown Form</Link>
        </p>
      </div>
    </footer>
  );
}
