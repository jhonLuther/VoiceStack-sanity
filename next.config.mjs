/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
    dangerouslyAllowSVG: true,
  },
  env: {
    PUBLIC_URL: '/',
  },
  async redirects() {
    return [
      {
        source: '/ostermsconditions',
        destination: '/legal/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/osprivacypolicy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/osbusinessagreement',
        destination: '/legal/business-agreement',
        permanent: true,
      },
    ]
  },
}

export default config
