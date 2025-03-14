import React, { useContext, useEffect, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import dynamic from 'next/dynamic'
import ImageLoader from './common/imageLoader/imageLoader'
import SanityPortableText from './blockEditor/sanityBlockEditor'
import H2 from './typography/H2'
import CheckMark from './icons/CheckMark'
import H3 from './typography/H3'
import Image from 'next/image'
import Star from './icons/Star'
import H1 from './typography/H1'
import { PortableText } from '@portabletext/react'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import { FormModal } from './common/FormModal'
import themeData from '~/migrations/theme.json'
import Breadcrumb from './utils/breadCrumb'

const InnerHeroSection = ({ data }) => {
  const { isDemoPopUpShown } = useContext(BookDemoContext)
  const [openForm, setOpenForm] = useState(false)
	const heroTheme = data.heroTheme;
	const selectedTheme = themeData.featureHero.find(item => item.theme === heroTheme);
  if (!data) return null
	console.log({data});
	
  return (
    <div
      className="bg-cover relative overflow-hidden"
      style={{
        background: selectedTheme?.gradient,
      }}
    >
			{/* {selectedTheme?.imageUrl && <img src={selectedTheme.imageUrl} alt="Hero" width={200} />} */}
			
      <Section className={`py-12 md:py-24`}>
        <Container className="flex flex-col relative pt-16 md:pt-24">
					
          <div className="flex gap-12 relative flex-col md:flex-row">
						{selectedTheme && selectedTheme?.imageUrl && (
							<div className='absolute -right-[525px] -bottom-[425px] w-[1155px]'>
								<Image src={selectedTheme.imageUrl} alt='hero' width={1155} height={1155} className='w-full h-auto'></Image>
							</div>
						)}
            <div className='flex !flex-col gap-12 flex-grow items-start relative z-10'>
							<div className="flex flex-col gap-4 items-start">
								<Breadcrumb/>
								<H1>
									<PortableText value={data.heading} />
								</H1>
								<div className='text-white max-w-[517px] font-medium text-lg leading-relaxed'>
									<PortableText value={data.description} />
								</div>
							</div>
              <Button
                type="primaryWhite"
                onClick={() => {
                  setOpenForm(true)
                }}
              >
                <ButtonArrow></ButtonArrow>
                <span className="text-base font-medium">{`Book free demo`}</span>
              </Button>
            </div>

            <div className='flex-grow max-w-[500px] w-full relative'>
              {data?.mainImage && (
                // <ImageLoader
                //   image={data?.mainImage}
                //   alt={data?.name}
                //   className="!w-[520px] !h-[455px] !rounded-2xl"
                // />
								<Image src={data.mainImage.url} className='relative z-10'
									alt={data?.mainImage.altText || 'voicestack'}
									title={data?.mainImage.altText}
									width={data?.mainImage?.metadata?.dimensions?.width}
									height={data?.mainImage?.metadata?.dimensions?.height}>
								</Image>	
              )}
							{/* {selectedTheme && selectedTheme?.imageUrl && (
								<div className='absolute -left-[200px] -bottom-[425px] w-[1155px]'>
									<Image src={selectedTheme.imageUrl} alt='hero' width={1155} height={1155} className='w-full h-auto'></Image>
								</div>
							) } */}
            </div>
          </div>

          {openForm && (
            <FormModal
              className={`pt-9  flex items-start`}
              onClose={() => setOpenForm(false)}
              data={isDemoPopUpShown}
            />
          )}
        </Container>
      </Section>
    </div>
  )
}

export default InnerHeroSection
