import Link from "next/link";
import AdContainer from "@/components/AdContainer";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact & Takedown Request | ColoringPalace",
  description: "Get in touch with ColoringPalace or submit a copyright takedown request. We respect intellectual property and review requests within 24-48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />

      <main className="app-container">
        {/* Dynamic Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="contact-top-banner" />

        {/* SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Contact & Takedown</span>
        </div>

        {/* Contact Form Layout */}
        <div style={{
          maxWidth: "800px",
          width: "100%",
          margin: "0 auto 48px auto",
          backgroundColor: "var(--bg-secondary)",
          border: "2px solid var(--border-color)",
          borderRadius: "var(--border-radius-lg)",
          padding: "40px",
          boxShadow: "var(--card-shadow)"
        }}>
          <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
            Have questions, feedback, or custom drawing suggestions? Reach out to us using the form below!
          </p>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
