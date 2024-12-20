import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import CTAButton from './common/CTAbutton'
import ComparisonTable from './ComparisonTable'
import Subtext from './typography/Subtext'
import H2 from './typography/H2'

function ComparisonSection({ data }) {
  
  return (
    <Section id="comparison-section" className="py-12 md:py-24 bg-[#F9F6FE]">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>{data?.strip}</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>{data.header}</H2>
          </div>
        </div>
        <ComparisonTable
          data={{
            columnDimensionName: data.columnDimensionName,
            ...data.table,
          }}
        />
        {/* <CTAButton
          className="px-6 py-3"
          name={data?.cta.name ?? ''}
          url={data?.cta.url ?? '/'}
        /> */}
      </Container>
    </Section>
  )
}

export default ComparisonSection
