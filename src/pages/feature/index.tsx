import { GetStaticProps, GetStaticPaths } from 'next'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
<<<<<<< HEAD
import { getALLHomeSettings, getFeatureList } from '~/lib/sanity.queries'
=======
import { getALLHomeSettings, getFeatureList, getPageData } from '~/lib/sanity.queries'
>>>>>>> a82149f6ba21ea0892d1261a1879b9729932043e
import { getHeroSectionData } from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'

interface PageProps {
  page: {
    title: string
    content: any[]
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
  
  if (!page) return <div>Page not found</div>

  console.log(page,'page');
  
  return (
    <>
      <Header data={homeSettings} />
      <div>
        <h1>{page.title}{region}</h1>
        cc
        {/* Add your content rendering here */}
      </div>
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
  const [page, homeSettings, heroData] = await Promise.all([
    getFeatureList(client, region),
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

