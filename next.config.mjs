/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
    dangerouslyAllowSVG: true,
  },
  env: {
    PUBLIC_URL: '/',
  },
  i18n: {
    localeDetection:false,
    locales: ['en', 'en-GB','en-AU'],
    defaultLocale: 'en'
  },

  async rewrites() {
   
    return [
      
      {
        source: '/en-gb',
        destination: '/en-GB',
        locale: false,
      },
      {
        source: '/en-gb/:path*',
        destination: '/en-GB/:path*',
        locale: false,
      },
      {
        source: '/en-au',
        destination: '/en-AU',
        locale: false,
      },
      {
        source: '/en-au/:path*',
        destination: '/en-AU/:path*',
        locale: false,
      },
    ];
  },
  
}

export default config
