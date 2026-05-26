import { Fredoka } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Free Printable Coloring Pages for Kids & Adults | ColoringPalace",
  description: "Download thousands of high-resolution free printable coloring pages for kids, teachers, and parents. Easy PDF format, print in one-click.",
  // Google AdSense publisher verification
  other: {
    "google-adsense-account": "ca-pub-2696076579545081",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body>
        {children}

        {/* Google AdSense — loads after page is interactive, non-blocking */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2696076579545081"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

