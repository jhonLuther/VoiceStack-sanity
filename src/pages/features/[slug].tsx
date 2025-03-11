// pages/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next'
import { groq } from 'next-sanity'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import { getALLHomeSettings, getFeaturePageData } from '~/lib/sanity.queries'
import { getHeroSectionData } from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import FeatureBenefitSection from '~/components/features/FeatureBenefitSection'
import FeatureImageSection from '~/components/features/FeatureImageSection'

interface PageProps {
  page: {
    featureSubSection: unknown
    featureBenefitsSection: unknown
    title: string
    content: any[]
    // Add other fields you need
  }
  homeSettings:any;
  heroData:any;
  region: string
}

export default function Page({ page, homeSettings, heroData, region }: PageProps) {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext);
  
  useEffect(() => {
    setIsDemoPopUpShown(heroData);
  },[heroData])

  console.log(page,'page');
  
  
  if (!page) return <div>Page not found</div>
  return (
    <>
      <Header data={homeSettings} />
        <FeatureBenefitSection data={page?.featureSubSection}/>
        <FeatureImageSection data={page?.featureBenefitsSection}/>
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
  const [page, homeSettings, heroData] = await Promise.all([
    getFeaturePageData(client, slug, region),
    getALLHomeSettings(client, region),
    getHeroSectionData(client, region),

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
      region
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


