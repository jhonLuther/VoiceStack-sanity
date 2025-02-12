import React from 'react'
import dynamic from 'next/dynamic'

const componentMap = {
  listingBlock: dynamic(() => import('./ListingBlock')),
  browserList: dynamic(
    () => import('./BrowserBlock'),
  ),
}


const DynamicComponent = ({ componentType, ...props }) => {

  const Component = componentMap[componentType]
  if (!Component) return null

  const componentProps = props[componentType] || {}

  return <Component {...componentProps} />
}

export default DynamicComponent


