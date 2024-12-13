import React, { useEffect, useState } from 'react'
import Paragraph from './typography/Paragraph';
import H3 from './typography/H3';
import { ChevronDown, Minus, Plus } from 'lucide-react';

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    setIsOpen(index == 0);
  },[])

  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between text-left ${index == 0 ? 'pb-6': 'py-6'}`}
      >
        <H3>{question}</H3>
        
        {isOpen ?  <Minus height={16} width={16}></Minus> : <Plus height={16} width={16}></Plus>}
      </button>
      {isOpen && (
        <Paragraph className="pb-6">{answer}</Paragraph>
      )}
    </div>
  )
}



export default FaqItem
