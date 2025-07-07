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
}

export default nextConfig