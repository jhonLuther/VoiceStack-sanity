import React, { useState } from 'react'
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

    const [currentItem, setcurrentItem] = useState<Number>(0);

    return (
        <Section className="py-24 relative">
            <Container className="w-full gap-16 relative">
                <div className='flex flex-col w-1/3 gap-32'>



                    {/* Feature Item #1 */}
                    <div className='flex flex-col gap-8'>
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


                    {/* Feature Item #2 */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <PreText><span className=' text-vs-blue'><PhoneIcon></PhoneIcon></span>Conversational AI</PreText>
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
                    </div>
                    {/* Feature Item #2 */}

                    {/* Feature Item #3 */}
                    <div className='flex flex-col gap-8'>
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

                <div className='h-full w-2/3'> Hellp</div>
{/* 
                <div className='flex w-full h-full absolute top-0 left-0   '>

                    <div className='w-1/3'></div>

                    <div className='w-2/3 relative border flex items-center'>

                        <div className='bg-green-300 sticky h-40 flex w-full '>

                        </div>

                    </div>


                </div> */}
            </Container>
        </Section>
    )
}
