import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif,Poppins } from 'next/font/google'
import { lazy } from 'react'
import Layout from '../components/Layout'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { getCookie } from '~/utils/cookie'

export interface SharedPageProps {
  heroSectionData(heroSectionData: any): any
  integrationPlatforms(integrationPlatforms: any): unknown
  comparisonTableData:any
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'));
const countryCode = getCookie("__vs_ver");

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

// const sans = Inter({
//   variable: '--font-family-sans',
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '700', '800'],
// })

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  const router = useRouter();
  return (
    <>
    {/* Google Analytics */}
    <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YY0CHYH7EY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YY0CHYH7EY');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCX7H59S');
          `}
        </Script>

        {/* Start cookieyes banner */}
        {countryCode && countryCode == "2" && (
          <Script id="cookieyes" strategy="afterInteractive" 
            src="https://cdn-cookieyes.com/client_data/892b60d226bd40003a3303d6/script.js">
          </Script>
        )}

      {/* Meta Pixel Code */}
      <Script id='meta-pixel-code'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '474197578586490');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Fallback for users with disabled JavaScript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=474197578586490&ev=PageView&noscript=1"
          alt="facebook pixel"
        />
      </noscript>

        {/* <!--[BEGIN Google Tag Manager (noscript)]--> */}
	      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCX7H59S" height="0" width="0"
			    style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
	      {/* <!--[END Google Tag Manager (noscript)]--> */}
    
      <style jsx global>
        {`
          :root {
        
            --font-family-sans: ${poppins.style.fontFamily};
            --font-family-serif: ${serif.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
          }
        `}
      </style>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} className={poppins.className}/>
        </PreviewProvider>
      ) : (

        <Component {...pageProps} className={poppins.className}/>

    
      )}
    </>
  )
}
