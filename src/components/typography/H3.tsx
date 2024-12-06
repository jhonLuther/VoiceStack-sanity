import React from 'react'
import { cn } from '~/lib/utils'

type H3Props = {
  className?: string ,
  children: any
}

const H3 = (props : H3Props) => {
  return (
    <h3 className={cn('text-3xl md:text-2xl font-semibold',props.className)}>
      {props.children}
    </h3>
  )
}

export default H3
