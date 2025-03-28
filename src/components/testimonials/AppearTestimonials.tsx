import React, { useEffect, useRef, useState } from 'react'
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
        title: "Convert More Enquires",
        desc: ""
    },
    {
        title: "Reactivate Lost Patients",
        desc: ""

    },
    {
        title: "Eliminate Missed Calls",
        desc: ""

    },
    {
        title: "Train Your Staff Better",
        desc: ""

    },
]
interface AppearTestimonialsProps {
    onListItemClick: (index: number) => void; // Callback to handle clicks
  }

const AppearTestimonials: React.FC<AppearTestimonialsProps> = ({ onListItemClick }) => {


    const { scrollY } = useScroll();
    const [scrollPos, setScrollPos] = useState(0)
    const [sectionStartY, setSectionStartY] = useState(0)
    const [currentItem, setcurrentItem] = useState<Number>(0);

    const scrollRef = useRef(null)
    const numberOfItems = conversationalFeatures.length

    // const [sectionEndY, setSectionEndY] = useState(0)
    // const [actualScrollStart, setActualScrollStart] = useState(0)
    const [currentPos, setCurrentPos] = useState(0)
    // useEffect(()=>{

    // },)

    const actualScrollStart = sectionStartY  + scrollRef?.current?.offsetHeight + 160
    // const sectionEndY = sectionStartY + (scrollRef?.current?.offsetHeight * 2)
    // const sectionEndY = sectionStartY + (window.innerHeight * 4)
    const sectionEndY = typeof window !== 'undefined' 
        ? sectionStartY + (window.innerHeight * 4) 
        : 0;
    // const sectionEndY = sectionStartY + 3200;
    const percentScrolled = ((actualScrollStart - scrollPos) / (actualScrollStart - sectionEndY)) * 100
    
    const switchIndex = (percentage) => {


        let index = 0;

        if (percentage <= 25)
            index = 0;

        else if (percentage > 25 && percentage <= 50)
            index = 1;
        else if (percentage > 50 && percentage <= 75)
            index = 2;
        else if (percentage > 75 && percentage <= 100)
            index = 3;
        else if (percentage > 100)
            index = 3;
        else
            index = 0;


        return index;


    }





    useMotionValueEvent(scrollY, "change", (current) => {
        // const diff = current - scrollY.getPrevious()
        setScrollPos(current)
    })






    return (


        <div className='h-[100vh] sticky top-40'>

            {/* <div ref={scrollRef} className='sticky top-40 left-0 h-auto text-white' style={{ marginBottom: `${scrollRef?.current?.offsetHeight*1.5 - 160}px` }}> */}
            <div ref={scrollRef} className='left-0 h-auto text-white'>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    onViewportEnter={() => { (sectionStartY > 1) ? '' : setSectionStartY(scrollPos) }}
                    // onScroll={()}


                    className='flex flex-col gap-12 w-full'>
                        <div className='flex flex-col gap-4'>
                            {/* <PreText><span className=' text-vs-blue'><PhoneIcon></PhoneIcon></span>Conversational AI</PreText> */}
                            <H2>Purpose-built for Practice Growth</H2>
                            <Paragraph className="text-white/60" >VoiceStack is trusted by some of the most successful dental groups to create impactful business outcomes across all their locations.</Paragraph>
                        </div>
                        <ul className='flex flex-col gap-4'>

                            {

                                conversationalFeatures.map((item, i: number) => {
                                    return (
                                        <ListItem key={i} index={i} title={item.title} 
                                        numberOfItems={numberOfItems} percentScrolled={percentScrolled} 
                                        showDesc={i == switchIndex(percentScrolled)} desc={item?.desc ?? ""}
                                        onClick={onListItemClick}
                                        > </ListItem>

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

            </div>
        </div>

    )
}
export default AppearTestimonials;
