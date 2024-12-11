import React from 'react'
import { cn } from '~/lib/utils'
import Section from './structure/Section'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import Container from './structure/Container'

const HeroSection = () => {
  return (
    <Section className="py-md bg-vs-blue" childClass="flex">

      <Container>
      <div className='relative'>
        <div className='flex gap-16'>
          <div>
            <h1 className='text-white mb-6 text-sm font-medium leading-[1.2] tracking-[0.98px] uppercase'>Supercharge your office workflows</h1>
            <h2 className='text-white font-manrope text-6xl font-bold leading-[1.16] tracking-[-1px]'>
              <span>AI Powered</span> Enterprise Phone System for Dental Offices 
            </h2>
          </div>
          <div>
            <p>Increase new patient growth with state-of-the-art features including Call Transcriptions, Call Analytics, Two-way Texts & more.</p>
            <div>
              <Button type='primaryWhite'>
                <ButtonArrow></ButtonArrow>
                <span className="text-base font-medium">{`Book free demo`}</span>
              </Button>
              <Button type='primary'>
                <ButtonArrow></ButtonArrow>
                <span className="text-base font-medium">{`Book free demo`}</span>
              </Button>
            </div>
          </div>
        </div>

      </div>
      </Container>
    </Section>
  )
}


export default HeroSection
