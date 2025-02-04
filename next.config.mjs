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

  async redirects() {
   
    return [
      
      {
        source: '/legal/privacy-policy',
        destination: '/legal/2024-10/privacy-policy',
        permanent: false,
      },
      {
        source: '/legal/uk/privacy-policy',
        destination: '/legal/uk/2024-11/privacy-policy',
        permanent: false,
      },
      {
        source: '/legal/au/privacy-policy',
        destination: '/legal/aus/2024-11/privacy-policy',
        permanent: false,
      },
      {
        source: '/fmc',
        destination: '/?lead_source=FMC&utm_medium=digital',
        permanent: false,
      },
      {
        source: '/fmc2',
        destination: '/?lead_source=FMC&utm_medium=print',
        permanent: false,
      },
      
    ]
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
