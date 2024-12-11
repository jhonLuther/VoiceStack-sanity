import React from 'react'
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


const enterpriseItems = [
    "IVR & Call Routing",
    "Visual Voicemail",
    "Missed Call Response Tracking",
    "Call Pop with Patient Details",
    "Call Flow Analytics",
    "Two-way Texting & Cloud Fax",
]

export default function FeatureSection() {
    return (
        <Section className="py-24">
            <Container className="w-full gap-16">
                <div className='flex flex-col w-1/2 gap-8'>

                    <div className='flex flex-col gap-4'>
                        <PreText><span className=' text-vs-blue'><PhoneIcon></PhoneIcon></span> Enterprise VoIP</PreText>
                        <H2>Comprehensive VoIP solutions for your practice</H2>
                        <Paragraph>Enhance patient experience with AI call scoring, analytics, and automation to improve communication and processes.</Paragraph>
                    </div>
                    <ul className='flex flex-wrap gap-3'>
                        {

                            enterpriseItems.map((item, i) => {
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

                <div className='flex w-full h-full bg-green-300'>

                </div>
            </Container>
        </Section>
    )
}
