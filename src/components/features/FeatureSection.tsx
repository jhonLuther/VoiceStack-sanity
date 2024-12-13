import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from "motion/react";
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
import AppearFeature from './AppearFeature';



const enterpriseItems = [
    "IVR & Call Routing",
    "Visual Voicemail",
    "Missed Call Response Tracking",
    "Call Pop with Patient Details",
    "Call Flow Analytics",
    "Two-way Texting & Cloud Fax",
]

const attributionItems = [
    "Call Source Tracking",
    "Ad Keywords Tracking",
    "Campaigns Tracking",
    "Google Analytics Integration",
    "Google Adwords Integrations",
]


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

export default function FeatureSection() {
    const { scrollY } = useScroll();



   
    return (
        <Section className="relative ">

            <div className='absolute top-0 left-0 flex w-full h-full'>

                <div className='w-5/12 h-full bg-[#f9f9f9] flex'>

                </div>
                <div className='w-7/12 flex-1 h-full bg-vs-lemon-green'>

                </div>



            </div>
            <Container className="w-full gap-16 relative">



                <div className='w-full flex h-full  absolute top-0 left-0'>
                    

                </div>

                <div className='flex w-full gap-32 z-10'>

                


                    <div className='flex flex-col w-1/3 gap-32 py-32'>


                        {/* Feature Item #1 */}

    
                        <div className='flex flex-col gap-8 w-full'>
                            <div className='flex flex-col gap-4'>
                                <PreText><span className=' text-vs-blue'><PhoneIcon></PhoneIcon></span> Enterprise VoIP</PreText>
                                <H2>Comprehensive VoIP solutions for your practice</H2>
                                <Paragraph>Enhance patient experience with AI call scoring, analytics, and automation to improve communication and processes.</Paragraph>
                            </div>
                            <ul className='flex flex-wrap gap-3'>
                                {

                                    enterpriseItems.map((item, i: number) => {
                                        return (
                                            <PillItem key={i}> <span className='text-green-500'><TickIcon></TickIcon></span> {item}</PillItem>
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
                        </div>

               
                        {/* Feature Item #1 */}


                                <AppearFeature></AppearFeature>


                        {/* Feature Item #3 */}
                        <div className='flex flex-col gap-8 w-full'>
                            <div className='flex flex-col gap-4'>
                                <PreText><span className=' text-vs-blue'><PhoneIcon></PhoneIcon></span> Attribution and Analytics</PreText>
                                <H2>Guide to Tracking Customer Interactions</H2>
                                <Paragraph>Connect calls to your marketing team for engagement. Use analytics to assess performance and identify metrics to improve strategies.</Paragraph>
                            </div>
                            <ul className='flex flex-wrap gap-3'>
                                {

                                    enterpriseItems.map((item, i: number) => {
                                        return (
                                            <PillItem key={i}> <span className='text-green-500'><TickIcon></TickIcon></span> {item}</PillItem>
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
                        </div>
                        {/* Feature Item #3 */}

                    </div>

                    <div className='w-2/3 h-full'></div>
                </div>
            </Container>
        </Section>
    )
}
