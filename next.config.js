/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      esmExternals: false, // Forces Next.js to use CommonJS
    },
  };
  
  module.exports = nextConfig;
  