import React, { useRef } from 'react';
import Container from '~/components/structure/Container';
import Section from '~/components/structure/Section';
import { AnimatedBeam } from './animated-beam';
import { AnimatedBeamDemo } from './test';

const enterpriseItems = [
  "IVR & Call Routing",
  "Visual Voicemail",
  "Missed Call Response Tracking",
  "Call Pop with Patient Details",
  "Call Flow Analytics",
  "Two-way Texting & Cloud Fax",
]

export default function AnimatedBeamSection({data}: any) {

  
  const containerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  return (
    <Section className="py-24">
      <Container ref={containerRef} className="w-full gap-16">
        <AnimatedBeamDemo data={data}/>
      </Container>
    </Section>
  )
}