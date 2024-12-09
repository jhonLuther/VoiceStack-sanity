import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSection'
import CustomerSection from './CustomerSection'
import ComparisonSection from './ComparisonSection'

/*
  Idea is to use adaptors to connect sanity data and UI components.
*/
const Content = (props: any) => {
  const { homeSettings, siteSettings, founderDetails, comparisonTableData, allPMS } =
    props

  if (!homeSettings && !siteSettings) return <></>

  const cta = {
    url: siteSettings.demoBtnUrl,
    name: homeSettings?.bookBtnContent,
  }

  const heroSectionData = {
    strip: homeSettings?.heroStrip,
    header: {
      static: homeSettings?.heroTitleStatic,
      dynamic: homeSettings?.heroTitleStaticDynamic,
    },
    description: homeSettings?.heroDescription,
    cta,
  }

  const featureSectionData = {
    strip: 'FEATURES',
    header: homeSettings?.featureHeader,
    featuresByCategory: homeSettings?.selectedFeatures,
    cta,
  }

  const integrationsSectionData = {
    strip: 'More than 125 available integrations',
    header: homeSettings?.integrationHeader,
    integrations: homeSettings?.selectedIntegrations,
    pms: allPMS,
    cta,
  }

  const benefitSectionData = {
    strip: 'BENEFITS',
    header: homeSettings?.benefitHeader,
    benefits: homeSettings?.selectedBenefits,
    cta,
  }

  const testimonialSectionData = {
    strip: 'testimonials',
    header: homeSettings?.testimonialHeader,
    testimonials: homeSettings?.selectedTestimonials,
    cta,
  }

  const customerSectionData = {
    strip: 'Trusted by multi-location DSOs across the US',
    customers: homeSettings.selectedPartners,
  }

  const aboutSectionData = {
    heading: 'About Us',
    description: siteSettings.ogDescription,
    image: '/about-us.png',
    founders: founderDetails,
  }

  const comparisonSectionData = {
    strip: "COMPARISON",
    header: "How OSDental Compares",
    columnDimensionName: "Features", 
    table: comparisonTableData,
    cta,
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection data={heroSectionData} />
      <FeatureSection data={featureSectionData} />
      <IntegrationSection data={integrationsSectionData} />
      <BenefitsSection data={benefitSectionData} />
      <TestimonialSection data={testimonialSectionData} />
      <ComparisonSection data={comparisonSectionData} />
      <AboutUsSection data={aboutSectionData} />
    </div>
  )
}

export default Content
