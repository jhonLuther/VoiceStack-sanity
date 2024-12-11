import React from 'react'

const H2 = (props) => {
  return <h2 className={`md:text-4xl text-3xl !leading-tight font-semibold ${props.className}`}>{props.children}</h2>
}


export default H2
