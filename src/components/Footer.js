import Link from "next/link";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© 2026 ColoringPalace. All rights reserved. High-resolution vector-grade printable PDFs.</p>
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#A0998E' }}>
          Terms of Use | Privacy Policy | <Link href="/contact" style={{ textDecoration: 'underline' }}>Takedown Request Form</Link>
        </p>
      </div>
    </footer>
  );
}
