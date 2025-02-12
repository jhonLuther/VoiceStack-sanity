import React, { useContext, useEffect, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Wave from 'public/assets/wave.svg'
import Dome from 'public/assets/dome.png'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import { PlayIcon } from 'lucide-react'
import { VideoItem, VideoModal } from './common/VideoModal'
import Image from 'next/image'
import { FormModal } from './common/FormModal'
import VideoPlayIconWhite from './icons/VideoPlayIconWhite'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import contacts from '~/migrations/contact.json'
import { useRouter } from 'next/router'

import TelIcon from '~/components/icons/TelIcon';
import MailIcon from '~/components/icons/MailIcon';
import SanityPortableText from '~/components/blockEditor/sanityBlockEditor'


const ContentSection = ({content,draftMode,token}) => {
  const { isDemoPopUpShown } = useContext(BookDemoContext);
  const [isOpen, setIsOpen] = useState(false);
  // const contactData = contacts;
  const router = useRouter();

  const [matchingContact, setMatchingContact] = useState(null);

  useEffect(() => {
    const contact = contacts.find(
      (contact) => contact.locale === router.locale
    );
    setMatchingContact(contact);
  }, [router.locale]);
  // console.log({matchingContact});


  const [openForm, setOpenForm] = useState(false)
  const overviewVideo: VideoItem = {
    videoPlatform: 'vidyard',
    videoId: "Hj4GYLXARVjqQEnaejq3Bz",
  }

  return (

    <Section className="pt-sm md:pt-lg pb-[200px] md:pb-[300px] bg-gray-900 relative scroll-smooth scroll-m-16" id="support">
      <Container>
        <div className='flex justify-center w-full'>
          <div className='flex flex-col gap-8 items-center w-full'>
            <div>
              <h2 className='text-gray-50 text-center font-manrope text-4xl lg:text-5xl font-bold leading-[1.1667] tracking-[-0.96px] w-full max-w-[800px] mb-4'>
                {/* Start Your Practice Growth Journey<br/> With VoiceStack. */}
                World class customer support
              </h2>
              <p className='text-gray-200 text-center text-base font-normal leading-[145%] w-full max-w-[616px]'>
                If you have an immediate question or are in need of assistance, please find support using your preferred method. Dedicated customer support teams are available to provide chat, email, and phone assistance.
              </p>
            </div>
            {/* <div className='flex gap-4 items-center flex-col md:flex-row relative z-[1]'>
                <Button type='primary'   onClick={() => {setOpenForm(true)}}>
                  <ButtonArrow></ButtonArrow>
                  <span className="text-base font-medium">{`Book free demo`}</span>
                </Button>
                <Button type='video' onClick={() => {setIsOpen(true) }}>
                  <VideoPlayIconWhite></VideoPlayIconWhite>
                  <span className="text-base font-medium">{`Watch overview`}</span>
                </Button>
              </div> */}

            <SanityPortableText
              content={content.contentArea}
              draftMode={draftMode}
              token={token}
            />
          </div>
        </div>
      </Container>
      {/* <div className='absolute h-[100px] bg-[url("../../public/assets/dome.svg")]'></div> */}

    </Section>
  )
}


export default ContentSection
