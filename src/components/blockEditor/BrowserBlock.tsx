import Link from 'next/link'
import React from 'react'

interface BrowserBlockProps {
  mainHeading: string
  listingItem: any[]
}

const BrowserBlock: React.FC<BrowserBlockProps> = ({ mainHeading, listingItem }) => {
  // console.log(mainHeading,'mainHeading', listingItem, 'listingItem')
  return (
    <div className="flex flex-1 bg-zinc-800 md:flex-row flex-col rounded-lg p-6 md:p-8 my-8 gap-6 justify-between">
      {/* BB */}
      
    </div>
  )
}

export default BrowserBlock
