import "./globals.css";

export const metadata = {
  title: "Monday Mandala Style Free Coloring Pages | Dynamic Printables",
  description: "Download thousands of high-resolution free printable coloring pages for kids, teachers, and parents. Easy PDF format, print in one-click.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
