import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Wave from 'public/assets/wave.svg'
import Dome from 'public/assets/dome.svg'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import { PlayIcon } from 'lucide-react'
import { VideoItem } from './common/VideoModal'
import Image from 'next/image'

const BannerSection = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const overviewVideo:VideoItem = {
    platform: 'vidyard',
    videoId: "xpr7bMJc1SDnQSyTRErAYc",
  }
  
  return (

    <Section className="pt-lg pb-[300px] bg-gray-900 relative">
      <Container>
        <div className='flex justify-center w-full'>
          <div className='flex flex-col gap-8 items-center w-full'>
              <h2 className='text-gray-50 text-center font-manrope text-5xl font-bold leading-[1.1667] tracking-[-0.96px] w-full max-w-[630px]'>
                Get the VoIP phones powered by AI that you require today!
              </h2>
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
      </Container>
      {/* <div className='absolute h-[100px] bg-[url("../../public/assets/dome.svg")]'></div> */}
      <Image src={Dome} alt='dome' className='absolute left-[50%] bottom-0 -translate-x-[50%]'></Image>
    </Section>
  )
}


export default BannerSection
