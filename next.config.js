/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      esmExternals: false, // Forces Next.js to use CommonJS
    },
    transpilePackages: ['sanity-plugin-media'],
  };
  
  module.exports = nextConfig;
  