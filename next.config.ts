import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'real-estate.jamous-tech.com',
        pathname: '/storage/**', 
      },
     
    ],
    domains: ['placehold.co'],
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during build
  }

}

export default nextConfig
