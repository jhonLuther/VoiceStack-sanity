import { useContext, useState } from "react"
import ButtonArrow from "../icons/ButtonArrow"
import Button from "./Button"
import { FormModal } from "./FormModal"
import { BookDemoContext } from '~/providers/BookDemoProvider';

interface DemoButtonProps {
  type?: "primary" | "primaryWhite" | "video" | "primarySm" | "secondary" | "primaryXs";
  className?: string;
}

// export default function DemoButton({onClick, openForm, setOpenForm, isDemoPopUpShown}:DemoButtonProps) {
const DemoButton: React.FC<DemoButtonProps> = ({type="primary", className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const { isDemoPopUpShown } = useContext(BookDemoContext);
  console.log(isDemoPopUpShown, "btncontext");
  
  return (
    <div className={className}>
      <Button type={type} onClick={ () => setOpenForm(true)}>
        <ButtonArrow></ButtonArrow>
        <span className="text-base font-medium">{`Book free demo`}</span>
      </Button>
      {openForm && (
        <FormModal
          data={isDemoPopUpShown}
          className={`pt-9  flex items-start`}
          onClose={() => setOpenForm(false)}
        />
      )}
    </div>
  )
}

export default DemoButton;