import React from 'react';
import Container from '~/components/structure/Container';
import Section from '~/components/structure/Section';
import { AnimatedBeamDemo } from './IntegrationSection';
import Subtext from '~/components/typography/Subtext';
import H2 from '~/components/typography/H2';
import Paragraph from '~/components/typography/Paragraph';

interface AnimatedBeamSectionProps {
  data: any
}

export const AnimatedBeamSection: React.FC<AnimatedBeamSectionProps> = ({ data }) => {
  console.log(data, 'animated beam data');

  return (
    <Section className="py-24">
      <Container className="w-full gap-16 flex flex-col items-center ">
        <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
          <H2>{data.integrationHeading}.</H2>
          <Paragraph>{data.integrationSubHeading}</Paragraph>
          <Paragraph>{data.integrationDescription}</Paragraph>
        </div>
        <AnimatedBeamDemo data={data} />
      </Container>
    </Section>
  );
};

export default AnimatedBeamSection;