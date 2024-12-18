import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Section from '../structure/Section'
import Container from '../structure/Container'
import H2 from '../typography/H2'
import Subtext from '../typography/Subtext'
import Paragraph from '../typography/Paragraph'
import TickIcon from './micro/icons/TickIcon'
import PillItem from './micro/PillItem'
import Button from '../common/Button'
import ButtonArrow from '../icons/ButtonArrow'
import PreText from './micro/PreText'
import PhoneIcon from './micro/icons/PhoneIcon'
import ListItem from './micro/ListItem'
import AppearTestimonials from './AppearTestimonials'
import { ImageContext } from '~/providers/ImageSwitchProvider'
import TestimonialCard from '../common/TestimonialCard'
import TestCardOne from '../TestCardOne'
import testimonialData from '../../migrations/testimonials.json'
import { VideoItem, VideoModal } from '../common/VideoModal'


const enterpriseItems = [
  'IVR & Call Routing',
  'Visual Voicemail',
  'Missed Call Response Tracking',
  'Call Pop with Patient Details',
  'Call Flow Analytics',
  'Two-way Texting & Cloud Fax',
]

const attributionItems = [
  'Call Source Tracking',
  'Ad Keywords Tracking',
  'Campaigns Tracking',
  'Google Analytics Integration',
  'Google Adwords Integrations',
]

const conversationalFeatures = [
  {
    title: 'Call Transcripts & Summary',
    desc: 'Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection',
  },
  {
    title: 'Call Outcome Analysis',
    desc: 'Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection',
  },
  {
    title: 'Staff Performance Augmentation',
    desc: 'Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection',
  },
  {
    title: 'Post Call Task Automation',
    desc: 'Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection',
  },
]

export default function Testimonails() {
  const { scrollY } = useScroll()

  const { activeImage, setActiveImage } = useContext(ImageContext)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parentRef = useRef<(HTMLDivElement | null)>(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
    
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [stickyStates, setStickyStates] = useState<boolean[]>([]); // Tracks if each card is sticky
  // const containerRef = useRef<HTMLDivElement>(null);

  const handleOpenVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const updatedStickyStates = testimonialData.map((_, index) => {
        const card = cardRefs.current[index];
        if (card) {
          const rect = card.getBoundingClientRect();
          console.log(rect.top,index, "target-",260 + index * 20, rect.top <= (200) );
          // Check if the card is at the top of the viewport (sticky point)
          return rect.top <= (200);
        }
        return false;
      });
      setStickyStates(updatedStickyStates);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll-to-card logic
  // const handleScrollToCard = (index: number) => {
  //   console.log("clicked");
    
  //   const card = cardRefs.current[index];
  //   // console.log({card});
  //   // console.log(card.offsetTop, "card.offsetTop");
  //   // console.log(parentRef, "parentRef");
    
  //   // if (card && parentRef.current) {
  //   //   console.log("has parent ref");
      
  //   //   window.scrollTo({
  //   //     top: card.offsetTop - (parentRef.current ? parentRef.current.offsetTop : 0),
  //   //     behavior: "smooth"
  //   //   });
  //   // }
  //   // if (card) {
  //     // card.scrollIntoView({
  //     //     behavior: "smooth",
  //     //     block: "start",
  //     //     // inline:'start'
  //     //     // inline: "nearest"
  //     // });
  //     //   window.scrollTo({
  //     //   top: card.offsetTop - (parentRef.current ? parentRef.current.offsetTop : 0),
  //     //   behavior: "smooth"
  //     // });
  //   // }
  // };

  // console.log({testimonialData});
  

  return (
    <Section className="relative py-sm md:py-md pb-8 bg-gray-900" ref={parentRef}>
      {/* <div className="absolute top-0 left-0 flex w-full h-full">``
        <div className="w-5/12 h-full bg-[#111827] flex"></div>
        <div className="w-7/12 flex-1 h-full bg-[#111827]"></div>
      </div> */}
      <Container className="w-full relative">
        {/* <div className="w-full flex h-full  absolute top-0 left-0"></div> */}
        <div className='flex flex-col items-center w-full gap-16'>

          <div className="flex justify-center w-full">
            <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
              <H2 className="text-white">Purpose-built for Practice Growth</H2>
              <Paragraph className="text-gray-400">VoiceStack is trusted by some of the most successful dental groups to create impactful business outcomes across all their locations.</Paragraph>
            </div>
          </div>
          <div className="flex w-full gap-12 z-10 relative">
            {/* <div className="flex-1 max-w-[366px] h-full relative pt-24 items-start hidden lg:flex">
              <AppearTestimonials  onListItemClick={handleScrollToCard}/>
            </div> */}
            <div className="w-full relative">
              <div className='flex flex-col w-full gap-20'>
                {testimonialData.map((testimonial, index) => {
                  // Calculate the scaling value dynamically when sticky
                  const isSticky = stickyStates[index] || false;
                  const scale = 0.95 + (index * 0.02);
                  return(

                    <TestimonialCard 
                      key={index}
                      index={index} 
                      data={testimonial} 
                      ref={(el) => (cardRefs.current[index] = el)} 
                      onOpenVideo={handleOpenVideo}
                      isSticky={isSticky}
                      scale={scale}
                    />
                  )
                 
                })}
              </div>
            </div>
          </div>
        </div>
          {isOpen && (
            <VideoModal
              isPopup={true}
              videoDetails={selectedVideo}
              className={`pt-9 z-30 flex items-start`}
              onClose={() => setIsOpen(false)}
            />
          )}
      </Container>
    </Section>
  )
}
