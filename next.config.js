/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // reactStrictMode: true,
  // swcMinify: true,
}

module.exports = nextConfig
