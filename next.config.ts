import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ossimg.tirangaagent.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
