import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import PeopleCard from './common/PeopleCard'

const AboutUsSection = ({ data }) => {
  return (
    <Section
      id="about-us-section"
      className="py-12 md:py-24 bg-[#8639f8] bg-grid-pattern bg-contain bg-no-repeat bg-right"
    >
      <Container className="flex flex-col items-center gap-10 w-full ">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex justify-center w-full">
            <H2 className="!text-left text-white">{data.heading}</H2>
          </div>
          <Paragraph className="text-center">{data.description}</Paragraph>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 xl:flex-row xl:items-stretch">
          {data.founders?.map((founder: any, index: number) => {
            return <PeopleCard key={index} {...founder} />
          })}
        </div>
      </Container>
    </Section>
  )
}

export default AboutUsSection
