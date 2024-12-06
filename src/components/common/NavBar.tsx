import LoginButton from './Login'
import CTAButton from './CTAbutton'
import { useContext } from 'react'
import { NavigationContext } from '~/providers/NavigationContextProvider'

const navigationLinks = [
  // { href: '#hero-section', name: 'Home' },
  { href: '#features-section', name: 'Features' },
  { href: '#integrations-section', name: 'Integrations' },
  { href: '#benefits-section', name: 'Benefits' },
  { href: '#testimonials-section', name: 'Testimonials' },
  { href: '#comparison-section', name: 'Comparison' },
  { href: '#about-us-section', name: 'About Us' },
  // { href: '#footer', name: 'Contact' },
]

export function DesktopNavbar(props) {
  return (
    <div className="hidden lg:flex lg:flex-row items-center gap-6">
      {navigationLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-sm font-base text-gray-300 hover:text-primary hover:text-white focus:text-white"
        >
          {link.name}
        </a>
      ))}
      <LoginButton url={props?.loginUrl} />
      <CTAButton url={props?.ctaUrl} name={props.ctaName} className="text-sm" />
    </div>
  )
}

export function MobileNavBar(props) {
  const { isMobileMenuOpen, setIsMobileMenuOpen } =
    useContext(NavigationContext)
  const handler = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  if (!isMobileMenuOpen) return

  return (
    <div className="xl:hidden w-full h-screen flex flex-col items-center gap-10 bg-[#02024a]  bg-cover py-14 text-white">
      {navigationLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-sm font-base text-gray-300 hover:text-primary hover:text-stone-400 focus:text-white"
          onClick={handler}
        >
          {link.name}
        </a>
      ))}
      <LoginButton url={props?.loginUrl} />
      <CTAButton url={props?.ctaUrl} name={props.ctaName} />
    </div>
  )
}

function Navbar(props) {
  return (
    <>
      <MobileNavBar {...props} />
      <DesktopNavbar {...props} />
    </>
  )
}

export default Navbar
