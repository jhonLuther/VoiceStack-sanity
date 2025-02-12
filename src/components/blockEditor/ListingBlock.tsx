import Link from 'next/link'
import React from 'react'
import H2 from '../typography/H2'


interface ListingBlockProps {
  itemHeading: string | null
  listingItem: any[]
}

const ListingBlock: React.FC<ListingBlockProps> = ({ itemHeading, listingItem }) => {
  console.log(itemHeading,'itemHeading', listingItem, 'listingItem');
  
  return (
    <div className="flex flex-col gap-4">
      <div>
        <H2>{itemHeading}</H2>
        <div>
          {listingItem && listingItem.length > 0 && (
            listingItem.map((item:any, index:number) => {
              return(
                <>
                  <div>{item.key}</div>
                  <div>{item.value}</div>
                </>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingBlock
