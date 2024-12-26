import { Children, createContext, useState } from 'react'

export const ImageContext = createContext(null)

export default function ImageSwitchProvider({ children }) {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <ImageContext.Provider value={{ activeImage, setActiveImage }}>
      {children}
    </ImageContext.Provider>
  )
}
