import React from 'react'

const H1 = (props) => {
  return <h1 className={`text-white font-manrope text-[48px] lg:text-[56px] font-bold leading-[1.16] tracking-[-1px] ${props.className}`}>{props.children}</h1>
}

export default H1
