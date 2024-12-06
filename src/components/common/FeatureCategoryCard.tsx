import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import ImageLoader from './imageLoader/imageLoader'

const FeatureCategoryCard = ({ imageUrl, heading, features }) => {
  return (
    <div className="w-full bg-white p-8 rounded-3xl">
      <div className="flex flex-col gap-6">
        <ImageLoader image={imageUrl} className="!w-12 !h-12" />
        <H3>{heading}</H3>
        <List
          className="flex flex-col gap-3"
          items={features?.map((feature: any) => feature?.featureHeading)}
        />
      </div>
    </div>
  )
}

export default FeatureCategoryCard
