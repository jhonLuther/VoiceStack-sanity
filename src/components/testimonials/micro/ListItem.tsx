import React from 'react'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'

interface ListItemProps {
  index: number; // Index of the current ListItem
  numberOfItems: number; // Total number of list items
  percentScrolled: number; // Current percentage scrolled
  onClick: (index: number) => void;
  desc?:any;
  showDesc?:boolean;
  title?:string;
  children?: React.ReactNode;

}

export default function ListItem(props: any) {

  const startPoint = props.index * (100/props.numberOfItems)
  const endPoint = (props.index+1) * (100/props.numberOfItems)
  const actualPercentScrolled = props.percentScrolled> 0 ?((props.percentScrolled-startPoint)/(endPoint-startPoint))*100 : 0


  // Handle click
  // const handleClick = () => {
  //   // onlick(index); // Trigger the scroll-to-card logic
  //   // if (onClick) {
  //   // } else {
  //   //   console.error("onClick function not provided to ListItem");
  //   // }
  // };
  const handleClick = () => {
    props.onClick(props.index);
  };

  return (
    <li onClick={handleClick} className='group flex gap-4'>
      <div className='bg-gray-200 w-1 rounded-full flex'>
        {/* <div style={{height:`${actualPercentScrolled}%`}} className={`w-1 ${props.showDesc == true ? "bg-vs-blue" : "bg-transparent"} max-h-[100%] h-full rounded-full`}></div> */}
        <div className={`w-1 ${props.showDesc == true ? "bg-vs-blue" : "bg-transparent"} max-h-[100%] h-full rounded-full transition-all ease duration-1000`}></div>

      </div>
      <div className={`flex flex-col ease-linear ${props.showDesc? '':''}`} >
        <H3 className={`group-hover:text-vs-blue transition-all ease duration-1000 ${props.showDesc? '!text-lg':' opacity-50'}`}>{props.title}</H3>
          <div className={`overflow-hidden ease-linear ${props.showDesc ? 'opacity-100':' h-0 opacity-1'}`}>
          <Paragraph>{props.desc}</Paragraph>
          </div>
      
      </div>
    </li>
  )
}
