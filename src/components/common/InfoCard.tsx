import React from 'react'
import Pinpoint from './Pinpoint'

function InfoCard({mainText, subTextOne, subTextTwo}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
      <div className="flex flex-col text-white">
        <p className="text-xl font-medium ">{mainText}</p>
        <p className="text-white/90 text-base font-base">
          {subTextOne}
        </p>
        <p className="text-white/70 text-sm font-light leading-tight !text-md flex flex-row gap-2 items-center">
           <Pinpoint/>
           <span>{subTextTwo}</span>
        </p>
      </div>
    </div>
  )
}

export default InfoCard
