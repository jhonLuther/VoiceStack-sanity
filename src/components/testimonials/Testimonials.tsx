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

  console.log({testimonialData});
  

  return (
    <Section className="relative ">
      <div className="absolute top-0 left-0 flex w-full h-full">``
        <div className="w-5/12 h-full bg-[#111827] flex"></div>
        <div className="w-7/12 flex-1 h-full bg-[#111827]"></div>
      </div>
      <Container className="w-full h-[400vh] gap-16 relative ">
        <div className="w-full flex h-full  absolute top-0 left-0"></div>

        <div className="flex w-full gap-32 z-10 relative">
          <div className="flex-1 max-w-[366px] h-full relative pt-24 flex items-start">
            <AppearTestimonials />
          </div>
          <div className="flex-1 h-full relative px-12 pt-24">
            {/* <div className="sticky top-[20vh] py-24 left-0 h-auto"> */}
              {/* <TestCardOne/>
              <TestCardOne/>
              <TestCardOne/>
              <TestCardOne/> */}

            {/* </div> */}
            <div>
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard key={index} data={testimonial} />
            ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
