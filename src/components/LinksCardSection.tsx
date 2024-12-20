import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Link from 'next/link';
import LearnMore from './ui/LearnMore';
import Image from 'next/image';

const LinksCardsSection = ({props}) => {

  console.log({props});
  

  return (
    <Section className="pt-md pb-8">
      <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 xl:gap-12 justify-center'>
          {props && props.length > 0 && (
            props.map((item:any, index:number) => {
              return(
                item.href ? (
                  <Link href={item.href}>
                    <div key={index} className='flex py-6 gap-3 flex-col justify-between h-full group'>
                      <div className='flex flex-col gap-3'>
                        <h2 className='inline-flex items-center gap-2 text-gray-900 text-base font-medium leading-[145%]'>
                         <Image width={20} height={20} src={item?.icon} alt={'logo'}/>
                          {item.heading}</h2>
                        {item.description && (
                          <p className='text-gray-500 text-base font-normal leading-[160%]'>{item.description}</p>
                        )}
                      </div>
                      <LearnMore>{item.label}</LearnMore>
                    </div>
                  </Link>
                ):(
                    <div key={index} className='flex py-6 gap-3 flex-col justify-between'>
                      <div className='flex flex-col gap-3'>
                        <h2 className='inline-flex items-center gap-2 text-gray-900 text-base font-medium leading-[145%]'>
                        <Image width={20} height={20} src={item?.icon} alt={'logo'}/>
                          {item.heading}</h2>
                        {item.description && (
                          <p className='text-gray-500 text-base font-normal leading-[160%]'>{item.description}</p>
                        )}
                      </div>
                    </div>
                )
              )
            })
          )}
        </div>
      </Container>
    </Section>
  )
}


export default LinksCardsSection
