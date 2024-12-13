import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import CTAButton from './common/CTAbutton'
import ComparisonTable from './ComparisonTable'
import Subtext from './typography/Subtext'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import SiteComparisonTable from './SiteComparisonTable'
import TableTabset from './TableTabSet'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'

function SiteComparisonSection({ data }) {
  console.log(data,'comparison main data');
  // console.log("logodata", data.table.columns[0]);
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Section id="comparison" className="py-12 md:py-24">
      <Container className="flex flex-col items-center">
        
        <div className="flex justify-center w-full mb-12">
          <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
            <H2>{data?.strip}</H2>
            <Paragraph>{data.header}</Paragraph>
          </div>
        </div>
        <div className='flex flex-col gap-12 items-center w-full'>
          <TableTabset
            tabs={data?.table.rowCategories}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />

          <div className='w-full'>
            {data.table.rowCategories.length && (
              data.table.rowCategories.map((tableData:any, index:number) =>{
                return (
                  <SiteComparisonTable 
                    key={index}
                    index={index}
                    currentIndex={currentIndex}
                    data={{
                      columnDimensionName: data.columnDimensionName,
                      headerLogos: data.table.columns,
                      tableData,
                    }}
                  />
                )
              })
            )}
            {/* <SiteComparisonTable
              data={{
                columnDimensionName: data.columnDimensionName,
                ...data.table,
              }}
            /> */}
          </div>
        </div>
        {/* <CTAButton
          className="px-6 py-3"
          name={data?.cta.name ?? ''}
          url={data?.cta.url ?? '/'}
        /> */}
        <div className='flex gap-4 items-center mt-12 lg:mt-16'>
            <Button type='primary' link='#'>
              <ButtonArrow></ButtonArrow>
              <span className="text-base font-medium">{`Book free demo`}</span>
            </Button>
          </div>
      </Container>
    </Section>
  )
}

export default SiteComparisonSection
