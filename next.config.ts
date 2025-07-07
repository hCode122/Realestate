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
    typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/landing',
        permanent: true, // HTTP 308 permanent redirect
      },
    ]
  },


}

export default nextConfig
