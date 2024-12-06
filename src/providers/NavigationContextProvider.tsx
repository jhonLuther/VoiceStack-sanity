import { Children, createContext, useState } from 'react'

export const NavigationContext = createContext(null)

export default function NavigationContextProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <NavigationContext.Provider
      value={{ isMobileMenuOpen, setIsMobileMenuOpen }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
