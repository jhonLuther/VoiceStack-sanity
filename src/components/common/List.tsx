import Image from 'next/image'
import React from 'react'
import Paragraph from '../typography/Paragraph'
import { PortableText } from '@portabletext/react'

const components: any = {
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="!leading-6 text-[16px] font-light md:max-w-3xl text-black">
      {children}
    </li>
  ),
  marks: {
    highlight: ({ children }: { children: React.ReactNode }) => (
      <span style={{ backgroundColor: 'yellow', fontWeight: 'semibold' }}>
        {children}
      </span>
    ),

    em: ({ children }: { children: React.ReactNode }) => (
      <em className="text-blue-500">{children}</em>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
  },
}

const List = (props) => {
  return (
    <ul className={props.className}>
      {props?.items?.map((item, index) => (
        <li key={index}>
          <div className="flex flex-row items-start gap-3 font-light text-[16px] md:text-md">
            <Image
              className=" mt-[3.5px] w-[14px] h-[14px]"
              src="/point.svg"
              width={14}
              height={14}
              alt="points"
            />
            {!props?.isRichText ? (
              <Paragraph className="text-black">{item}</Paragraph>
            ) : (
              <PortableText key={index} value={item} components={components} />
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
