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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  );
}
