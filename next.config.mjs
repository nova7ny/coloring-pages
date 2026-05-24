/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent Next.js from bundling pdfkit — it must be loaded natively
  // from node_modules so its internal font file paths resolve correctly.
  serverExternalPackages: ["pdfkit"],
};

export default nextConfig;
