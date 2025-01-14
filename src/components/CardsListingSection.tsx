import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import SingleSiteIcon from './icons/SingleSiteIcon';
import MultiSiteIcon from './icons/MultiSiteIcon';
import StartupIcon from './icons/StartupIcon';
import H3 from './typography/H3';
import { useRouter } from 'next/router';

const CardsListingSection = () => {

  const router = useRouter();


  const cardsListing = [
    { 
      heading: "Single Site Dental Practices", 
      description: router.locale == "en-GB" ? "Easy to use, yet powerful workflows to make staff members more productive." : "Easy to use, yet powerful front office workflows to make staff members more productive.",
      icon: SingleSiteIcon 
    },
    {
      heading: "Multi-Site DSOs", 
      description:"Highly scalable across locations, with configurability for unique workflows and full-cycle patient relationship management.", 
      icon: MultiSiteIcon 
    },
    { heading: "Startup Dental Practices", 
      description:"The complete patient growth kit with built-in best practices to quickly start and scale your new practice.",
      icon: StartupIcon 
    }
  ];

 
  return (
    <Section className="py-xs md:py-md md:pt-0 pb-8 bg-gray-900">
      <Container >
        <div className='flex flex-col gap-16 items-center w-full'>
          <div className='flex flex-wrap gap-0 md:gap-0 flex-col md:flex-row justify-center'>
            {cardsListing && cardsListing.length > 0 && (
              cardsListing.map((item:any, index:number)=>{
                return(
                  <div key={index} className='flex flex-1 p-8 gap-3 flex-col justify-between 
                    border-t last:border-b md:border-y border-r border-gray-700 border-l 
                    md:border-l-0 md:first:border-l first:rounded-t-[20px] md:first:rounded-t-none 
                    md:first:!rounded-l-[20px] last:rounded-b-[20px] md:last:rounded-b-none md:last:!rounded-r-[20px]'>
                    <div className='flex flex-col gap-3'>
                      <H3 className='inline-flex items-center gap-2 text-white'>{item.icon && <item.icon />}{item.heading}</H3>
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


export default CardsListingSection
