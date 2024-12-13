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

function SiteComparisonSection({ data }) {
  console.log(data,'comparison main data');
  // console.log("logodata", data.table.columns[0]);
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Section id="comparison-section" className="py-12 md:py-24 bg-[#F9F6FE]">
      <Container className="flex flex-col items-center gap-16">
        
        <div className="flex justify-center w-full mb-12">
          <div className='flex flex-col w-full max-w-[780px] text-center gap-4'>
            <H2>{data?.strip}</H2>
            <Paragraph>{data.header}</Paragraph>
          </div>
        </div>

          <TableTabset
            tabs={data?.table.rowCategories}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />

          <div>
            {data.table.rowCategories.length && (
              data.table.rowCategories.map((tableData:any, index:number) =>{
                return (
                  <SiteComparisonTable
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
        {/* <CTAButton
          className="px-6 py-3"
          name={data?.cta.name ?? ''}
          url={data?.cta.url ?? '/'}
        /> */}
      </Container>
    </Section>
  )
}

export default SiteComparisonSection
