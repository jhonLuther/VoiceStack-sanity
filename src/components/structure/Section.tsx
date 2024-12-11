import React from 'react'

// interface LayoutProps {
//   children?: React.ReactNode
//   extended?: boolean
//   display?: 'hidden'
//   position?: string
//   background?: string
//   className?: any
//   childClass?: string
//   fullWidth?: boolean
//   removePadding?: boolean
// }

export default function Section(props:any) {
  return (
    <section id={props.id} className={`${props.className} w-full flex justify-center px-4 `}>
        {props.children}
    </section>
  )
}
