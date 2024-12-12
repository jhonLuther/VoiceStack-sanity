import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import atlanta from 'public/assets/logos/atlanta-dental-spa.png'
import charleston from 'public/assets/logos/charleston.png'
import dag from 'public/assets/logos/dag.png'
import dentalDepot from 'public/assets/logos/dental-depot.png'
import dionHealth from 'public/assets/logos/dion-health.png'
import espireDental from 'public/assets/logos/espire-dental.png'
import fortBendDental from 'public/assets/logos/fort-bend-dental.png'
import miSmiles from 'public/assets/logos/mi-smiles-dental-group.png'
import northwest from 'public/assets/logos/northwest-dental-group.png'
import roligoDental from 'public/assets/logos/roligo-dental.png'
import schoolSmiles from 'public/assets/logos/school-smiles.png'
import smileDetect from 'public/assets/logos/smile-select.png'
import westwind from 'public/assets/logos/westwind.png'
import Image from 'next/image';
import Button from './common/Button';
import ButtonArrow from './icons/ButtonArrow';

const LogoListingSection = () => {

  const logos = [
    { image: espireDental, alt: "Espire Dental", title: "Espire Dental"},
    { image: westwind, alt: "Westwind", title: "Westwind"},
    { image: miSmiles, alt: "MI Smiles Dental Group", title: "MI Smiles Dental Group"},
    { image: dag, alt: "DAG", title: "DAG"},
    { image: roligoDental, alt: "Roligo Dental", title: "Roligo Dental"},
    { image: dentalDepot, alt: "Dental Depot", title: "Dental Depot"},
    { image: schoolSmiles, alt: "School Smiles", title: "School Smiles"},
    { image: northwest, alt: "Northwest Dental Group", title: "Northwest Dental Group"},
    { image: atlanta, alt: "Atlanta Dental Spa", title: "Atlanta Dental Spa"},
    { image: smileDetect, alt: "Smile Detect Dental Office", title: "Smile Detect Dental Office"},
    { image: fortBendDental, alt: "Fort Bend Dental", title: "Fort Bend Dental"},
    { image: charleston, alt: "Charleston", title: "Charleston"},
    { image: dionHealth, alt: "Dion Health", title: "Dion Health"},
  ];
  return (
    <Section className="py-sm md:py-md pb-8">
      <Container >
        <div className='flex flex-col items-center'>
          <div className="flex justify-center w-full mb-12">
            <div className='flex flex-col w-full max-w-[780px] text-center'>
              <h2 className='text-gray-900 text-center font-inter text-lg font-medium leading-[1.45]'>Built for smarter dental practices.</h2>
              <p className='text-gray-500 text-center font-inter text-lg font-medium leading-[1.45]'>Used by leading Groups and DSOs.</p>
            </div>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-[1034px]'>
            {logos && logos.length > 0 && (
              logos.map((logo:any,i)=>{
                return(
                  <Image src={logo.image} key={i} alt={logo.alt} title={logo.title} className='max-h-10 w-auto'></Image>
                )
              })
            )}
          </div>
          <div className='flex gap-4 items-center mt-12 lg:mt-16'>
            <Button type='primary' link='#'>
              <ButtonArrow></ButtonArrow>
              <span className="text-base font-medium">{`Book free demo`}</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}


export default LogoListingSection
