import CashIcon from "../icons/CashIcon"
import H3 from "../typography/H3"

const RichIcon = ({title, summary}) => {
  return (
    <li className="flex items-start rounded-lg gap-4  ">
      

      <div className="w-16 h-16 bg-purple-200 rounded-sm flex items-center justify-center text-gray-900">
        <CashIcon></CashIcon>
      </div>
      
      <div className="flex-1 flex flex-col gap-2">
        <H3 >{title}</H3>
        <p className="text-md mb-0 text-primary font-normal text-gray-700">
          {summary}
        </p>
      </div>
    </li>
  )
}

export default RichIcon
