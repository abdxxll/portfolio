/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // makes a static build in /out
  images: { unoptimized: true },  // Required for static export with next/image
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;