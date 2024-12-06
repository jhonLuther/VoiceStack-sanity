import React, { useContext } from 'react'
import { NavigationContext } from '~/providers/NavigationContextProvider'

function MobileMenuButton(props) {
  const { isMobileMenuOpen, setIsMobileMenuOpen } =
    useContext(NavigationContext)
  const handler = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  return (
    <button
      className={props.className}
      type="button"
      aria-label="Toggle navigation"
      onClick={handler}
    >
      {isMobileMenuOpen ? (
        <svg
        width="22"
        height="22"
        viewBox="0 0 6.3499998 6.3499998"
        fill="currentColor"
      >
        <defs />
        <path
          d="m 0.76367336,0.52734375 a 0.26460978,0.26460978 0 0 0 -0.15625,0.45312501 L 5.369142,5.7441405 A 0.26516504,0.26516504 0 1 0 5.7441421,5.3691407 L 0.98047024,0.60742188 A 0.26460978,0.26460978 0 0 0 0.76367336,0.52734375 Z"
        />
        <path
          d="M 5.5507827,0.52734375 A 0.26460978,0.26460978 0 0 0 5.369142,0.60742188 L 0.60742336,5.3691407 A 0.26460978,0.26460978 0 1 0 0.98047024,5.7441405 L 5.7441421,0.98046876 A 0.26460978,0.26460978 0 0 0 5.5507827,0.52734375 Z"
        />
      </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <rect x="3" y="5" width="18" height="2" rx="1"></rect>
          <rect x="3" y="11" width="18" height="2" rx="1"></rect>
          <rect x="3" y="17" width="18" height="2" rx="1"></rect>
        </svg>
      )}
    </button>
  )
}

export default MobileMenuButton
