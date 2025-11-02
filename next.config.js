/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: [
         'res.cloudinary.com',
         'github-readme-stats.vercel.app',
         'github-readme-streak-stats.herokuapp.com',
      ],
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'github-readme-stats.vercel.app',
            pathname: '/api/**',
         },
         {
            protocol: 'https',
            hostname: 'github-readme-streak-stats.herokuapp.com',
            pathname: '/**',
         },
      ],
   },
}

module.exports = nextConfig
