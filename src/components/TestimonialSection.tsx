import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'
import CustomerCard from './common/CustomerCard'

const TestimonialSection = ({ data }) => {

  const customers = [
    {
      url: '/passion-dental.png',
      companyName: 'Passion Dental',
      locationCount: '52',
      importantFigure: 'Patrick Assioun, CEO',
    },
    {
      url: '/simply-dental.png',
      companyName: 'Simply Dental',
      locationCount: '42',
      importantFigure: 'Dr. Sam Alkhoury, Founder',
    },
    {
      url: '/progressive-dental.png',
      companyName: 'Progressive Dental',
      locationCount: '17',
      importantFigure: 'Dmitry Burshteyn, CEO',
    },
  ]

  return (
    <Section id="testimonials-section" className="py-12 md:py-24">
      <Container className="flex flex-col items-center gap-16 ">
        <div className="flex flex-col w-full items-center">
          <Subtext>{data.strip}</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>{data.header}</H2>
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-6">
          <TestimonialCarousel testimonials={data.testimonials} />
          <div className="flex flex-col md:flex-row md:w-full justify-between md:max-w-5xl gap-6">
            {customers.map((customer, index) => {
              const subtext = `${customer.locationCount} locations`
              return (
                <CustomerCard
                  key={index}
                  imageUrl={customer.url}
                  topText={customer.companyName}
                  topSubText={subtext}
                  bottomText={customer.importantFigure}
                />
              )
            })}
          </div>
        </div>
        <CTAButton
          url={data.cta.url ?? '/'}
          className="px-6 py-3"
          name={data.cta.name ?? ''}
        />
      </Container>
    </Section>
  )
}

export default TestimonialSection
