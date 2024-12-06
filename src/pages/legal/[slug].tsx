import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import React from 'react'
import { SharedPageProps } from '../_app'
import {
  LegalSlugsQuery,
  fetchTermsAndCondition,
  getALLHomeSettings,
  getALLSiteSettings,
  metaDataQuery,
} from '~/lib/sanity.queries'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { PortableText } from '@portabletext/react'
import CustomHead from '~/components/common/CustomHead'
import runQuery from '~/utils/runQuery'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    legalInformation: any
  },
  { slug: string }
> = async ({ draftMode = false, params }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const slug = params?.slug

  const legalInformation = await fetchTermsAndCondition(client, slug)
  // const siteSettings = await metaDataQuery(client)
  const homeSettings = await runQuery(getALLHomeSettings())
  const siteSettings = await runQuery(getALLSiteSettings())

  if (!legalInformation || legalInformation.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      legalInformation,
      siteSettings,
      homeSettings
    },
  }
}

export default function TermsofUse(props: any) {
  const privacyPolicy = props.legalInformation

  if (!privacyPolicy) {
    return <div>No privacy policy found.</div>
  }

  const components: any = {
    list: ({ type, children }: { type: string; children: React.ReactNode }) => {
      if (type === 'bullet') {
        return <ul className="list-disc ml-5 ">{children}</ul>
      }
      if (type === 'number') {
        return <ol className="list-decimal ml-5 ">{children}</ol>
      }
      return <div>{children}</div>
    },
    listItem: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-1 prose-sm">{children}</li>
    ),
    block: {
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="prose-sm">{children}</p>
      ),

      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="font-semibold text-2xl py-4">{children}</h2>
      ),
    },
  }

  return (
    <div className="w-full md:px-64 md:py-20 px-12 py-16">
      <div className="customClass">
        {/* <CustomHead
          {...props}
        /> */}
        <h2 className="text-center font-bold text-2xl py-4">
          {privacyPolicy?.title}
        </h2>
        <PortableText
          value={privacyPolicy?.termsAndCondition}
          components={components}
        />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(LegalSlugsQuery)

  if (!slugs || slugs.length === 0) {
    throw new Error('No slugs found for legal pages.')
  }

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}
