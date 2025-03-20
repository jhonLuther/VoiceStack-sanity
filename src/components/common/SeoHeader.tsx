// import * as React from 'react';

import Head from "next/head";


export default function SeoHeader({seoData}) {

  console.log({seoData});
  
  return (  
    <Head>

      {/* <title>VoiceStack® | AI Powered Enterprise Phone System</title>
      <meta name="description"  content={props.siteSettings?.ogDescription}></meta>
      <link rel="icon" href={urlForImage(props.siteSettings?.ogFavicon)} sizes="any" type="image/png"/>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href={props?.homeSettings?.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.siteSettings?.ogUrl} />
      <meta property="og:title" content={'VoiceStack'} />
      <meta name="title" content='VoiceStack'></meta>
      <meta property="og:description" content={props.siteSettings?.ogDescription} />
      <meta property="og:image" content={urlForImage(props.siteSettings?.ogImage)} />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      ></script> */}

      <title>{seoData.seoTitle}</title>
      <meta name="description"  content={seoData.seoDescription}></meta>
      <link rel="canonical" href={seoData.canonical} />
    </Head>
  )
}