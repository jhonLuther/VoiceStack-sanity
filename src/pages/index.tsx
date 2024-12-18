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
import Testimonails from '~/components/testimonials/Testimonials'
import FaqSection from '~/components/FaqSection'
import Footer from '~/components/common/Footer'

export const getServerSideProps: GetStaticProps<SharedPageProps> = async ({
  req,
  draftMode = false,
}) => {
  const region = req?.headers?.referer?.includes('en-GB') ?  'aus' : 'us'
  const homeSettings = await runQuery(getALLHomeSettings(region))
  const siteSettings = await runQuery(getALLSiteSettings(region))
  const founderDetails = await runQuery(getFounderDetails(region))
  const comparisonTableData = await runQuery(getComparisonTableData(region))
  const allPMS = await runQuery(getAllPMS(region))
  const integrationPlatforms = await runQuery(getIntegrationList(region))

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
      region,
    }
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getServerSideProps>,
) {
  const { integrationPlatforms, comparisonTableData } = props
  console.log(props?.region)
  const comparisonSectionData = {
    strip: 'VoiceStack is the Best-in-class',
    header:
      "No other phone system can match VoiceStack's AI-driven features,outcome-driven workflows and integration possibilities, as shown in the comparison chart below. ",
    columnDimensionName: 'Features',
    table: comparisonTableData,
  }

  return (
    <div>
      <BookDemoContextProvider>
        <Layout {...props}>
           <CustomHead {...props} />
          {/* <Content {...props} /> */}
          <div className='global-wrapper pt-[64px] lg:pt-[98px]'>
            <Header></Header>
            <HeroSection></HeroSection>
            <LinksCardsSection></LinksCardsSection>
            <Testimonails />
            <LogoListingSection></LogoListingSection>
            <FeatureSection></FeatureSection>
            <AnimatedBeamSection data={integrationPlatforms} />
            <CardsListingSection></CardsListingSection>
            <SiteComparisonSection data={comparisonSectionData} />
            <FaqSection></FaqSection>
            <BannerSection></BannerSection>
            <Footer></Footer>
          </div>
        </Layout>
      </BookDemoContextProvider>
    </div>
  )
}
