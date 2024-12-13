import Header from './common/Header'
import Footer from './common/Footer'
import NavigationContextProvider from '~/providers/NavigationContextProvider'
import ImageSwitchProvider from '~/providers/ImageSwitchProvider'

interface LayoutProps {
  children: React.ReactNode
  fullWidth?: boolean
  className?: string
}

// const Layout = (props) => {
//   return (
//     <NavigationContextProvider>
//       <div className={`flex flex-col min-h-screen ${props.className}`}>
//         {/* <Header {...props} /> */}
//         <main>{props.children}</main>
//         {/* <Footer {...props} /> */}
//       </div>
//     </NavigationContextProvider>
//   )
// }

// export default Layout

export default function Layout({
  children,
  className,
  fullWidth = false,
}: LayoutProps) {


  return (
    <NavigationContextProvider>
      <ImageSwitchProvider>

        <div
          className={`flex flex-col w-full items-center}`}
        >
          {/* <Header /> */}
          <main className="w-full flex flex-col">{children}</main>
          {/* <Footer className={`w-full flex `} /> */}
        </div>
      </ImageSwitchProvider>
    </NavigationContextProvider>
  )
}
