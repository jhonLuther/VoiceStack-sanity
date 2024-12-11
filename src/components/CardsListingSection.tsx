import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import Button from './common/Button';
import ButtonArrow from './icons/ButtonArrow';
import H2 from './typography/H2';
import Paragraph from './typography/Paragraph';
import SingleSiteIcon from './icons/SingleSiteIcon';
import MultiSiteIcon from './icons/MultiSiteIcon';
import StartupIcon from './icons/StartupIcon';
import H3 from './typography/H3';

const CardsListingSection = () => {


  const cardsListing = [
    { 
      heading: "Single Site Dental Practices", 
      description:"Easy to use, yet powerful clinical and administrative workflows to meet all your needs.",
      icon: SingleSiteIcon 
    },
    {
      heading: "Multi-Site DSOs", 
      description:"Highly scalable and configurable to meet the growing needs of multi-site dental groups.", 
      icon: MultiSiteIcon 
    },
    { heading: "Startup Dental Practices", 
      description:"The complete software kit with built-inbest practices to quickly start and scale your new practice.",
      icon: StartupIcon 
    }
  ];

 
  return (
    <Section className="py-sm md:py-md pb-8">
      <Container >
        <div className='flex flex-col items-center w-full'>
          <div className="flex justify-center w-full mb-12">
            <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
              <H2>Used by leading Groups and DSOs</H2>
              <Paragraph>VoiceStack is a good fit for a wide range of dental practices, including single-site practices, multi-site groups, as well as large dental corporate DSO’s.</Paragraph>
            </div>
          </div>
          <div className='flex flex-wrap justify-center'>
            {cardsListing && cardsListing.length > 0 && (
              cardsListing.map((item:any, index:number)=>{
                return(
                  <div key={index} className='flex flex-1 p-8 gap-3 flex-col justify-between border-y border-r border-gray-200 first:border-l'>
                    <div className='flex flex-col gap-3'>
                      <H3 className='inline-flex items-center gap-2'>{item.icon && <item.icon />}{item.heading}</H3>
                      {item.description && (
                        <p className='text-gray-500 text-base font-normal leading-[160%]'>{item.description}</p>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
          <div className='flex gap-4 items-center mt-12 lg:mt-16'>
            <Button type='primary' link='#'>
              <ButtonArrow></ButtonArrow>
              <span className="text-base font-medium">{`Book free demo`}</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}


export default CardsListingSection
