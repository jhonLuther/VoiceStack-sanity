import React, { useContext, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import H3 from './typography/H3';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PreText from './features/micro/PreText';
import H2 from './typography/H2';
import Paragraph from './typography/Paragraph';
import { PortableText } from '@portabletext/react';
import { setImage } from '~/helpers/starRating';
import { VideoItem, VideoModal } from './common/VideoModal';
import PlayIcon from 'public/assets/play-icon-white.svg'

const TestimonialHighlightSection = ({data, refer=null}) => {

  console.log({data});
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const handleOpenVideo = (video: VideoItem) => {
    setSelectedVideo(video)
    setIsOpen(true)
  }
  
  return (
    data && (
      <Section className="py-xs md:py-sm bg-vs-blue">
        <Container className="w-full gap-16 flex flex-col items-center">
          <div className='flex flex-col w-full items-center max-w-[780px] text-center gap-4'>
            <div className='flex items-center justify-center'>
            <PreText><span className='text-yellow-300'>{data?.heading}</span> </PreText>
            </div>
            <div className='max-w-[620px] flex flex-col gap-4'>
              <H2 className='text-white'>{data?.subHeading}</H2>
              {/* <Paragraph className='text-white'><PortableText value={data?.description} /></Paragraph> */}
              <Paragraph className='text-white'>{data?.description}</Paragraph>
            </div>
            
          </div>
          {data.testimonials && data.testimonials.length > 0 && (

            <div className='flex w-full'>
              {data.testimonials.map ((item:any, index:number)=>{
                return(
                  <div className='flex flex-col md:flex-row w-full items-center rounded-[15px] md:rounded-[20px] overflow-hidden bg-white' key={index}>
                    <div className='flex flex-1 p-4 md:p-6 relative cursor-pointer' onClick ={() => handleOpenVideo(item.video[0])} >
                      {item.testimonialThumbnail && (
                        <Image className='w-full h-auto' width={1164} height={654} src={item?.testimonialThumbnail.url} alt={item?.testimonialThumbnail.altText} title={item?.testimonialThumbnail.title}/>
                      )}
                      <div className='absolute right-12 bottom-12 flex gap-2 items-center' title='Play'>
                        <span className='text-white font-semibold text-base'>Play</span>
                        <Image src={PlayIcon} alt='play'></Image>
                      </div>
                    </div>

                    <div className='flex flex-col gap-6 flex-1 p-4 md:px-12 md:py-10 md:max-w-[610px]'>
                      <div className='flex'>
                        {setImage(item?.rating)}
                      </div>
                      <div className='mb-2 font-medium leading-[1.4] text-[18px] xl:text-xl text-gray-900'>
                        <PortableText value={item?.testimonialDescription} />
                      </div>
                      <div className='flex justify-end'>
                        <Image width={137} height={75} src={item?.clientLogo.url} alt={item?.clientLogo.altText} title={item?.clientLogo.title}/>
                      </div>
                    </div>
                  </div>
                )
              })}
              
              
            </div>
          )}
          {isOpen && (
            <VideoModal
              refer={refer}
              isPopup={true}
              videoDetails={selectedVideo}
              className={`pt-9 z-30 flex items-start`}
              onClose={() => setIsOpen(false)}
              hasDemoBanner = {true}
            />
          )}
        </Container>
      </Section>
    )
  )
}


export default TestimonialHighlightSection
