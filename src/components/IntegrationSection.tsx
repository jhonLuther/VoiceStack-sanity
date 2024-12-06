import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'
import IntegrationLogoCard from './IntegrationLogoCard'
import DataCloud from './DataCloud'
import LeftCloudArrow from './LeftCloudArrow'
import RightCloudArrow from './RightCloudArrow'
import { cn } from '~/lib/utils'
import PMSLogoCloud from './common/PMSLogoCloud'

function FluffyCloud() {
  return (
    <div className="w-full md:w-1/3 flex flex-col lg:flex-row lg:gap-1 items-center justify-between">
      <div className="rotate-90 lg:rotate-0 flex items-center h-[140px]">
        <LeftCloudArrow />
      </div>
      <div className="">
        <div>
          <DataCloud />
        </div>
      </div>
      <div className="flex rotate-90 lg:rotate-0">
        <RightCloudArrow />
      </div>
    </div>
  )
}

function IntegrationCloud({ className = null, integrations }) {
  return (
    <div
      className={cn(
        ' flex flex-wrap items-center justify-center gap-x-6 gap-y-1 lg:gap-x-8 md:gap-y-3 w-full border border-[#E5E7EB] p-6 rounded-lg overflow-hidden',
        className,
      )}
    >
      {integrations?.map((integration: any, index: number) => {
        return <IntegrationLogoCard key={index} image={integration.image} />
      })}
    </div>
  )
}

function PMSCloud({ className = null, integrations }) {
  return (
    <div
      className={cn(
        ' flex flex-wrap items-center justify-center gap-x-8 gap-y-1 lg:gap-x-16 md:gap-y-4 w-full border border-[#E5E7EB] p-6 rounded-lg overflow-hidden',
        className,
      )}
    >
      {integrations?.map((integration: any, index: number) => {
        return <PMSLogoCloud key={index} image={integration.image} />
      })}
    </div>
  )
}

function UtilBox() {
  return (
    <div className="p-6 flex flex-col rounded-lg  gap-3 w-full sm:w-[440px] ">
      <div className=" h-20 px-8 py-4 bg-[#F3E8FF] rounded-lg justify-center items-center text-center  inline-flex">
        Unified Performance Analytics
      </div>
      <div className=" h-20 px-8 py-4 bg-[#F3E8FF] rounded-lg justify-center items-center  inline-flex">
        CFO Support
      </div>
      <div className=" h-20 px-8 py-4 bg-[#F3E8FF] rounded-lg justify-center items-center  inline-flex">
        Growth Consulting
      </div>
    </div>
  )
}

function IntegrationSection({ data }) {
  return (
    <Section id="integrations-section" className="py-12 md:py-16">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-4">
          <Subtext>{data.strip}</Subtext>
          <div className="w-full flex justify-center pb-8">
            <p className="text-2xl max-w-3xl font-semibold text-center text-[#02024a] leading-8">
              {data.header}
            </p>
          </div>
          <div className="flex flex-col gap-16">
            <IntegrationCloud integrations={data.integrations} />
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
              <PMSCloud
                className="h-[400px] sm:h-96 sm:w-[440px]"
                integrations={data.pms}
              />
              <FluffyCloud />
              <UtilBox />
            </div>
          </div>
        </div>
        <CTAButton
          url={data.cta.url}
          className="px-6 py-3"
          name={data.cta.name ?? ''}
        />
      </Container>
    </Section>
  )
}

export default IntegrationSection
