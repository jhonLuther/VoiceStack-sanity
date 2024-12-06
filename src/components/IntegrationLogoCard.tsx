import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'
import { cn } from '~/lib/utils'

const IntegrationLogoCard = ({ className = null, image }) => {
  return (
    <div className={cn('', className)}>
      <ImageLoader image={image} fixed={false} imageClassName="!h-16 w-auto"/>
    </div>
  )
}

export default IntegrationLogoCard
