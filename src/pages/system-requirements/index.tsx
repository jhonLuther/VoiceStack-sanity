// system-requirements/index.tsx
import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import { getALLHomeSettings } from '~/lib/sanity.queries'
import { getHeroSectionData } from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import Footer from '~/components/common/Footer'
import BannerSection from '~/components/BannerSection'

interface PageProps {
  homeSettings: any;
  heroData: any;
  region: string
}



export const getStaticProps: GetStaticProps<PageProps> = async ({
  locale,
  draftMode = false,
}) => {
  const region = locale

  const client = getClient(draftMode ? { token: readToken } : undefined) as SanityClient
  const [homeSettings, heroData] = await Promise.all([
    getALLHomeSettings(client, region),
    getHeroSectionData(client, region),
  ])


  return {
    props: {
      homeSettings,
      heroData,
      region
    },
    revalidate: 60
  }
}

export default function SystemRequirements({ homeSettings, heroData, region }: PageProps) {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext);

  useEffect(() => {
    setIsDemoPopUpShown(heroData);
  }, [heroData])

  return (
    <>
      <Header data={homeSettings} />
      <BannerSection></BannerSection>
      <Footer></Footer>
      <div>
        {/* <h1>{page.title}{region}</h1> */}
        {/* Add your content rendering here */}
      </div>
    </>
  )
}