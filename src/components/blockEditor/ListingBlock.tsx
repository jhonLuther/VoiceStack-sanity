import Link from 'next/link'
import React from 'react'


interface ListingBlockProps {
  itemHeading: string | null
  listingItem: any[]
}

const ListingBlock: React.FC<ListingBlockProps> = ({ itemHeading, listingItem }) => {
  console.log(itemHeading,'itemHeading', listingItem, 'listingItem');
  
  return (
    <div className="flex flex-1 bg-zinc-800 md:flex-row flex-col rounded-lg p-6 md:p-8 my-8 gap-6 justify-between">
      BB
      {/* <div className="flex flex-col justify-center">
        <H3Medium className="!text-white !mt-0 !text-3xl !font-semibold leading-[110%] block !mb-[6px]">
          {bannerBlock?.title ? bannerBlock?.title : 'Book a demo with us!'}
        </H3Medium>
        <DescriptionText className="!text-zinc-300  !text-base !m-0">
          {bannerBlock?.description
            ? bannerBlock?.description
            : 'Learn how we can help you reduce claim rejections and denials.'}
        </DescriptionText>
      </div>
      <div className="self-start md:self-center flex justify-center">
        <Button
          className="hover:!bg-zinc-200 !bg-white !no-underline mx-auto"
          link={
            bannerBlock?.buttonLink
              ? bannerBlock?.buttonLink
              : 'https://carestack.com/demo'
          }
        >
          <span className="text-base font-medium">
            {bannerBlock.buttonText ? bannerBlock.buttonText : 'Book Free Demo'}
          </span>
        </Button>
      </div> */}
    </div>
  )
}

export default ListingBlock
