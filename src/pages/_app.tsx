import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif,Poppins } from 'next/font/google'
import { lazy } from 'react'
import Layout from '../components/Layout'

export interface SharedPageProps {
  integrationPlatforms(integrationPlatforms: any): unknown
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

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
  return (
    <>
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
