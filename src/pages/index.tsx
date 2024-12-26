import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from '~/lib/sanity.api'
import {
  getALLHomeSettings,
  getALLSiteSettings,
  getComparisonTableData,
  getFounderDetails,
  getIntegrationList,
  logoSection,
  featureSectionQuery,
  fetchFaq,
  getHeroSectionData,
  getTestimonialSecitonData,
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
import { isEmpty } from 'lodash'
import { useEffect } from 'react'

export const getServerSideProps: GetStaticProps<any> = async ({
  locale,
  draftMode = false,
}) => {
  const region = locale
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const homeSettings = await getALLHomeSettings(client, region)
  const siteSettings = await runQuery(getALLSiteSettings(region))
  const founderDetails = await runQuery(getFounderDetails(region))
  const comparisonTableData = await runQuery(getComparisonTableData(region))
  const integrationPlatforms = await getIntegrationList(client, region);
  const heroSectionData = await getHeroSectionData(client, region)
  const testimonialSecitonData = await getTestimonialSecitonData(client, region)
  const logoSectionData = await logoSection(client,region);
  const featureSectionData = await featureSectionQuery(client, region)
  const faqSectionData = await fetchFaq(client,region)

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
      testimonialSecitonData,
      faqSectionData
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getServerSideProps>,
) {

  const { className, ...rProps} = props
  // can be used to scroll to top
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    
  if (isEmpty(rProps)) {
    return <><p className="p-5">Loading ... </p></>
  }

  
  const {
    homeSettings,
    heroSectionData,
    testimonialSecitonData,
    logoSectionData,
    featureSectionData,
    integrationPlatforms,
    comparisonTableData,
    faqSectionData
  } = props

  const comparisonSectionData = {
    strip:
      'The Best-in-class Phone System. For the Best-in-Class Dental Practices.',
    header:
      'No other phone system can match VoiceStack’s AI-driven features,outcome-driven workflows and integration capabilities, as shown in the comparison chart below. ',
    columnDimensionName: 'Features',
    table: comparisonTableData,
  }
  const linkCardSectionData: any = heroSectionData?.heroSubFeature

  return (
    <div>
      <BookDemoContextProvider>
        <Layout {...props}>
          <CustomHead {...props} />
          {/* <Content {...props} /> */}
          <div className="global-wrapper pt-[64px] lg:pt-[98px]">
            <Header data ={homeSettings} />
            <HeroSection data={heroSectionData}  />
            <LinksCardsSection data={linkCardSectionData} />
            <Testimonails data={testimonialSecitonData} />
            <CardsListingSection />
            <LogoListingSection data={logoSectionData} />
            <FeatureSection data={featureSectionData} />
            <AnimatedBeamSection data={integrationPlatforms} />
            <SiteComparisonSection data={comparisonSectionData} />
            <FaqSection data={faqSectionData}/>
            <BannerSection></BannerSection>
            <Footer></Footer>
          </div>
        </Layout>
      </BookDemoContextProvider>
    </div>
  )
}
