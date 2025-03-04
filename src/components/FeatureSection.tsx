import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import FeatureCategoryCard from './common/FeatureCategoryCard'
import CTAButton from './common/CTAbutton'

const FeatureSection = ({data}) => {
  return (
    <Section
      id="features"
      className="features-section pt-12 md:pt-24 pb-12 md:pb-16 z-10 scroll-m-32 !bg-[#F9F6FE] "
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>{data.strip}</Subtext>
          <div className="w-full flex justify-center">
            <H2>{data.header}</H2>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-8">
          {data.featuresByCategory?.map((featureCategory: any, index: number) => {
            return (
              <FeatureCategoryCard
                key={index+featureCategory?.categoryHeading}
                imageUrl={featureCategory.imageUrl}
                heading={featureCategory.categoryHeading}
                features={featureCategory.features}
              />
            )
          })}
        </div>
        <CTAButton
          url={data.cta.url ?? "/" }
          className="px-6 py-3"
          name={data.cta.name ?? ""}
        />
      </Container>
    </Section>
  )
}

export default FeatureSection
