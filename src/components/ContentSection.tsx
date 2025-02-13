import React, { useContext, useEffect, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import { useRouter } from 'next/router'
import SanityPortableText from '~/components/blockEditor/sanityBlockEditor'
import H1 from './typography/H1'
import HeroBg from 'public/assets/hero-bg.png'
import Image from 'next/image'
import HeroInner from './common/HeroInner'

const ContentSection = ({ content, draftMode, token }) => {
  const router = useRouter()
  // console.log({ content })

  return (
    <>
      <HeroInner data={content}/>
      <Section className="pt-sm md:pt-lg pb-[200px] md:pb-[300px] relative scroll-smooth scroll-m-16">
        <Container className='justify-center'>
          <div className="flex justify-center w-full max-w-[822px]">
            <div className="flex flex-col gap-8 lg:gap-12 w-full">
              <SanityPortableText
                content={content.contentArea}
                draftMode={draftMode}
                token={token}
              />
            </div>
          </div>
        </Container>
        {/* <div className='absolute h-[100px] bg-[url("../../public/assets/dome.svg")]'></div> */}
      </Section>
    </>
  )
}

export default ContentSection
