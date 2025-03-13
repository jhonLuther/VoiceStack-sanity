import { GetStaticProps, GetStaticPaths } from 'next'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { SanityClient } from 'sanity'
import Header from '~/components/common/Header'
import { getALLHomeSettings, getFeatureList } from '~/lib/sanity.queries'
import { getHeroSectionData } from '~/lib/sanity.queries'
import { useContext, useEffect } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import SanityPortableText from '~/components/blockEditor/sanityBlockEditor'


interface PageProps {
  page: {
    title: string
    content: any[]
    map?: any
  }
  homeSettings:any;
  heroData:any;
  region: string
  draftMode: boolean,
  token: string
}

export default function Page({ page, homeSettings, heroData, region, draftMode, token }: PageProps) {
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
        Feature Home
        {page?.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <SanityPortableText
                content={item?.description}
                draftMode={draftMode}
                token={token}
              />
            </div>
          )
        })}
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
      region,
      draftMode,
      token: draftMode ? readToken : '',
    },
    // revalidate: 60
  }
}

