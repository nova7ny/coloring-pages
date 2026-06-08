import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdContainer from "@/components/AdContainer";

export const metadata = {
  title: "Privacy Policy | ColoringPalace",
  description: "Read the ColoringPalace Privacy Policy. Learn how we handle cookies, Google AdSense, analytics, and ensure children's safety and privacy.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header active="privacy" />

      <main className="app-container">
        {/* Dynamic Ad Leaderboard */}
        <AdContainer type="leaderboard" slotId="privacy-top-banner" />

        {/* SEO Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Privacy Policy</span>
        </div>

        {/* Privacy Policy Content Layout */}
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
          <h1 style={{ fontSize: '36px', marginBottom: '8px', color: 'var(--text-primary)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
            Last Updated: June 8, 2026
          </p>

          <p style={{ marginBottom: '20px' }}>
            At ColoringPalace, accessible from <Link href="https://coloringpalace.cloud" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>https://coloringpalace.cloud</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ColoringPalace and how we use it.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>1. Google AdSense & Third-Party Advertising</h2>
          <p style={{ marginBottom: '16px' }}>
            We serve third-party advertisements on our website through Google AdSense. In compliance with Google's policies, please review the following information regarding advertising cookies and tracking:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Cookies and Ad Serving:</strong> Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites on the Internet.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Personalized Advertising:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to ColoringPalace and/or other sites on the Internet.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Opting Out:</strong> You may opt out of Google's personalized advertising by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>Google Ads Settings</a> page. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>www.aboutads.info</a>.
            </li>
          </ul>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>2. Log Files & Google Analytics</h2>
          <p style={{ marginBottom: '16px' }}>
            ColoringPalace follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
          <p style={{ marginBottom: '16px' }}>
            We use <strong>Google Analytics</strong> to track site metrics and user behavior. This tool uses cookies to collect anonymous visitor data. This help us understand which coloring categories are most popular, enabling us to generate better content for our users.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>3. Children's Information & COPPA Compliance</h2>
          <p style={{ marginBottom: '16px' }}>
            Another part of our priority is adding protection for children while using the internet. ColoringPalace is a coloring page provider designed for children and families. In strict compliance with the <strong>Children's Online Privacy Protection Act (COPPA)</strong>:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}>
              We do <strong>not</strong> collect, request, store, or share any personally identifiable information from children under the age of 13.
            </li>
            <li style={{ marginBottom: '10px' }}>
              All downloading of coloring pages is performed anonymously without requiring registration, accounts, or user input.
            </li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            If you think that your child provided any kind of personal information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h2 style={{ fontSize: '22px', marginTop: '28px', marginBottom: '12px' }}>4. Consent</h2>
          <p style={{ marginBottom: '16px' }}>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our <Link href="/contact" style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}>Contact Page</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
