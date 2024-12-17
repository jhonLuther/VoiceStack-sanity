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
        "question": "What is an enterprise VoIP phone system?",
        "answer": "A VoIP (Voice over Internet Protocol) phone system allows businesses to make and receive calls over the internet rather than traditional telephone lines. It is designed to handle the needs of enterprise-level businesses, offering scalability, reliability, and advanced features."
    },
    {
        "question": "Is VoiceStack compatible with existing hardware at my office?",
        "answer": "Yes, our system is compatible with most SIP-enabled devices, including desk phones and conference systems. We also offer softphone solutions for use on desktops, laptops, and mobile devices."
    },
    {
        "question": "Can remote teams use VoiceStack?",
        "answer": "Absolutely. Our system is cloud-based, enabling employees to work from anywhere with internet access."
    },
    {
        "question": "How secure is VoiceStack?",
        "answer": "Security is a top priority at VoiceStack. We use advanced encryption protocols, secure data centers, and advanced disaster recovery measures to protect your calls and data. We are also HIPAA compliant."
    },
    {
        "question": "What industries do VoiceStack serve?",
        "answer": "VoiceStack currently serves only dental offices. We provide services to all types of dental practices including single location offices, start-up dental offices, mulit-location DSOs, mobile dental practices and specialty dental practices in USA, UK and Australia"
    },
    {
        "question": "What kind of support does VoiceStack offer?",
        "answer": "We provide human chat and phone based support from 8 am EST to 8 pm PST Monday to Saturday. We also provide onboarding assistance and training for your team."
    },
    {
        "question": "How can I integrate VoiceStack with my current systems?",
        "answer": "VoiceStack supports integration with popular practice management systems, CRMs and analytics platforms. Setup is straightforward, and our support team can assist with the process."
    },
    {
        "question": "Can VoiceStack scale with my business?",
        "answer": "Yes, VoiceStack is designed to grow with your business. Whether you need to add users, features, or locations, VoiceStack can scale seamlessly."
    },
    {
        "question": "What is the pricing structure?",
        "answer": "Our pricing is flexible and depends on the number of lines and AI features provided. Contact our sales team for a personalized quote at www.voicestack.com/demo"
    },
    {
        "question": "Do you offer a trial period?",
        "answer": "Currently we do not offer a trial period. However we can facilitate conversations with our existing customers to help you set expectations"
    },
    {
        "question": "How do I get started?",
        "answer": "Getting started is easy. Contact our team at www.voicestack.com/demo, and we'll guide you through setup and onboarding."
    }
];
 
  return (
    <Section className="py-sm md:py-md pb-8">
      <Container >
        <div className='flex flex-col md:flex-row gap-10 lg:gap-20 w-full'>
          <div className="flex justify-center w-full max-w-[320px] md:sticky top-28 self-start">
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
