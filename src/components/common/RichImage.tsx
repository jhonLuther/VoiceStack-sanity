import React from 'react'
import Image from 'next/image'
import H3 from '../typography/H3'
import List from './List'
import ImageLoader from './imageLoader/imageLoader'

const Richness = ({ item }: any) => {
  return (
    <div className="md:w-1/2 w-full flex flex-col gap-8">
      <H3 className="md:text-4xl">{item.benefitHeading}</H3>
      <List className="flex flex-col gap-4" items={item?.benefitPoints} isRichText={true} />
    </div>
  )
}

export const Picture = (props) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden w-full">
        <ImageLoader
          image={props?.item?.benifitSectionImage}
          className={`object-cover w-full h-[${props.height ? props.height : 400}px]`}
        />
      </div>
    </div>
  )
}

const RichImage = (props: any) => {
  if (props.index % 2 == 0) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-40 w-full">
        <ImageLoader
          image={props?.item?.benifitSectionImage}
          className="md:!h-[350px] md:!w-1/2 rounded-[20px] flex"
          fixed={false}
        />
        <Richness className="w-1/2" item={props?.item} />
      </div>
    )
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-40 w-full">
      <Richness className="w-1/2" item={props?.item} />
      <ImageLoader
        className="md:!h-[350px] md:!w-1/2 rounded-[20px] flex "
        image={props?.item?.benifitSectionImage}
        fixed={false}
      />
    </div>
  )
}

export default RichImage
