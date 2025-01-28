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
          <PreText><span className=' text-vs-blue'></span> {data?.heading}</PreText>
          </div>
          <div className='max-w-[620px] flex flex-col gap-4'>
            <H2>{data?.subHeading}</H2>
            <Paragraph>{data?.description}</Paragraph>
            </div>
          
        </div>
        <div className='flex flex-col gap-16 items-center w-full'>
          
          <div className='flex flex-wrap gap-0 md:gap-0 flex-col md:flex-row justify-center'>
            {cardsListing && cardsListing.length > 0 && (
              cardsListing.map((item:any, index:number)=>{
                return(
                  <div key={index} className='flex flex-1 p-8 gap-3 flex-col justify-between 
                    border-t last:border-b md:border-y border-r border-gray-700 border-l 
                    md:border-l-0 md:first:border-l first:rounded-t-[20px] md:first:rounded-t-none 
                    md:first:!rounded-l-[20px] last:rounded-b-[20px] md:last:rounded-b-none md:last:!rounded-r-[20px]'>
                    {/* <div className='flex flex-col gap-3'>
                      <H3 className='inline-flex items-center gap-2 text-white'>{item.icon && <item.icon />}{item.heading}</H3>
                      {item.description && (
                        <p className='text-gray-400 text-base font-normal leading-[160%]'>{item.description}</p>
                      )}
                    </div> */}
                    <div className='flex flex-col gap-3'>
                      <H3 className='inline-flex items-center gap-2 text-white'>
                        {item.iconSvg ? <span dangerouslySetInnerHTML={{__html: item.iconSvg}}></span> : item.icon && <Image width={20} height={20} src={item?.icon} alt={'icon'}/>}
                        {item.heading}
                      </H3>
                      {item.description && (
                        <p className='text-gray-400 text-base font-normal leading-[160%]'>{item.description}</p>
                      )}
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
