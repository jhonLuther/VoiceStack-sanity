import { GetStaticProps } from 'next'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import {
  getALLHomeSettings,
  getCategoryWithFeatures,
  getFeatureList,
  getFooterData,
  getGlobalSettings,
  getHeroes,
  getHeroSectionData
} from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import SanityPortableText from '~/components/blockEditor/sanityBlockEditor'
import NumberSection from '~/components/NumberSection'
import Footer from '~/components/common/Footer'
import HeroMainSection from '~/components/common/HeroMainSection'

export interface PageProps {
  heroes: {
    title: string
    content: any[]
    map?: any
  }
  homeSettings: any
  heroData: any
  region: string
  draftMode: boolean
  categories: any
  token: string
  footerData: any
  globalSettings: any
}

export default function Page({ heroes, homeSettings, heroData, region, categories, footerData, globalSettings, draftMode, token }: PageProps) {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext);
  
  useEffect(() => {
    setIsDemoPopUpShown(heroData);
  }, [heroData, setIsDemoPopUpShown]);
  
  if (!heroes) return <div>heroes not found</div>

  // console.log(heroes, 'heroes');
  console.log(categories, 'categories');
  
  return (
    <>
      <Header data={homeSettings} />
        Feature Home
        <HeroMainSection data={heroes}></HeroMainSection>
        <NumberSection data={globalSettings} />
        <Footer data={footerData}></Footer>
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
  const [heroes, homeSettings, heroData, categories, footerData, globalSettings] = await Promise.all([
    getHeroes(client, 'feature', region),
    getALLHomeSettings(client, region),
    getHeroSectionData(client, region),
    getCategoryWithFeatures(client, region),
    getFooterData(client, region),
    getGlobalSettings(client, 'features', region)
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
      globalSettings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}