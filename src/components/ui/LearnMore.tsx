
import {ChevronRightIcon} from '@sanity/icons'
const LearnMore = (props) => {
  return <div className={`group-hover:gap-[6px] transition-all duration-300 ease-linear text-[#4A3CE1] inline-flex items-center 
  gap-1 font-inter text-base font-medium leading-[125%] ${props.className}`}>
    {props.children} <ChevronRightIcon width={20} height={20}></ChevronRightIcon>
  </div>
}

export default LearnMore
