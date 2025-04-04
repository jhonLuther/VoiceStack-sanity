
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Container from '../structure/Container';
import Section from '../structure/Section';
import H1 from '../typography/H1';
import HeroBg from 'public/assets/hero-bg.png';
import SeoHeader from './SeoHeader';
import DemoButton from './DemoButton';

interface HeroMainSectionProps {
  data?: any;
}

const HeroMainSection: React.FC<HeroMainSectionProps> = ({ data }) => {

  if (!data) return null; 
  
  return (
    <>
      <SeoHeader seoData={data}></SeoHeader>
      <Section className="pt-md md:pt-[200px] pb-md relative">
        <div className="absolute left-0 top-0 w-full h-full">
          <Image 
            src={data?.bgImage.url} 
            alt="hero background" 
            width={data?.bgImage.metadata.dimensions.width}
            height={data?.bgImage.metadata.dimensions.height}
            className="object-cover w-full h-full"
          />
        </div>
        
        <Container className="relative justify-center">
          <div className="flex flex-col gap-8 items-center">

            <div className="flex flex-col items-center max-w-[824px] gap-4">
              <div className="flex py-2.5 px-[17px] justify-center items-center gap-2 rounded-full border border-white/10 bg-gray-50/5">
                <span className="flex text-white text-center text-xs font-medium leading-[120%] tracking-[0.98px] uppercase">
                  {data.heading}
                </span>
              </div>
              
              <H1 className="text-center">{data.subHeading}</H1>
              
              <p className="text-white font-inter text-lg font-medium leading-[160%] text-center max-w-[600px] w-full">
                {data.description}
              </p>
            </div>
            <DemoButton type={"primaryWhite"}></DemoButton>
          </div>
        </Container>
        
      </Section>
    </>
  );
};

export default HeroMainSection;