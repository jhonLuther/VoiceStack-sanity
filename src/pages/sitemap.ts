import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://www.voicestack.com/'

export async function getStaticProps() {


  const url = SITE_URL
  const sitemapEntries = `<?xml version="1.0" encoding="UTF-8"?> 
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${url}</loc>
        <xhtml:link rel="alternate" hreflang="en-AU" href="${url}en-AU" />
        <xhtml:link rel="alternate" hreflang="en" href="${url}" />
      </url>
      <url>
        <loc>${url}en-AU</loc>
        <xhtml:link rel="alternate" hreflang="en-AU" href="${url}en-AU" />
        <xhtml:link rel="alternate" hreflang="en" href="${url}" />
      </url>
    </urlset>`

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemapEntries,
    'utf8',
  )

  return { props: {} }
}

export default function SitemapPage() {
  return null
}
