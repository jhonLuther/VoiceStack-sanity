import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import H2 from './typography/H2';
import Paragraph from './typography/Paragraph';
import H3 from './typography/H3';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import FaqItem from './FaqItem';


const FaqSection = () => {


  const faqs = [
    {
      question: "How can AI improve my business's phone system?",
      answer: "AI can streamline operations by automating routine tasks, improving customer interactions with personalized responses, and analyzing call data to optimize performance and reduce costs. "
    },
    {
      question: "What are the cost benefits of using an AI VoIP phone system?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ante pulvinar, euismod libero a, aliquet sapien. Sed ac mattis sem, vel tempus diam."
    },
    {
      question: "Are AI VoIP systems secure?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ante pulvinar, euismod libero a, aliquet sapien. Sed ac mattis sem, vel tempus diam."
    },
    {
      question: "What is an AI VoIP phone system?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ante pulvinar, euismod libero a, aliquet sapien. Sed ac mattis sem, vel tempus diam."
    }
  ]
 
  return (
    <Section className="py-sm md:py-md pb-8">
      <Container >
        <div className='flex gap-20 w-full'>
          <div className="flex justify-center w-full max-w-[320px] mb-12">
            <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
              <H2 className="text-left">Frequently Asked Questions</H2>
              <Paragraph className="text-left">For queries contact <a href="mailto:hello@voicestack.com" className='flex text-vs-blue'>hello@voicestack.com</a></Paragraph>
            </div>
          </div>
          <div className='flex justify-center flex-grow max-w-[830px]'>

            <div className="flex flex-col w-full">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
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
