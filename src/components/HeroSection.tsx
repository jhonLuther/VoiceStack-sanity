import React, { useState } from 'react'
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
  return (
    <Section className="pt-md bg-vs-blue" childClass="flex">
      <Container>
        <div className='relative'>
          <div className='flex gap-16 items-center pb-10'>
            <div>
              <span className='flex text-white mb-6 text-sm font-medium leading-[1.2] tracking-[0.98px] uppercase'>Supercharge your office workflows</span>
              <H1 className='text-white font-manrope text-6xl font-bold leading-[1.16] tracking-[-1px]'>
                <span className="flex items-center gap-4 after:content-[url('../../public/assets/sparkles.svg')]">AI Powered</span> Enterprise Phone System for Dental Offices 
              </H1>
            </div>
            <div className='flex flex-col gap-8'>
              <p className='text-white font-inter text-lg font-medium leading-[160%]'>
                Increase new patient growth with state-of-the-art features including Call Transcriptions, Call Analytics, Two-way Texts & more.
              </p>
              <div className='flex gap-4 items-center'>
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

          <div className='relative'>
            {/* <Image src={device} alt='device'></Image> */}
            <div className='relative h-[480px] overflow-hidden'>
              <div className='absolute left-0 top-[80px] w-[85%]'>
                <Image className='w-full h-full object-cover' src={voicestack} alt='voicestack'></Image>
              </div>
              <div className='absolute right-0 top-0 w-[25%]'>
                <Image className='w-full h-full object-cover' src={voicemail} alt='voicemail'></Image>
              </div>
            </div>
            
            <div className='absolute left-0 -bottom-[80px] w-[38.5%]'>
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
