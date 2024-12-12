import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import PreText from './micro/PreText';
import H2 from '../typography/H2';
import Paragraph from '../typography/Paragraph';
import PhoneIcon from './micro/icons/PhoneIcon';
import Button from '../common/Button';
import ButtonArrow from '../icons/ButtonArrow';
import ListItem from './micro/ListItem';

const conversationalFeatures = [
    {
        title: "Call Transcripts & Summary",
        desc: "Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection"

    },
    {
        title: "Call Outcome Analysis",
        desc: "Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection"

    },
    {
        title: "Staff Performance Augmentation",
        desc: "Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection"

    },
    {
        title: "Post Call Task Automation",
        desc: "Access every conversation with every patient for a detailed analysis of patient needs including insurance & tx detection"

    },
]


export default function AppearFeature() {


    const { scrollYProgress } = useScroll();
    const [scrollPos, setScrollPos] = useState(0)


    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // const diff = current - scrollY.getPrevious()
        setScrollPos(current)
      })
    const [currentItem, setcurrentItem] = useState<Number>(0);



  return (
                          
    
                           <motion.div 
                           
                           className='flex flex-col gap-8'>
                               <div className='flex flex-col gap-4'>
                                   <PreText><span className=' text-vs-blue'><PhoneIcon></PhoneIcon></span>Conversational AI {scrollPos}</PreText>
                                   <H2>Track, Follow-up and Convert missed opportunities with AI</H2>
                                   <Paragraph>Enhance patient experience with AI call scoring, analytics, and automation to improve communication and processes.</Paragraph>
                               </div>
                               <ul className='flex flex-col gap-8'>
   
                                   {
   
                                       conversationalFeatures.map((item, i: number) => {
                                           return (
                                               <ListItem onClick={() => setcurrentItem(i)} key={i} title={item.title} showDesc={i == currentItem} desc={item.desc}> </ListItem>
   
                                           )
                                       })
                                   }
   
                               </ul>
   
                               <div className=''>
                                   <Button type='primary'>
                                       <ButtonArrow></ButtonArrow>
                                       <span className="text-base font-medium">{`Book free demo`}</span>
                                   </Button>
                               </div>
                           </motion.div>
                          
  )
}
