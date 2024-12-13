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
      <p className="text-gray-500 font-inter text-[15px] font-normal leading-[150%] capitalize">{heading}</p>
      <p className="flex text-gray-600 text-xs font-normal !p-0">
        {description}
      </p>
    </TableCell>
  )
}

function ComparisonRichIcon({ comparisonValue }) {
  const { icon, text } = comparisonValue
  return (
    <>
      <p className="flex flex-row gap-2 justify-start items-center ">
        <Image
          className="w-auto h-auto object-contain"
          src={icon.url}
          alt={`${text} image`}
          width={400}
          height={400}
        />
        <span className="text-gray-600">{text}</span>
      </p>
    </>
  )
}

export default function SiteComparisonTable({ data, index, currentIndex }) {
  console.log({data});
  
  return (

    // <></>
    <div className={`${index === currentIndex ? 'block' : 'hidden'}`}>

      <Table className={`md:overflow-hidden bg-white w-full `}>
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
                  className=" text-white items-center justify-center"
                >
                  {/* {column.name} */}
                  <Image
                    className="justify-center items-center py-3 w-auto h-auto"
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
                    <TableCell className='text-gray-900 text-base font-medium leading-[145%]'>{data.tableData.name}</TableCell>
                    <TableCell></TableCell>
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
                        className={`text-center  justify-center ${idx == 0 ? 'bg-stone-100' : ''}`}
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
