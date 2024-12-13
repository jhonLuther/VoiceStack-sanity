import React from 'react'

const H2 = (props) => {
  return <h2 className={`md:text-4xl text-3xl !leading-[1.1] font-bold font-manrope ${props.className}`} > {props.children}</h2>
}


export default H2
