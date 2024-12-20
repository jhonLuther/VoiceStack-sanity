import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Wave from 'public/assets/wave.svg'
import Dome from 'public/assets/dome.png'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import { PlayIcon } from 'lucide-react'
import { VideoItem, VideoModal } from './common/VideoModal'
import Image from 'next/image'

const BannerSection = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const overviewVideo:VideoItem = {
    platform: 'vidyard',
    videoId: "xpr7bMJc1SDnQSyTRErAYc",
  }
  
  return (

    <Section className="pt-sm md:pt-lg pb-[200px] md:pb-[300px] bg-gray-900 relative">
      <Container>
        <div className='flex justify-center w-full'>
          <div className='flex flex-col gap-8 items-center w-full'>
              <h2 className='text-gray-50 text-center font-manrope text-4xl md:text-5xl font-bold leading-[1.1667] tracking-[-0.96px] w-full max-w-[630px]'>
                Start Your Practice Growth Journey With VoiceStack.
              </h2>
              <div className='flex gap-4 items-center flex-col md:flex-row'>
                <Button type='primaryWhite' link='#'>
                  <ButtonArrow></ButtonArrow>
                  <span className="text-base font-medium">{`Book free demo`}</span>
                </Button>
                <Button type='video' onClick={() => {setIsOpen(true) }}>
                  {/* <ButtonArrow></ButtonArrow> */}
                  <PlayIcon width={16} height={16}></PlayIcon>
                  <span className="text-base font-medium">{`Watch overview`}</span>
                </Button>
              </div>
            </div>
        </div>
      </Container>
      {/* <div className='absolute h-[100px] bg-[url("../../public/assets/dome.svg")]'></div> */}
      <div className='absolute h-[205px] bg-[url("/assets/wave.svg")] w-full left-0 bottom-0 bg-cover bg-repeat-x bg-left-bottom'></div>
      <Image src={Dome} alt='dome' className='absolute left-[50%] bottom-0 -translate-x-[50%] w-[80%] max-w-[1002px]'></Image>
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
    </Section>
  )
}


export default BannerSection
