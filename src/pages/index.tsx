import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Content from '~/components/Content'
import { readToken } from '~/lib/sanity.api'
import {
  getALLHomeSettings,
  getAllPMS,
  getALLSiteSettings,
  getComparisonTableData,
  getFounderDetails,
  getIntegrationList,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Layout from '../components/Layout'
import CustomHead from '~/components/common/CustomHead'
import BookDemoContextProvider from '~/providers/BookDemoProvider'
import runQuery from '~/utils/runQuery'
import Section from '~/components/structure/Section'
import HeroSection from '~/components/HeroSection'
import FeatureSection from '~/components/features/FeatureSection'
import LogoListingSection from '~/components/LogoListingSection'
import CardsListingSection from '~/components/CardsListingSection'
import Header from '~/components/common/Header'
import AnimatedBeamSection from '~/components/ui/animated/AnimatedBeamSection'
import ComparisonSection from '~/components/ComparisonSection'
import BannerSection from '~/components/BannerSection'
import SiteComparisonSection from '~/components/SiteComparisonSection'
import LinksCardsSection from '~/components/LinksCardSection'

export const getStaticProps: GetStaticProps<SharedPageProps> = async ({
  draftMode = false,
}) => {
  const homeSettings = await runQuery(getALLHomeSettings())
  const siteSettings = await runQuery(getALLSiteSettings())
  const founderDetails = await runQuery(getFounderDetails())
  const comparisonTableData = await runQuery(getComparisonTableData())
  const allPMS = await runQuery(getAllPMS())
  const integrationPlatforms = await runQuery(getIntegrationList())
  console.log({len: allPMS.length})
  return {
    props: {
      homeSettings,
      siteSettings,
      founderDetails,
      comparisonTableData,
      integrationPlatforms,
      allPMS,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const {integrationPlatforms,comparisonTableData} = props
    // console.log({props});
    const comparisonSectionData = {
      strip: "VoiceStack is the Best-in-class",
      header: "No other phone system can match VoiceStack's AI-driven features,outcome-driven workflows and integration possibilities, as shown in the comparison chart below. ",
      columnDimensionName: "Features", 
      table: comparisonTableData,
    }
    
  return (
    

    <div>
     <BookDemoContextProvider>
        <Layout {...props}>
           {/* <CustomHead {...props} /> */}
          {/* <Content {...props} /> */}
          <div className='global-wrapper pt-[98px]'>
            <Header></Header>
            <HeroSection></HeroSection>
            <LinksCardsSection></LinksCardsSection>
            <LogoListingSection></LogoListingSection>
            <CardsListingSection></CardsListingSection>
            <FeatureSection></FeatureSection>
            <SiteComparisonSection data={comparisonSectionData} />
            <AnimatedBeamSection data={integrationPlatforms}/>

            <BannerSection></BannerSection>
          </div>
         </Layout>
      </BookDemoContextProvider>
    </div>
  )
}
