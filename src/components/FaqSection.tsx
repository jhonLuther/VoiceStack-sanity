import React, { useEffect, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import H2 from './typography/H2';
import Paragraph from './typography/Paragraph';
import H3 from './typography/H3';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import FaqItem from './FaqItem';
import { useRouter } from 'next/router';


const FaqSection = ({data}) => {

  const [isUk, setIsUk] = useState(false);
  const router = useRouter();

  useEffect(()=>{
      setIsUk(router?.locale =='en-GB' ? true : false);
    },[router?.locale])

  return (
    <Section className="py-sm md:py-md pb-8 scroll-smooth scroll-m-16" id="faq">
      <Container >
        <div className='flex flex-col md:flex-row gap-10 lg:gap-20 w-full'>
          <div className="flex justify-center w-full max-w-[320px] md:sticky top-28 self-start">
            <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
              <H2 className="text-left">Frequently Asked Questions</H2>
              <Paragraph className="text-left">For queries contact 
                {
                  isUk? (
                  <a href="mailto:uk.support@voicestack.com" className='flex text-vs-blue'>{`uk.support@voicestack.com`}</a>
                  ):(
                    <a href="mailto:us.support@voicestack.com" className='flex text-vs-blue'>{`us.support@voicestack.com`}</a>
                  )
                }
                
              </Paragraph>
            </div>
          </div>
          <div className='flex justify-center flex-grow max-w-[830px]'>

            <div className="flex flex-col w-full">
              {data.map((faq, index) => (
                <FaqItem 
                  key={faq?._id}
                  index={index}
                  question={faq.question} 
                  answer={faq.answer} 
                />
              ))}
            </div>
            
          </div>
        </div>
      </Container>
    </Section>
  )
}


export default FaqSection
