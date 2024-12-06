import React from 'react'

const LoginButton = ({url}) => {
  return (
    <div className=" px-4 py-2 border-[1px] border-white/80 rounded-md justify-center items-center gap-2.5 inline-flex text-white/80 hover:bg-white hover:text-black text-sm">
      <a href={url} className="text- font-medium leading-snug ">
        Login
      </a>
    </div>
  )
}

export default LoginButton
