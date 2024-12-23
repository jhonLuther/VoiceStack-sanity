import Head from 'next/head'
import React from 'react'
import { formatOrganizationSchema } from '../utils/common'
import { urlForImage } from '~/lib/sanity.image'

export default function CustomHead(props) {
  const SchemaData = formatOrganizationSchema(props.siteSettings.seoSettings)

  return (
    <Head>
      <title>VoiceStack</title>
      <meta name="description"  content={props.siteSettings?.ogDescription}></meta>
      <link rel="icon" href={urlForImage(props.siteSettings?.ogFavicon)} sizes="any" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.siteSettings?.ogUrl} />
      <meta property="og:title" content={'VoiceStack'} />
      <meta name="title" content='VoiceStack'></meta>
      <meta property="og:description" content={props.siteSettings?.ogDescription} />
      <meta property="og:image" content={urlForImage(props.siteSettings?.ogImage)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaData) }}
      ></script>
    </Head>
  )
}
