import { createContext, useContext, useState } from 'react'

const HomeContext = createContext(null)

export const HomeSettings = ({ children, homeSettings: initialSettings }) => {
  const [homeSettings, setHomeSettings] = useState(initialSettings || [])
  return (
    <HomeContext.Provider value={{ homeSettings, setHomeSettings }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => {
  const context = useContext(HomeContext)
  if (!context) {
    throw new Error(
      'useHomeContext must be used within a HomeSettings provider',
    )
  }
  return context
}
