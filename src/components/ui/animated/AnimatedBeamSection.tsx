import React from 'react';
import Container from '~/components/structure/Container';
import Section from '~/components/structure/Section';
import { AnimatedBeamDemo } from './IntegrationSection';

interface AnimatedBeamSectionProps {
  data: {
    pms: {
      title: string;
      items: string[];
    };
    analytics: {
      title: string;
      items: string[];
    };
    crm: {
      title: string;
      items: string[];
    };
  };
}

export const AnimatedBeamSection: React.FC<AnimatedBeamSectionProps> = ({ data }) => {
  return (
    <Section className="py-24">
      <Container className="w-full gap-16">
        <AnimatedBeamDemo data={data} />
      </Container>
    </Section>
  );
};

export default AnimatedBeamSection;