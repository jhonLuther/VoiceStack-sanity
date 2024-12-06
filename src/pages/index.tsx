import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Content from '~/components/Content'
import { readToken } from '~/lib/sanity.api'
import {
  getALLHomeSettings,
  getAllPMS,
  getALLSiteSettings,
  getComparisonTableData,
  getFounderDetails,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Layout from '../components/Layout'
import CustomHead from '~/components/common/CustomHead'
import BookDemoContextProvider from '~/providers/BookDemoProvider'
import runQuery from '~/utils/runQuery'

export const getStaticProps: GetStaticProps<SharedPageProps> = async ({
  draftMode = false,
}) => {
  const homeSettings = await runQuery(getALLHomeSettings())
  const siteSettings = await runQuery(getALLSiteSettings())
  const founderDetails = await runQuery(getFounderDetails())
  const comparisonTableData = await runQuery(getComparisonTableData())
  const allPMS = await runQuery(getAllPMS())
  console.log({len: allPMS.length})
  return {
    props: {
      homeSettings,
      siteSettings,
      founderDetails,
      comparisonTableData,
      allPMS,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return (
    <div>
      test
    </div>
    // <div>
    //   <BookDemoContextProvider>
    //     <Layout {...props}>
    //       {/* <CustomHead {...props} /> */}
    //       <Content {...props} />
    //     </Layout>
    //   </BookDemoContextProvider>
    // </div>
  )
}
