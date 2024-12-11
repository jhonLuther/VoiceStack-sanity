import React from 'react'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'

export default function ListItem(props) {
  return (
    <li onClick={props.onClick} className='group flex gap-4 cursor-pointer'>
      <div className='bg-gray-200 w-1 rounded-full flex'>
        <div className={`w-1 ${props.showDesc == true ? "bg-vs-blue" : "bg-transparent"} max-h-10 h-full rounded-full`}></div>

      </div>
      <div className='flex flex-col'>
        <H3 className='group-hover:text-vs-blue'>{props.title}</H3>

        {props.showDesc == true &&
          <Paragraph>{props.desc}</Paragraph>
        }
      </div>
    </li>
  )
}
