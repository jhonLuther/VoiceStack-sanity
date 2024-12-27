import React from 'react'

export default function PillItem({children}) {
  return (
    <li className='flex items-center gap-2 border px-2 py-1 rounded-[5px] text-[15px] bg-white'>{children}</li>
  )
}
