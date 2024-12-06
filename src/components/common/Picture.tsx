import React from 'react'
import ImageLoader from './imageLoader/imageLoader'

const Picture = (props: any) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden bg-stone-300 w-full">
        <ImageLoader
          image={props?.url?.image}
          className="object-cover w-full !h-[300px]"
        />
      </div>
    </div>
  )
}

export default Picture
