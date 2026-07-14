import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdContainer from "@/components/AdContainer";

export const metadata = {
  title: "Terms of Service | ColoringPalace",
  description: "Read the ColoringPalace Terms of Service. Review the licensing rules for downloading and printing our free coloring sheets.",
};

export default function TermsPage() {
  return (
    <>
      <Header active="terms" />

      <main className="app-container">
        {/* Dynamic Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="terms-top-banner" />

        {/* SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Terms of Service</span>
        </div>

        {/* Terms of Service Content Layout */}
        <div style={{
          maxWidth: "800px",
          width: "100%",
          margin: "0 auto 48px auto",
          backgroundColor: "var(--bg-secondary)",
          border: "2px solid var(--border-color)",
          borderRadius: "var(--border-radius-lg)",
          padding: "40px",
          boxShadow: "var(--card-shadow)",
          lineHeight: "1.7",
          color: "var(--text-primary)"
        }}>
          <h1 style={{ fontSize: '36px', marginBottom: '8px', color: 'var(--text-primary)' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
            Last Updated: July 14, 2026
          </p>

          <p style={{ marginBottom: '20px' }}>
            Welcome to ColoringPalace (the "Site"). By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>1. License to Print & Use Content</h2>
          <p style={{ marginBottom: '16px' }}>
            All coloring pages and digital content available on ColoringPalace are provided free of charge under the following licensing conditions:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Personal & Educational Use:</strong> You are granted a non-exclusive, non-transferable license to download and print our coloring pages for your personal, family, non-commercial, and classroom use.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>No Commercial Redistribution:</strong> You may <strong>not</strong> resell, distribute, sublicense, or bundle our coloring page PDFs or image files in any commercial product, digital template, or publication without express written consent.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>No Bulk Scraping:</strong> Automated scraping, scraping to rebuild similar coloring directories, or bulk downloading via automated scripts is strictly prohibited.
            </li>
          </ul>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>2. Intellectual Property Rights</h2>
          <p style={{ marginBottom: '16px' }}>
            The unique line art, custom vectors, logo, CSS style sheets, dynamic sitemaps, and design system are the exclusive property of ColoringPalace and its creators. We respect intellectual property rights. If you believe any drawing on our site infringes upon your copyright, please notify us immediately through our <Link href="/contact" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>Contact & Takedown form</Link>, and we will review and act upon the request within 24-48 hours.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>3. Disclaimer of Warranties</h2>
          <p style={{ marginBottom: '16px' }}>
            Our coloring sheets and PDF files are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. ColoringPalace does not warrant that the files are completely free of printer errors or compatible with all printing devices.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>4. Changes to Terms</h2>
          <p style={{ marginBottom: '16px' }}>
            We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated modification date. Your continued use of the Site following any changes constitutes your acceptance of the new terms.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>5. Contact Information</h2>
          <p style={{ marginBottom: '16px' }}>
            If you have questions about these Terms of Service, please contact us via our <Link href="/contact" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>Contact Page</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
