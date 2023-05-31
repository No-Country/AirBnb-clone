/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.perfocal.com'
      }
    ]
  }
}

module.exports = nextConfig
