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
import AnimatedBeamSection from '~/components/ui/animated/AnimatedBeamSection'
import LinkCards from '~/components/linkCards'

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
  const {integrationPlatforms} = props
    
  return (
    

    <div>
     <BookDemoContextProvider>
        <Layout {...props}>
           {/* <CustomHead {...props} /> */}
          {/* <Content {...props} /> */}
          <div className='global-wrapper'>
            
            <HeroSection></HeroSection>
            <AnimatedBeamSection data={integrationPlatforms}/>

            <LinkCards></LinkCards>

            <FeatureSection></FeatureSection>
          </div>
         </Layout>
      </BookDemoContextProvider>
    </div>
  )
}
