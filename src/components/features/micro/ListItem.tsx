import React from 'react'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'

export default function ListItem(props) {

  const startPoint = props.index * (100/props.numberOfItems)
  const endPoint = (props.index+1) * (100/props.numberOfItems)
  const actualPercentScrolled = props.percentScrolled> 0 ?((props.percentScrolled-startPoint)/(endPoint-startPoint))*300 : 100
  const liRef = React.useRef(null)

  // console.log({scrolled:((props.percentScrolled-startPoint)/(endPoint-startPoint))*100})

  return (
    <li  onClick={() => props.onClick(props.percentScrolled,props.index,liRef)} className='group flex gap-4 cursor-pointer'>
      <div className='bg-gray-200 w-1 rounded-full flex '>
        <div  ref={liRef}style={{height:`${actualPercentScrolled}%`}} className={`w-1 ${props.showDesc == true ? "bg-vs-blue" : "bg-transparent"} max-h-[100%] h-full rounded-full`}></div>
      </div>
      <div className={`flex flex-col ease-linear ${props.showDesc? ' translate-x-1.5':' '}`}>
        <H3 className={`group-hover:text-vs-blue ease-linear ${props.showDesc? '!text-lg':' opacity-50'}`}>{props.title}</H3>
          <div className={`overflow-hidden ease-linear ${props.showDesc ? 'opacity-100':' h-0 opacity-1'}`}>
          <Paragraph>{props.desc}</Paragraph>
          </div>
      </div>
    </li>
  )
}
