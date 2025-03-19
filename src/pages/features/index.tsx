import { GetStaticProps } from 'next'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import {
  getALLHomeSettings,
  getBannerData,
  getCategoryWithFeatures,
  getFeatureList,
  getFooterData,
  getGlobalSettings,
  getHeroes,
  getHeroSectionData,
  getIntegrationList,
  getContactAndVideoInfo
} from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import SanityPortableText from '~/components/blockEditor/sanityBlockEditor'
import NumberSection from '~/components/NumberSection'
import Footer from '~/components/common/Footer'
import HeroMainSection from '~/components/common/HeroMainSection'
import CategoryFeatureSection from '~/components/CategoryFeatureSection'
import BannerSection from '~/components/BannerSection'
import AnimatedBeamSection from '~/components/ui/animated/AnimatedBeamSection'

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
  integrationPlatforms: any
  bannerData: any
  contactAndVideoData: any
}

export default function Page({ heroes, homeSettings, heroData, region, categories, footerData, globalSettings,bannerData,integrationPlatforms, contactAndVideoData }: PageProps) {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext);
  const videoData = contactAndVideoData?.video;
  useEffect(() => {
    setIsDemoPopUpShown(heroData);
  }, [heroData, setIsDemoPopUpShown]);
  
  if (!heroes) return <div>heroes not found</div>

  // console.log(heroes, 'heroes');
  console.log(categories, 'categories');
  
  return (
    <>
      <Header data={homeSettings} />
      
        <HeroMainSection data={heroes}></HeroMainSection>
        <NumberSection data={globalSettings} />
        <CategoryFeatureSection data={categories} />
        <AnimatedBeamSection data={integrationPlatforms} refer={''} />
        <BannerSection data={bannerData} cta video={videoData}></BannerSection>
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
  const [heroes, homeSettings, heroData, categories, footerData, globalSettings, bannerData,integrationPlatforms,contactAndVideoData ] = await Promise.all([
    getHeroes(client, 'feature', region),
    getALLHomeSettings(client, region),
    getHeroSectionData(client, region),
    getCategoryWithFeatures(client, region),
    getFooterData(client, region),
    getGlobalSettings(client, 'features', region),
    getBannerData(client, region),
    getIntegrationList(client, region),
    getContactAndVideoInfo(client, region)
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
      bannerData,
      integrationPlatforms,
      contactAndVideoData,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}