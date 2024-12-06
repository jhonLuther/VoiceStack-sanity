import React from 'react'
import ImageLoader from './imageLoader/imageLoader'
import { cn } from '~/lib/utils'

const PMSLogoCloud = ({ className = null, image }) => {
  return (
    <div className={cn('', className)}>
      <ImageLoader image={image} fixed={false} imageClassName="!h-12 w-auto"/>
    </div>
  )
}

export default PMSLogoCloud