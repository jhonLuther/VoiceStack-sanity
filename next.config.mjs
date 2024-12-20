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
    
    localeDetection: false,
    locales: ['en', 'en-GB'],
    defaultLocale: 'en'
  },
  
}

export default config
