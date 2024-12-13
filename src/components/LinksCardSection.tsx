import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import CallIcon from './icons/CallIcon';
import ChatIcon from './icons/ChatIcon';
import AnalyticsIcon from './icons/AnalyticsIcon';
import IntegrationsIcon from './icons/IntegrationsIcon';
import Link from 'next/link';
import LearnMore from './ui/LearnMore';

const LinksCardsSection = () => {
  const linkCardsData = [
    { 
      heading: "Enterprise VoIP", 
      description:"Convert Patients with AI-driven call scoring, analytics, and automation.",
      href: "#", label: "Learn More", icon: CallIcon 
    },
    {
      heading: "Conversational AI", 
      description:"Track, follow-up and convert missed opportunities with AI.", 
      href: "#", label: "Learn More", icon: ChatIcon 
    },
    { heading: "Attribution and Analytics", 
      description:"Connect inbound calls directly to marketing and analyze campaign performance.",
      href: "#", label: "Learn More", icon: AnalyticsIcon 
    },
    { 
      heading: "Seamless Integrations", 
      description:"Sync effortlessly with PMS, CRM and analytics tools for unified data insights.",
      label: "Learn More", icon: IntegrationsIcon 
    },
  ];
  return (
    <Section className="pt-md pb-8">
      <Container>
        <div className='grid grid-cols-4 gap-12 justify-center'>
          {linkCardsData && linkCardsData.length > 0 && (
            linkCardsData.map((item:any, index:number) => {
              return(
                item.href ? (
                  <Link href={item.href}>
                    <div key={index} className='flex py-6 gap-3 flex-col justify-between h-full group'>
                      <div className='flex flex-col gap-3'>
                        <h2 className='inline-flex items-center gap-2 text-gray-900 text-base font-medium leading-[145%]'>{item.icon && <item.icon />}{item.heading}</h2>
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
                        <h2 className='inline-flex items-center gap-2 text-gray-900 text-base font-medium leading-[145%]'>{item.icon && <item.icon />}{item.heading}</h2>
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
