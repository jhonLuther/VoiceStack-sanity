import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import React, { useState } from 'react'

function RowHeading({ heading, description }) {
  return (
    <TableCell className="lg:min-w-[330px]">
      <div className='py-4 border-b border-b-gray-200'>
        <p className="text-gray-500 font-inter text-xs lg:text-[15px] font-normal leading-[150%] capitalize text-left">{heading}</p>
        {/* <p className="flex text-gray-600 text-xs font-normal !p-0">
          {description}
        </p> */}
      </div>
    </TableCell>
  )
}

function ComparisonRichIcon({ comparisonValue, vsIndex }) {
  const { icon, text } = comparisonValue
  return (
    <>
      <div className={`py-4 border-b ${vsIndex ? 'border-b-vs-blue/20':'border-b-gray-200'} `}>
        <p className="flex flex-row gap-2 justify-start items-center text-left flex-shrink-0">
          <Image
            className="object-contain"
            src={icon.url}
            alt={`${text} image`}
            width={16}
            height={17}
          />
          <span className="text-gray-600">{text}</span>
        </p>
      </div>
    </>
  )
}

export default function SiteComparisonTable({ data, index, currentIndex, isMobile }) {
  
  const [currentChildIndex, setCurrentChildIndex] = useState<number|null>(0);

  const toggle = () =>{
    console.log(index,currentChildIndex);
    
    if(index === currentChildIndex){
      setCurrentChildIndex(null)
    }
    else{
      setCurrentChildIndex(index)
    }
  }
  
  return (

    <>
      <div
        className={`${currentIndex === index ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white'} flex items-center 
        gap-2 px-4 py-3 rounded-[22px] justify-center text-center font-inter text-sm font-medium leading-[145%] cursor-pointer md:hidden`}
        onClick={toggle}
      >
        {/* {tab.tabIcon && tab.tabIcon.length > 0 && (
          <ImageLoader image={tab.tabIcon[0].image}></ImageLoader>
        )} */}
        {data.tableData.name}
      </div>
      <div className={`${(index === currentIndex  && !isMobile) || (index === currentChildIndex && isMobile) ? 'block' : 'hidden'}`}>

        <Table className={`md:overflow-hidden bg-white w-full overflow-auto min-w-[700px] mb-[20px]`}>
          {/* <TableCaption className="hidden">
            A list of your recent invoices.
          </TableCaption> */}
          <TableHeader className="">
            <TableRow className="w-full justify-between  py-2 !border-0">
              <TableHead className="justify-start items-center">
                {/* {data.columnDimensionName}{data.tableData.name} */}
              </TableHead>
              {/* <TableHead className="w-72 text-white flex items-center justify-center">
                <Image
                  className="bg-[#2d0666] rounded-md justify-center items-center px-5 py-3"
                  src="/OSDentalLogo.svg"
                  width={135}
                  height={26}
                  alt="OS Dental Logo"
                />
              </TableHead> */}
              {data.headerLogos
                // .filter((_, idx) => idx != 0)
                .map((column:any, index:number) => (
                  <TableHead
                    key={index}
                    className={`text-white items-center justify-center pt-5 ${index == 0 ? 'bg-vs-blue/10 rounded-tl-[10px] rounded-tr-[10px]' : ''}`}
                  >
                    {/* {column.name} */}
                    <Image
                      className="justify-center items-center py-3 min-h-full w-auto m-auto"
                      src={column.logo.url}
                      width={135}
                      height={26}
                      alt="OS Dental Logo"
                    />
                  </TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <React.Fragment>
                {/* <TableRow className="bg-[#e9d5ff] hover:bg-purple-300 text-[##2d353e] text-xl font-semibold ">
                  <TableCell>{data.tableData.name}</TableCell>
                </TableRow> */}
                <TableRow
                      key={index}
                      className=" flex-row justify-between  border-0"
                    >
                      <TableCell className='text-gray-900 text-base font-medium leading-[145%] py-4'>{data.tableData.name}</TableCell>
                      <TableCell className={`text-center justify-center bg-vs-blue/10`}></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                </TableRow>
                {data?.tableData?.rows?.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      className=" flex-row justify-between  border-0"
                    >
                      <RowHeading
                        key={index+Math.log(Math.sin(index))}
                        heading={row.heading}
                        description={row.description}
                      />
                      {row.comparisons.map((comparisonValue, idx) => (
                        <TableCell
                          key={idx}
                          className={`text-center lg:min-w-[162px]  justify-center ${idx == 0 ? 'bg-vs-blue/10' : ''}`}
                        >
                          <ComparisonRichIcon comparisonValue={comparisonValue} vsIndex={idx == 0}/>
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                })}
              </React.Fragment>
          </TableBody>
        </Table>
      </div>
    </>
  )
}
