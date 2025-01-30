import React from 'react';
import Container from '~/components/structure/Container';
import Section from '~/components/structure/Section';
import { AnimatedBeamDemo } from './IntegrationSection';
import H2 from '~/components/typography/H2';
import Paragraph from '~/components/typography/Paragraph';
import PreText from '~/components/features/micro/PreText';
import IntegrationIcon from '~/components/features/micro/icons/IntegrationIcon';
import getTextByReferrer from '~/helpers/getTextByReferrer';

interface AnimatedBeamSectionProps {
  data: any;
  refer: any;
}

export const AnimatedBeamSection: React.FC<AnimatedBeamSectionProps> = ({ data, refer=null }) => {

  return (
    <Section className="py-sm md:py-md scroll-m-8" id="integrations">
      <Container className="w-full gap-16 flex flex-col items-center ">
        <div className='flex flex-col w-full items-center max-w-[780px] text-center gap-4'>
          <div className='flex items-center justify-center'>
            <PreText><span className=' text-vs-blue'><IntegrationIcon></IntegrationIcon></span> {data?.integrationHeading}</PreText>
          </div>
          <div className='max-w-[620px] flex flex-col gap-4'>
            {/* <H2>{data?.integrationSubHeading}</H2> */}
            {/* <Paragraph>{data?.integrationDescription}</Paragraph> */}
            <H2>{getTextByReferrer(refer, data?.integrationSubHeadingRef || [])}</H2>
            <Paragraph>{getTextByReferrer(refer, data?.integrationDescriptionRef || [])}</Paragraph>
            </div>
          
        </div>
        <AnimatedBeamDemo data={data} refer={refer}/>
      </Container>
    </Section>
  );
};

export default AnimatedBeamSection;