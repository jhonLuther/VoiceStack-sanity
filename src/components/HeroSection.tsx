import React, { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'
import Section from './structure/Section'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import Container from './structure/Container'
import H1 from './typography/H1'
import { VideoItem, VideoModal } from './common/VideoModal'
import {PlayIcon} from '@sanity/icons'
import device from 'public/assets/voicestack-device.png'
import voicestack from 'public/assets/voicestack-ui.png'
import voicemail from 'public/assets/voicemail.png'
import Image from 'next/image'

const HeroSection = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const overviewVideo:VideoItem = {
    platform: 'vidyard',
    videoId: "xpr7bMJc1SDnQSyTRErAYc",
  }

  const messages = [
    "To Grow your Practice",
    "To Convert More New Patients",
    "To Reactivate Existing Patients",
    "To Eliminate Missed Calls",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = messages[activeIndex].split(" "); // Split the current message into words

  useEffect(() => {
    // Animating words one by one
    if (wordIndex < words.length) {
      const wordInterval = setTimeout(() => {
        setWordIndex(wordIndex + 1);
      }, 200); // Delay between each word pulling up
      return () => clearTimeout(wordInterval);
    } else {
      // Switch to the next message after a delay
      const messageInterval = setTimeout(() => {
        setActiveIndex((activeIndex + 1) % messages.length); // Loop through messages
        setWordIndex(0); // Reset word animation
      }, 3000); // Pause before showing the next message
      return () => clearTimeout(messageInterval);
    }
  }, [wordIndex, activeIndex, words.length, messages.length]);


  return (
    <Section className="pt-sm md:pt-md bg-vs-blue" childClass="flex">
      <Container>
        <div className='relative w-full flex items-center flex-col'>
          <div className='flex gap-8 items-center pb-10 flex-col max-w-[910px] w-full'>
            <div className='flex flex-col items-center w-full gap-5'>
              <div className='flex py-2.5 px-[17px] justify-center items-center gap-2 rounded-full border border-white/10 bg-gray-50/5'>
                <span className='flex text-white text-center text-xs font-medium leading-[120%] tracking-[0.98px] uppercase'>Supercharge your practice growth</span>
              </div>
              <H1 className='text-center w-full'>
                {/* <span className="text-vs-lemon-green flex items-center gap-4 after:content-[url('../../public/assets/sparkles.svg')]">AI Powered</span> Enterprise Phone System for Dental Offices  */}
                <span className="block text-vs-lemon-green">AI Powered</span> 
                <span className='block'>Enterprise Phone System</span>
                {/* <span className='text-slider'>
                  <span>To1 Grow1 your1 Practice1.</span>
                  <span>To2 Grow2 your2 Practice2.</span>
                  <span>To3 Grow3 your3 Practice3.</span>
                  <span>To4 Grow4 your4 Practice4.</span>
                </span>  */}
                <div className="relative h-20 overflow-hidden">
                {messages.map((message, index) => (
                  <span
                    key={index}
                    className={`block absolute w-full text-center  ${
                      index === activeIndex ? "opacity-100 transition-opacity duration-500" : "opacity-0"
                    }`}
                  >
                    {message.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={`inline-block translate-y-full opacity-0 ${
                          i < wordIndex ? "animate-pullUp" : ""
                        }`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {word}&nbsp;
                      </span>
                    ))}
                  </span>
                ))}
              </div>
              </H1>
            </div>
            <div className='flex flex-col gap-8 items-center'>
              <p className='text-white font-inter text-lg font-medium leading-[160%] text-center max-w-[600px] w-full'>
                Increase new patient growth with state-of-the-art features including Call Transcriptions, Call Analytics, Two-way Texts & more.
              </p>
              <div className='flex gap-4 flex-col md:flex-row items-center'>
                <Button type='primaryWhite' link='#'>
                  <ButtonArrow></ButtonArrow>
                  <span className="text-base font-medium">{`Book free demo`}</span>
                </Button>
                <Button type='video' onClick={() => {setIsOpen(true) }}>
                  {/* <ButtonArrow></ButtonArrow> */}
                  <PlayIcon></PlayIcon>
                  <span className="text-base font-medium">{`Watch overview`}</span>
                </Button>
              </div>
            </div>
          </div>

          <div className='relative w-full'>
            {/* <Image src={device} alt='device'></Image> */}
            <div className='relative pt-[58%] lg:pt-0 lg:h-[480px] overflow-hidden w-full'>
              <div className='absolute left-0 bottom-0 md:bottom-auto md:top-[80px] w-[85%]'>
                <Image className='w-full h-full object-cover' src={voicestack} alt='voicestack'></Image>
              </div>
              <div className='absolute right-0 bottom-[-40px] lg:bottom-auto lg:top-0 w-[25%]'>
                <Image className='w-full h-full object-cover' src={voicemail} alt='voicemail'></Image>
              </div>
            </div>
            
            <div className='absolute left-0 -bottom-[80px] min-w-[200px] w-[38.5%]'>
              <Image className='w-full h-full object-cover' src={device} alt='voicestack device'></Image>
            </div>
          </div>

        </div>
        <div>
          {isOpen && (
            <VideoModal
              isPopup={true}
              videoDetails={overviewVideo}
              className={`pt-9  flex items-start`}
              onClose={() => setIsOpen(false)}
            />
          )}
        </div>
      </Container>
    </Section>
  )
}


export default HeroSection
