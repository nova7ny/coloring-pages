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
        {/*
          AdSense script placed directly in <head> so it appears in the
          server-rendered HTML that Google's verification crawler reads.
          Using afterInteractive via next/script would inject it only after
          JS hydration, making it invisible to bots checking the raw source.
        */}
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


