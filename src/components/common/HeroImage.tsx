import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
  <div className="rounded-2xl flex-col justify-center items-center flex overflow-hidden ">
    <img className=" w-full h-[500px] object-cover object-center" src="/hero2.png"/>
  </div>
  )
}

export default HeroImage
