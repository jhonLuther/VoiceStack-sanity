import { cn } from '~/lib/utils'

const Paragraph = (props) => {
  return (
    <p
      className={cn(
        'text-white/80 !leading-6 text-[16px]  font-light md:max-w-3xl',
        props.className,
      )}
    >
      {props.children}
    </p>
  )
}

export default Paragraph
