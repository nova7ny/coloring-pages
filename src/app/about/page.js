import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdContainer from "@/components/AdContainer";

export const metadata = {
  title: "About Us | ColoringPalace",
  description: "Learn more about the mission behind ColoringPalace. We provide high-resolution, vector-grade free printable coloring pages for classrooms and family crafting.",
};

export default function AboutPage() {
  return (
    <>
      <Header active="about" />

      <main className="app-container">
        {/* Dynamic Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="about-top-banner" />

        {/* SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>About Us</span>
        </div>

        {/* About Us Content Layout */}
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
          <h1 style={{ fontSize: '36px', marginBottom: '8px', color: 'var(--text-primary)' }}>About ColoringPalace</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
            Welcome to the creative palace of premium, free printable coloring pages.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>🎨 Our Creative Mission</h2>
          <p style={{ marginBottom: '16px' }}>
            At <strong>ColoringPalace</strong>, we believe that art and coloring are essential tools for learning, coordination, and relaxation. Our mission is simple: to make high-resolution, professional-grade line-art coloring pages accessible to parents, educators, and children worldwide—completely free of charge.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Unlike other sites that distribute low-resolution, blurry scans, all of our printable coloring sheets are compiled in vector-grade PDF format. This ensures clean, bold borders and sharp contours when printed, whether you color with standard crayons, fine gel pens, or heavy markers.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>🏫 Supporting Educators & Parents</h2>
          <p style={{ marginBottom: '16px' }}>
            Coloring is more than a fun pastime—it promotes hand-eye coordination, increases focus, boosts self-esteem, and builds fine motor skills in young kids. We actively support teachers, school boards, and homeschooling parents by providing classroom-friendly licensing. You are free to print as many copies as you need for classrooms, therapy sessions, libraries, and family craft time.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>🖌️ Our Artists & Standards</h2>
          <p style={{ marginBottom: '16px' }}>
            Every drawing in our catalog is carefully curated, cleaned, and categorized by our team. We enforce strict visual standards:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Easy:</strong> Thick outlines and large open coloring zones designed for toddlers.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Medium:</strong> Standard outlines with balanced scenic backgrounds for older kids and teens.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Hard:</strong> Highly detailed, intricate mandalas and repeating patterns designed for adults and stress relief.
            </li>
          </ul>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>✉️ Connect With Us</h2>
          <p style={{ marginBottom: '16px' }}>
            We love hearing from our community! If you have a custom coloring page request (like a specific animal, mythical creature, or machine), feel free to drop a message to our scribes on our <Link href="/contact" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>Contact Page</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
