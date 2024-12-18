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
import React from 'react'

function RowHeading({ heading, description }) {
  return (
    <TableCell className="">
      <div className='py-4 border-b border-b-gray-200'>
        <p className="text-gray-500 font-inter text-xs lg:text-[15px] font-normal leading-[150%] capitalize text-left">{heading}</p>
        {/* <p className="flex text-gray-600 text-xs font-normal !p-0">
          {description}
        </p> */}
      </div>
    </TableCell>
  )
}

function ComparisonRichIcon({ comparisonValue }) {
  const { icon, text } = comparisonValue
  return (
    <>
      <div className='py-4 border-b border-b-gray-200'>
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

export default function SiteComparisonTable({ data, index, currentIndex }) {
  // console.log({data});
  
  return (

    // <></>
    <div className={`${index === currentIndex ? 'block' : 'hidden'}`}>

      <Table className={`md:overflow-hidden bg-white w-full overflow-auto min-w-[700px] `}>
        <TableCaption className="hidden">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader className="">
          <TableRow className="w-full justify-between px-8 py-2 !border-0">
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
                  className={`text-white items-center justify-center pt-5 ${index == 0 ? 'bg-gray-50 rounded-tl-[10px] rounded-tr-[10px]' : ''}`}
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
              {/* <TableRow className="bg-[#e9d5ff] hover:bg-purple-300 text-[##2d353e] text-xl font-semibold px-8">
                <TableCell>{data.tableData.name}</TableCell>
              </TableRow> */}
              <TableRow
                    key={index}
                    className=" flex-row justify-between px-8 border-0"
                  >
                    <TableCell className='text-gray-900 text-base font-medium leading-[145%] py-4'>{data.tableData.name}</TableCell>
                    <TableCell className={`text-center justify-center bg-gray-50`}></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
              </TableRow>
              {data.tableData.rows.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    className=" flex-row justify-between px-8 border-0"
                  >
                    <RowHeading
                      key={index+Math.log(Math.sin(index))}
                      heading={row.heading}
                      description={row.description}
                    />
                    {row.comparisons.map((comparisonValue, idx) => (
                      <TableCell
                        key={idx}
                        className={`text-center  justify-center ${idx == 0 ? 'bg-gray-50' : ''}`}
                      >
                        <ComparisonRichIcon comparisonValue={comparisonValue} />
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })}
            </React.Fragment>
        </TableBody>
      </Table>
    </div>
  )
}
