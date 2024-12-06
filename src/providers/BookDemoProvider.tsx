import { Children, createContext, useState } from 'react'

export const BookDemoContext = createContext(null)

export default function BookDemoContextProvider({ children }) {
  const [isDemoPopUpShown, setIsDemoPopUpShown] = useState(false)

  return (
    <BookDemoContext.Provider value={{ isDemoPopUpShown, setIsDemoPopUpShown }}>
      {children}
    </BookDemoContext.Provider>
  )
}
