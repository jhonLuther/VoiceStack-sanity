import React from 'react'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'

export default function ListItem(props: any) {
  const handleClick = () => {
    props.onClick(props.index)
  }

  return (
    <li onClick={handleClick} className="group flex gap-4">
      <div className="bg-gray-200 w-1 rounded-full flex">
        <div
          className={`w-1 ${props.showDesc == true ? 'bg-vs-blue' : 'bg-transparent'} max-h-[100%] h-full rounded-full transition-all ease duration-1000`}
        ></div>
      </div>
      <div className={`flex flex-col ease-linear ${props.showDesc ? '' : ''}`}>
        <H3
          className={`group-hover:text-vs-blue transition-all ease duration-1000 ${props.showDesc ? '!text-lg' : ' opacity-50'}`}
        >
          {props.title}
        </H3>
        <div
          className={`overflow-hidden ease-linear ${props.showDesc ? 'opacity-100' : ' h-0 opacity-1'}`}
        >
          <Paragraph>{props.desc}</Paragraph>
        </div>
      </div>
    </li>
  )
}
