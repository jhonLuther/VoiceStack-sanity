import React from 'react'
import {
  PortableText,
  PortableTextReactComponents,
} from '@portabletext/react'
import { getClient } from '~/lib/sanity.client'
import DynamicComponent from './DynamicComponent'
// import DecoratorTable from '~/components/DecoratorTable'
// import ListItem from '~/components/typography/ListItem'
// import { VideoModal } from '../commonSections/VideoModal'
// import ImageLoader from '../commonSections/ImageLoader'

interface SanityPortableTextProps {
  content: any
  draftMode?: boolean
  token?: string
}

const SanityPortableText: React.FC<SanityPortableTextProps> = ({
  content,
  draftMode = false,
  token = '',
}) => {
  const portableTextComponents: Partial<PortableTextReactComponents> = {
    marks: {
      link: ({ value, children }) => {
        return (
          <a href={value?.href} target="_blank" className="!text-blue-500">
            {children}
          </a>
        )
      },
    },

    block: {

    },
    types: {
      // image: ({ value }) => {
      //   if (!value?.asset) return null;
      //   return (
      //     <ImageLoader
      //       image={value.asset}
      //       priority={true}
      //       altText={value?.asset?.altText || 'Post image'}
      //       title={value.asset.title || 'Post image'}
      //       imageClassName="w-full"
      //       fixed={false}
      //       client={getClient(draftMode ? { token } : undefined)}
      //        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      //     />
      //   )
      // },

      // table: ({ value }) => {
      //   return <DecoratorTable>{value}</DecoratorTable>
      // },
      htmlCode: ({ value }) => {
        return (
          <div
            className="content-wrapper w-full"
            dangerouslySetInnerHTML={{ __html: value.htmlCode }}
          />
        )
      },
      dynamicComponent: ({ value }) => {        
        if (!value) return null;
        return (
          <DynamicComponent
            {...value}
            client={getClient(draftMode ? { token } : undefined)}
          />
        )
      },
    },
  }

  return <PortableText value={content} components={portableTextComponents} />
}

export default SanityPortableText
