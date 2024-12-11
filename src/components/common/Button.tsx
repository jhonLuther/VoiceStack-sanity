import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  type?:
    | 'primary'
    | 'primaryWhite'
  alter?: 'bgWhite' | 'borderWhite' | 'disabled' | 'default'
  children?: React.ReactNode
  link?: any
  target?: '_blank' | '_self' | '_parent' | '_top' | '';
  isDemo?: boolean
  [x: string]: any
  className?: string
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  alter,
  children,
  link,
  isDemo,
  target,
  className,
  ...rest
}) => {
  const baseClasses = `px-[17px] py-[10px] rounded-[7px] text-gray-900 font-inter text-base font-medium leading-6 rounded-[5px] flex items-center whitespace-nowrap gap-[8px]  ${className}`;
  // const customClasses = `bg-zinc-500 hover:bg-zinc-600 text-white`;
  const customClasses = clsx({
    'bg-vs-blue hover:bg-vs-blue text-white border border-vs-blue bg-vs-blue': type === 'primary',
    'bg-white hover:bg-white text-blue-500 border border-white': type === 'primaryWhite'
  });
  console.log(customClasses);
  

  const combinedClasses = clsx(baseClasses, customClasses, className);
  console.log({combinedClasses});
  

  if (link) {
    return (
      <Link href={link} className={combinedClasses} target={target} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  )
}

export default Button
