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
    locales: ['en', 'en-GB'],
    defaultLocale: 'en',
    localeDetection:false
  },
  
}

export default config
