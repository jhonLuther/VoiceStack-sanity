import React from 'react'

export default function Section(props) {
  return (
    <section id={props.id} className={`w-full flex justify-center ${props.className}`}>
      {props.children}
    </section>
  )
}
