import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'

const RichAvatar = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <Avatar>
        <AvatarImage src={props.AuthorImage} alt="user-avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-base font-medium ">{props.user}</p>
        <p className="text-[#F768D1] font-normal text-base">{props.tenant}</p>
      </div>
    </div>
  )
}

export default RichAvatar
