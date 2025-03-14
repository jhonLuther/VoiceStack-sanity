// pages/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next'
import { groq } from 'next-sanity'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import { fetchFaq, getALLHomeSettings, getBannerData, getFeaturePageData, getFooterData } from '~/lib/sanity.queries'
import { getHeroSectionData } from '~/lib/sanity.queries'
import { useContext, useEffect, useState } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import FeatureBenefitSection from '~/components/features/FeatureBenefitSection'
import FeatureImageSection from '~/components/features/FeatureImageSection'
import FaqSection from '~/components/FaqSection'
import BannerSection from '~/components/BannerSection'
import Footer from '~/components/common/Footer'
import InnerHeroSection from '~/components/InnerHeroSection'

interface PageProps {
  page: {
    heroSection: unknown
    featureFAQSection: unknown
    featureSubSection: unknown
    featureBenefitsSection: unknown
    title: string
    content: any[]
    // Add other fields you need
  }
  homeSettings: any;
  heroData: any;
  region: string;
  faqSectionData: any;
  bannerData: any;
  footerData: any;
}

export default function Page({ page, homeSettings, heroData, region, faqSectionData, bannerData, footerData }: PageProps) {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext);
  const [refer, setRefer] = useState(null);

  useEffect(() => {
    setIsDemoPopUpShown(heroData);
  }, [heroData])

  console.log(page, 'page');


  if (!page) return <div>Page not found</div>
  return (
    <>
      <Header data={homeSettings} />
      <InnerHeroSection data={page.heroSection}/>
      <FeatureBenefitSection data={page?.featureSubSection} />
      <FeatureImageSection data={page?.featureBenefitsSection} />
      <FaqSection data={page.featureFAQSection} mailId={heroData?.contactEmail} revamp={false} />
      <BannerSection data={bannerData} refer={refer} cta={true}></BannerSection>
      <Footer data={footerData}></Footer>
    </>
  )
}

// Helper function for page data fetching



export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  locale,
  draftMode = false,
}) => {
  const region = locale
  const slug = params?.slug as string

  const client = getClient(draftMode ? { token: readToken } : undefined) as SanityClient
  const [page, homeSettings, heroData, faqSectionData, footerData, bannerData] = await Promise.all([
      getFeaturePageData(client, slug, region),
      getALLHomeSettings(client, region),
      getHeroSectionData(client, region),
      fetchFaq(client, region),
      getFooterData(client, region),
      getBannerData(client, region)

    ])

  if (!page) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      page,
      homeSettings,
      heroData,
      region,
      faqSectionData, footerData, bannerData
    },
    // revalidate: 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()

  // Get all pages with their slugs and languages
  const query = groq`*[_type == "featureList"]{
    "slug": slug.current,
    language
  }`

  const pages = await client.fetch(query)

  // Create paths for each page in each language
  const paths = pages.map((page: any) => ({
    params: {
      slug: page.slug
    },
    // This matches your existing locale pattern
    locale: page.language
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}


