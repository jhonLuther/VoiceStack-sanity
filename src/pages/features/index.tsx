import { GetStaticProps, GetStaticPaths } from 'next'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import { getALLHomeSettings, getCategoryWithFeatures, getFeatureList, getFooterData, getHeaders } from '~/lib/sanity.queries'
import { getHeroSectionData } from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import SanityPortableText from '~/components/blockEditor/sanityBlockEditor'
import NumberSection from '~/components/NumberSection'
import Footer from '~/components/common/Footer'


interface PageProps {
  heroes: {
    title: string
    content: any[]
    map?: any
  }
  homeSettings:any;
  heroData:any;
  region: string
  draftMode: boolean,
  categories: any
  token: string
  footerData: any
}

export default function Page({ heroes, homeSettings, heroData, region,categories,footerData, draftMode, token }: PageProps) {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext);
  
  useEffect(() => {
    setIsDemoPopUpShown(heroData);
  },[heroData])
  
  if (!heroes) return <div>heroes not found</div>

  console.log(categories,'categories');
  
  return (
    <>
      <Header data={homeSettings} />
      <div>
        <h1>{heroes.title}{region}</h1>
        Feature Home
        <NumberSection />
        {heroes?.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <SanityPortableText
                content={item?.description}
                draftMode={draftMode}
                token={token}
              />
            </div>
          )
        })}
        <Footer data={footerData}></Footer>

      </div>
    </>
  )
}


export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  locale,
  draftMode = false,
}) => {
  const region = locale
  const slug = params?.slug as string
  
  const client = getClient(draftMode ? { token: readToken } : undefined) as SanityClient
  const [heroes, homeSettings, heroData,categories,footerData] = await Promise.all([
    getHeaders(client, region),
    getALLHomeSettings(client, region),
    getHeroSectionData(client, region),
    getCategoryWithFeatures(client, region),
    getFooterData(client, region),
    
  ])

  if (!heroes) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      heroes,
      homeSettings,
      heroData,
      region,
      categories,
      footerData,
      draftMode,
      token: draftMode ? readToken : '',
    },
    // revalidate: 60
  }
}

