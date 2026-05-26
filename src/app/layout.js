import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Free Printable Coloring Pages for Kids & Adults | ColoringPalace",
  description: "Download thousands of high-resolution free printable coloring pages for kids, teachers, and parents. Easy PDF format, print in one-click.",
  // Google AdSense publisher verification meta tag
  other: {
    "google-adsense-account": "ca-pub-2696076579545081",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <head>
        {/* ── Google Analytics (GA4) ── */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X2WLQJ4X9P"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X2WLQJ4X9P');
            `,
          }}
        />

        {/* ── Google AdSense ── */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2696076579545081"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}



