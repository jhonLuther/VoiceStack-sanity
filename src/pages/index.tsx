import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Content from '~/components/Content'
import { readToken } from '~/lib/sanity.api'
import {
  heroSection,
  getALLHomeSettings,
  getALLSiteSettings,
  getComparisonTableData,
  getFounderDetails,
  getIntegrationList,
  logoSection,
  featureSectionQuery,
  fetchFaq,
} from '~/lib/sanity.queries'
import Layout from '../components/Layout'
import CustomHead from '~/components/common/CustomHead'
import BookDemoContextProvider from '~/providers/BookDemoProvider'
import runQuery from '~/utils/runQuery'
import HeroSection from '~/components/HeroSection'
import FeatureSection from '~/components/features/FeatureSection'
import LogoListingSection from '~/components/LogoListingSection'
import CardsListingSection from '~/components/CardsListingSection'
import Header from '~/components/common/Header'
import AnimatedBeamSection from '~/components/ui/animated/AnimatedBeamSection'
import BannerSection from '~/components/BannerSection'
import SiteComparisonSection from '~/components/SiteComparisonSection'
import LinksCardsSection from '~/components/LinksCardSection'
import Testimonails from '~/components/testimonials/Testimonials'
import FaqSection from '~/components/FaqSection'
import Footer from '~/components/common/Footer'
import { getClient } from '~/lib/sanity.client'

export const getServerSideProps: GetStaticProps<any> = async ({
  locale,
  draftMode = false,
}) => {
  const region = locale
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const homeSettings = await runQuery(getALLHomeSettings(region))
  const siteSettings = await runQuery(getALLSiteSettings(region))
  const founderDetails = await runQuery(getFounderDetails(region))
  const comparisonTableData = await runQuery(getComparisonTableData(region))
  const integrationPlatforms = await runQuery(getIntegrationList(region))
  const heroSectionData = await heroSection(client,region)
  const logoSectionData = await runQuery(logoSection)
  const featureSectionData = await featureSectionQuery(client,region)
  const faq = await fetchFaq(client,region)

  return {
    props: {
      homeSettings,
      siteSettings,
      founderDetails,
      comparisonTableData,
      integrationPlatforms,
      draftMode,
      token: draftMode ? readToken : '',
      region,
      heroSectionData,
      logoSectionData,
      featureSectionData,
      faq
    }
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getServerSideProps>,
) {
  const { integrationPlatforms, comparisonTableData } = props
  console.log(props?.heroSectionData)
  console.log(props?.featureSectionData, "featuresd")
  const comparisonSectionData = {
    strip: 'The Best-in-class Phone System. For the Best-in-Class Dental Practices.',
    header:
      "No other phone system can match VoiceStack’s AI-driven features,outcome-driven workflows and integration capabilities, as shown in the comparison chart below. ",
    columnDimensionName: 'Features',
    table: comparisonTableData,
  }
  const linkCardSectionData:any = props?.heroSectionData?.heroSubFeature

  return (
    <div>
      <BookDemoContextProvider>
        <Layout {...props}>
           <CustomHead {...props} />
          {/* <Content {...props} /> */}
          <div className='global-wrapper pt-[64px] lg:pt-[98px]'>
            <Header></Header>
            <HeroSection props ={props?.heroSectionData}/>
            <LinksCardsSection props ={linkCardSectionData}/>
            <Testimonails />
            <CardsListingSection></CardsListingSection>
            <LogoListingSection props={props?.logoSectionData}/>
            <FeatureSection props={props?.featureSectionData}/>
            <AnimatedBeamSection data={integrationPlatforms} />
            <SiteComparisonSection data={comparisonSectionData} />
            <FaqSection props ={props?.faq}/>
            <BannerSection></BannerSection>
            <Footer></Footer>
          </div>
        </Layout>
      </BookDemoContextProvider>
    </div>
  )
}
