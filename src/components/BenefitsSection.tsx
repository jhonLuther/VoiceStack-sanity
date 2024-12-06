import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'

const BenefitsSection = ({ data }) => {
  return (
    <Section id="benefits-section" className="py-12 md:py-24 bg-[#F9F6FE]">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>{data.strip}</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>{data.header}</H2>
          </div>
        </div>
        <div className="flex flex-col gap-16 w-full">
          {data.benefits.map((benefit: any, index: number) => (
            <RichImage key={index} index={index} item={benefit} />
          ))}
        </div>
        <CTAButton
          className="px-6 py-3"
          name={data.cta.name ?? ''}
          url={data.cta.url ?? '/'}
        />
      </Container>
    </Section>
  )
}

export default BenefitsSection
