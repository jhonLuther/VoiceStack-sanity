import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import SingleSiteIcon from './icons/SingleSiteIcon';
import MultiSiteIcon from './icons/MultiSiteIcon';
import StartupIcon from './icons/StartupIcon';
import H3 from './typography/H3';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PreText from './features/micro/PreText';
import H2 from './typography/H2';
import Paragraph from './typography/Paragraph';

const CsCardsListingSection = ({data}) => {

  const router = useRouter();
  
  const cardsListing = data?.cardItems;
  console.log({data});
  
  
  return (
    <Section className="py-xs md:py-md md:pt-0 pb-8">
      <Container className="w-full gap-16 flex flex-col items-center">
        <div className='flex flex-col w-full items-center max-w-[780px] text-center gap-4'>
          <div className='flex items-center justify-center'>
          <PreText><span>{data?.heading}</span> </PreText>
          </div>
          <div className='max-w-[620px] flex flex-col gap-4'>
            <H2>{data?.subHeading}</H2>
            {/* <Paragraph>{data?.description}</Paragraph> */}
            </div>
          
        </div>
        <div className='flex flex-col gap-16 items-center w-full'>
          
          <div className='flex flex-wrap gap-6 md:gap-6 flex-col md:flex-row justify-center'>
            {cardsListing && cardsListing.length > 0 && (
              cardsListing.map((item:any, index:number)=>{
                return(
                  <div key={index} className='flex flex-1 bg-[#F9F9F9] gap-3 flex-col justify-between rounded-2xl overflow-hidden'>
                    
                    <div className='flex flex-col'>
                      {item.image && (
                        <Image className='w-full h-auto' width={292} height={250} src={item?.image} alt={'icon'}/>
                      )}
                      <div className='flex flex-col p-6 gap-2'>
                        {item.heading && (
                          <H3 className='inline-flex items-center gap-2 text-gray-900'>
                            {item.heading}
                          </H3>
                        )}
                        {item.description && (
                          <p className='text-gray-500 text-base font-normal leading-[145%]'>{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}


export default CsCardsListingSection
