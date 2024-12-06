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
    <TableCell className="w-2/5">
      <p className="flex !justify-start text-base font-semibold">{heading}</p>
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
      <p className="flex flex-row gap-2 justify-center items-center ">
        <Image
          className="w-[15.5px] h-[15.5px] object-contain"
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

export default function ComparisonTable({ data }) {
  return (
    <Table className="lg:flex lg:flex-col md:overflow-hidden bg-white">
      <TableCaption className="hidden">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader className="rounded-t-xl bg-[#4508A0] text-white flex w-full font-semibold ">
        <TableRow className="w-full flex justify-between px-8 py-2 !border-0">
          <TableHead className="w-2/5 text-white flex justify-start items-center">
            {data.columnDimensionName}
          </TableHead>
          <TableHead className="w-72 text-white flex items-center justify-center">
            <Image
              className="bg-[#2d0666] rounded-md justify-center items-center px-5 py-3"
              src="/OSDentalLogo.svg"
              width={135}
              height={26}
              alt="OS Dental Logo"
            />
          </TableHead>
          {data.columns
            .filter((_, idx) => idx != 0)
            .map((column, index) => (
              <TableHead
                key={index}
                className="w-72 text-white flex items-center justify-center"
              >
                {column.name}
              </TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody className="flex flex-col w-full">
        {data.rowCategories.map((category, index) => (
          <React.Fragment key={index}>
            <TableRow className="bg-[#e9d5ff] hover:bg-purple-300 text-[##2d353e] text-xl font-semibold px-8">
              <TableCell>{category.name}</TableCell>
            </TableRow>
            {category.rows.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  className="flex flex-row justify-between px-8 border-0"
                >
                  <RowHeading
                    key={index+Math.log(Math.sin(index))}
                    heading={row.heading}
                    description={row.description}
                  />
                  {row.comparisons.map((comparisonValue, idx) => (
                    <TableCell
                      key={idx}
                      className={`w-72 text-center flex justify-center ${idx == 0 ? 'bg-stone-100' : ''}`}
                    >
                      <ComparisonRichIcon comparisonValue={comparisonValue} />
                    </TableCell>
                  ))}
                </TableRow>
              )
            })}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  )
}
