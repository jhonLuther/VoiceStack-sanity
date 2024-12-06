import React from 'react'
import { cn } from '~/lib/utils'

const CTAButton = ({ className = null, name, url  }) => {
  return (
    <div
      className={cn(
        'cursor-pointer px-4 py-2 border-[1px] bg-[#8639f8] border-[#8639f8] rounded-md justify-center items-center gap-2.5 inline-flex hover:bg-[#9E5CFF] hover:border-[#9E5CFF] text-[16px]',
        className,
      )}
    >
      <a
        className="text-white font-medium leading-snug"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  )
}

export default CTAButton
