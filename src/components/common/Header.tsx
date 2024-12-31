import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CloseIcon } from '@sanity/icons'
import VoicestackLogo from 'public/assets/voicestack-logo.svg';
import VoicestackLogoSm from 'public/assets/voicestack-logo-sm.svg';
import { MenuIcon } from '@sanity/icons';
import Image from 'next/image';
import ButtonArrow from '../icons/ButtonArrow';
import Button from './Button';
import TelIcon from '../icons/TelIcon';
import { FormModal } from './FormModal';
import ChevronUp from '../icons/ChevronDown';
import Script from 'next/script';
import useMediaQuery from '~/utils/mediaQuery';
import { BookDemoContext } from '~/providers/BookDemoProvider';
import { getCookie, setCookie } from '~/utils/cookie';



const Header = ({ data }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isUk, setIsUk] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openSwitcher, setOpenSwitcher] = useState(false);
  const [currentRegion, setCurrentRegion] = useState(null);
  const { isDemoPopUpShown } = useContext(BookDemoContext);
  const [countryCode, setCountryCode] = useState<any>();
  const [regionSwitcher, setRegionSwitcher] = useState(false);
  const [regionSwitcherTop, setRegionSwitcherTop] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<any>(null);
  
  const geoPath ="/api/geo";
  const preLocale = getCookie("__vs_pl");

  const getGeoData = async () => {
    try {
      return (await (await fetch(geoPath)).json())
    } catch (error) {
      console.log(error);
      
    }
  }

  const regions = [
    {
      "flag": {
        "url": "https://cdn.sanity.io/images/76tr0pyh/production/ae5158a9a8fd8ce578ee8df1ba1ffa1bcee41b84-24x24.svg",
        "title": "US"
      },
      "url": "/",
      "title": "US",
      "Country": "en"
    },
    {
      "flag": {
        "url": "https://cdn.sanity.io/images/76tr0pyh/production/a6e6286f1884de71a5c0f801fce92438c8e30aca-24x24.svg",
        "title": "UK"
      },
      "url": "/en-GB",
      "title": "UK",
      "locale": "en-GB"
    },
    {
      "flag": {
        "url": "https://cdn.sanity.io/images/76tr0pyh/develop/b5c24305b7dedfaf1197c61f6f7a0b5fa991b48f-44x44.png",
        "title": "AU"
      },
      "url": "/en-AU",
      "title": "AU",
      "locale": "en-AU"
    }
    
  ]

  const router = useRouter();
  const matchedRegion = regions.find((region) => region.locale === router.locale);
  const toggleRef = useRef(null);
  const isMobile = useMediaQuery(767);

  console.log({matchedRegion});
  


  // useEffect(() => {

  //   //custom geo api if middleware failed
  //   if (window !== undefined) {
  //     const country:any = getCookie("__vs_ver");
  //     const hasCountrySet = country !== null;

  //     if (!hasCountrySet) {
  //       console.log("Not getting cc from mw");
        
  //       const handleGeoData = async () => {
  //         try {
  //           const res = await getGeoData();
  //           if (!res || !res.country) {
  //             console.log("No country data available.");
  //             setCookie("__vs_ver", "1");
  //             setCookie("__vs_pl", "en");
  //             return;
  //           }
        
  //           // Determine country code based on the country
  //           const countryCodeNum:any =
  //           res.country === "UM" || res.country === "US" ? 1 : res.country === "UK" || res.country === "GB" ? 2 : res.country === "AU"  || res.country === "NZ" ? 3 : 4;
                
  //           // Set the country code state and cookie
  //           setCountryCode(countryCodeNum);
  //           setCookie("__vs_ver", countryCodeNum);
        
  //           // Set the locale cookie based on the country
  //           // switch (res.country) {
  //           //   case "GB":
  //           //   case "UK":
  //           //     setCookie("__vs_pl", "en-GB");
  //           //     break;
  //           //   case "AU":
  //           //   case "NZ":
  //           //     setCookie("__vs_pl", "en-AU");
  //           //     break;
  //           //   case "UM":
  //           //   case "US":
  //           //     setCookie("__vs_pl", "en");
  //           //     break;
  //           //   default:
  //           //     setCookie("__vs_pl", "en");
  //           // }
  //         } catch (error) {
  //           console.error("Error fetching geo data:", error);
  //         }
  //       };
        
  //       // Call the function
  //       handleGeoData();
  //     } 
  //     else {
  //       setCountryCode(country);
  //     }
  //   }

  //   //for showing region main popup
  //   function shouldRenderPopup() {
  //     const countryCd:any = getCookie("__cs_ver") ? getCookie("__cs_ver") : 1;
  //     return (
  //       preLocale == null &&
  //       countryCd != "undefined" 
  //     );
  //   }
  //   setTimeout(() => {
  //     setRegionSwitcher(shouldRenderPopup);
  //   }, 500);

  //   //for currentlocale
  //   setCurrentCountry(
  //     router.locale == "en" ? "USA" : 
  //     router.locale == "en-GB" ? "UK" : 
  //     router.locale == "en-AU" ? "ANZ" : undefined
  //   );

  // }, [router])
  

  useEffect(()=>{
    setIsUk(router?.locale =='en-GB' ? true : false)
    setCurrentRegion(router.locale);  
  },[router?.locale])
 

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (window.innerWidth < 1024 && showMenu == true) {
      document.body.classList.add("menu-active");
    } else {
      document.body.classList.remove("menu-active");
    }
  }

  const handleScrollMob = () => {
    setHeaderFixed(window.scrollY > 44);
  };

  // const isMobile: any = useMediaQuery(1024);
  const toggleSwitcher = () => {
    setOpenSwitcher(!openSwitcher)
  }

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setOpenSwitcher(false);
      }
    };

    document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", handleScrollMob);
    return () => {
      window.removeEventListener("scroll", handleScrollMob);
    }
  });

  

  const before = "before:content-[''] before:h-[100px] before:absolute before:left-0 before:right-0 before:top-full before:bg-zinc-900";
  return (
    <>
    {/* region popup main */}
    {/* {regionSwitcher &&  
      <div className="fixed bg-[hsla(0,0%,9%,0.6)] h-screen w-screen z-[999] flex justify-center items-center">
        <div className="bg-white mx-auto pt-10 p-6 rounded-lg flex items-center flex-col gap-6 relative w-[310px]">
          <svg onClick={() => {
            setRegionSwitcher(false);
            setCookie('__vs_pl', router.locale ?? "en")  
          }} className='absolute right-3 top-3 cursor-pointer' 
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29279 4.29357C4.48031 4.1061 4.73462 4.00078 4.99979 4.00078C5.26495 4.00078 5.51926 4.1061 5.70679 4.29357L9.99979 8.58657L14.2928 4.29357C14.385 4.19806 14.4954 4.12188 14.6174 4.06947C14.7394 4.01706 14.8706 3.98947 15.0034 3.98832C15.1362 3.98717 15.2678 4.01247 15.3907 4.06275C15.5136 4.11303 15.6253 4.18728 15.7192 4.28117C15.8131 4.37507 15.8873 4.48672 15.9376 4.60962C15.9879 4.73251 16.0132 4.86419 16.012 4.99697C16.0109 5.12975 15.9833 5.26097 15.9309 5.38297C15.8785 5.50498 15.8023 5.61532 15.7068 5.70757L11.4138 10.0006L15.7068 14.2936C15.8889 14.4822 15.9897 14.7348 15.9875 14.997C15.9852 15.2592 15.88 15.51 15.6946 15.6954C15.5092 15.8808 15.2584 15.986 14.9962 15.9882C14.734 15.9905 14.4814 15.8897 14.2928 15.7076L9.99979 11.4146L5.70679 15.7076C5.51818 15.8897 5.26558 15.9905 5.00339 15.9882C4.74119 15.986 4.49038 15.8808 4.30497 15.6954C4.11956 15.51 4.01439 15.2592 4.01211 14.997C4.00983 14.7348 4.11063 14.4822 4.29279 14.2936L8.58579 10.0006L4.29279 5.70757C4.10532 5.52004 4 5.26573 4 5.00057C4 4.73541 4.10532 4.4811 4.29279 4.29357Z" fill="black" />
          </svg>

          <p className='text-center text-gray-800 font-medium text-base leading-[1.5]'>You are currently viewing VoiceStack&apos;s website for the<br/> {currentCountry} region</p>

          <Button type="primary" onClick={() => {
            setRegionSwitcher(false);
            setCookie('__vs_pl', router.locale ?? "en")}}
          >
            <span className="text-base font-medium">
              Continue with VoiceStack {currentCountry}
            </span>
          </Button>
          <div className='w-full'>
            <div className="w-full flex justify-center relative after:content-[''] after:absolute after:left-0 after:top-1/2 after:border-b after:border-[#E5E7EB] after:right-0 after:-z-1">
              <span className='flex px-3 bg-white relative z-1 text-gray-400'>Or Go to</span>
            </div>
            <div className='flex items-center justify-between gap-5'>
            
            </div>
          </div>
        </div>
      </div>
    } */}
      {/* region popup main end*/}

      <div className={`relative w-full before:content-[''] before:-z-0 before:h-[100px] before:absolute before:left-0 before:right-0 before:top-[-100px] before:bg-vs-blue`}>
        <header
          className={`fixed w-full top-0 lg:top-[35px] left-0 z-20 transition-all duration-300 ease-linear ${headerFixed && '!fixed w-full lg:!top-4'}  left-0`}      >
          

          <div className={`z-20 text-white`}>
            <div className="max-w-7xl mx-auto lg:px-4 flex gap-[10px]">
              {/* <div className={`flex flex-col gap-3 justify-between py-[10px] transition-all duration-300 ease-linear relative  ${headerFixed ? '!lg:py-3' : 'lg:py-6'}`}> */}
              <div className={`flex flex-grow gap-3 justify-between py-0 transition-all duration-300 ease-linear lg:rounded-[10px] 
                bg-white shadow-[0px_7px_40px_0px_rgba(0,0,0,0.10)] backdrop-blur-[12.5px] lg:pl-6 pl-3 pr-3 items-center h-[48px] lg:h-[63px]`}>
                
                <div className={`flex flex-row gap-3 justify-between items-center flex-1 
                lg:relative transition-all duration-300 ease-in-out ${headerFixed ? 'lg:my-3 my-2' : 'lg:my-3 my-2'}`}>
                  
                  {/* Logo */}
                  <Link href="/" className={`flex-shrink-0 text-2xl font-extrabold bg-gradient-text bg-clip-text 
                    text-transparent font-monrope tracking-tighterText ${isMobile  && headerFixed && 'hidden'}`}>
                    <Image src={VoicestackLogo} alt='VoiceStack' title='VoiceStack'></Image>
                  </Link>

                  {/* Logo Sm when mob scroll */}
                  <Link href="/" className={`${isMobile  && headerFixed ? 'block': 'hidden'}`}>
                    <Image src={VoicestackLogoSm} alt='VoiceStack' className='w-[26px] h-auto'></Image>
                  </Link>

                  <div className={`lg:flex flex-col lg:flex-row lg:gap-6 justify-between lg:rounded-none items-center 
                    lg:static absolute top-[44px] left-0 right-0 bg-white pb-20 lg:pb-0 
                    h-[calc(100vh-40px)] lg:h-auto shadow-[0px_40px_40px_0px_rgba(0,0,0,0.10)] lg:shadow-none
                    xl:flex-grow xl:justify-end xl:mr-10
                    ${showMenu ? 'flex': 'hidden'}`}>

                    {/* nav items */}
                    <div className={`lg:flex-row top-[110px] right-0 px-4 pt-4 pb-8 w-full lg:w-auto lg:p-0 bg-white lg:bg-transparent left-0 lg:static flex-col 
                      gap-2 justify-between lg:items-center flex`}>
                      <nav className="flex flex-col lg:flex-row lg:gap-y-4 gap-x-4 xl:gap-x-8 w-full lg:w-auto flex-wrap ">
                        {data?.heroHeaderSection && data?.heroHeaderSection?.map((link:any, i:number) => {
                          // if (link?.headerMenu === "Comparison" && isUk) {
                          //   return null;
                          // }
                        
                          return (
                            <Link
                              key={link?.href + i}
                              href={link?.href}
                              className="text-gray-700 lg:text-sm xl:text-base font-medium leading-[1.15] text-center py-4 border-b border-gray-200 lg:border-0 lg:p-0"
                              onClick={toggleMenu}
                            >
                              {link.headerMenu}
                            </Link>
                          );

                        })}
                      </nav>
                    </div>

                    <div className='flex flex-col gap-8'>

                      {/* mob cta and phone */}
                      <div className='flex flex-col md:flex-row gap-3 md:gap-5 items-center lg:hidden'>
                        <div className='flex-shrink-0'>
                          <a href={`tel:${data?.phoneNumber}`} className='text-gray-700 px-[12px] py-[7px] rounded-[7px] text-sm font-medium leading-6 flex items-center whitespace-nowrap gap-[8px]  
                          border border-gray-300'><TelIcon/>{data?.phoneNumber}</a>
                        </div>
                        <Button type='primarySm'  onClick={() => {setOpenForm(true)}}>
                          <ButtonArrow></ButtonArrow>
                          <span className="text-base font-medium">{data?.ctabutton}</span>
                        </Button>
                      </div>

                      {/* mob switcher */}    
                      <div className={`bg-white flex gap-5 justify-center items-center lg:hidden`}>
                        {regions.map((region:any, index:number) => {
                          return(
                            currentRegion == region.locale ? (
                              <div className='flex gap-2 items-center'>
                                <Image 
                                  src={region.flag.url} 
                                  alt={region.flag.title} 
                                  title={region.flag.title}
                                  width={32}
                                  height={32}
                                  className='border-2 rounded-full border-black/20'
                                  >
                                </Image>
                              </div>
                            ):(

                            <a href={region.url} className='flex gap-2 items-center'>
                              <Image 
                                src={region.flag.url} 
                                alt={region.flag.title} 
                                title={region.flag.title}
                                width={32}
                                height={32}
                                className='border-2 rounded-full border-white'
                                >
                              </Image>
                            </a>
                            )
                          )
                        })}
                      </div>
                    </div>

                  </div>

                  {/* dt cta and phone */}
                  <div className='lg:flex gap-3 items-center lg:justify-end hidden'>
                    <div className='flex-shrink-0'>
                      <a href={`tel:${data?.phoneNumber}`} className='text-gray-700 px-[12px] py-[7px] rounded-[7px] text-sm font-medium leading-6 flex items-center whitespace-nowrap gap-[8px]  
                      border border-gray-300'><TelIcon/>{data?.phoneNumber}</a>
                    </div>
                    <Button type='primarySm' onClick={() => {setOpenForm(true)}}>
                      <ButtonArrow></ButtonArrow>
                      <span className="text-sm font-medium">{`Book free demo`}</span>
                    </Button>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <div className={`${isMobile  && headerFixed ? 'block': 'hidden'}`}>
                      <Button type='primaryXs' onClick={() => {setOpenForm(true)}}>
                        <ButtonArrow></ButtonArrow>
                        <span className="text-sm font-medium">{`Book free demo`}</span>
                      </Button>
                    </div>      

                    {/* menu icon */}
                    <div onClick={toggleMenu} className={`flex lg:hidden text-zinc-900 cursor-pointer items-center select-none z-20 rounded-lg lg:rounded-xl lg:py-[6px] lg:pr-[10px] lg:pl-[14px]
                      `}>
                      {/* {!showMenu && <span className='hidden lg:inline-flex text-zinc-800 text-sm'>More</span>} */}
                      {showMenu ? <CloseIcon width={40} height={40} /> : <MenuIcon width={40} height={40} />}
                    </div>
                  </div>      
                 
                </div>
              </div>

              {/* Region Switcher Desktop*/}
              {regions && regions.length > 0 &&(
                <div className='relative hidden lg:flex w-[86px]'>
                  <div className='flex p-[6px] rounded-[10px] bg-white w-full shadow-[0px_7px_40px_0px_rgba(0,0,0,0.10)]'>
                    <span ref={toggleRef} className='select-none flex w-full items-center gap- p-[6px] justify-between cursor-pointer text-gray-900' onClick={toggleSwitcher}>
                      {matchedRegion && (
                        <Image 
                            src={matchedRegion.flag.url} 
                            alt={matchedRegion.flag.title} 
                            title={matchedRegion.flag.title}
                            width={23}
                            height={23}
                            >
                          </Image>
                      )}
                      <div className={`${openSwitcher && '-rotate-180'} transition-transform linear duration-300`}>
                        <ChevronUp></ChevronUp>
                      </div>
                    </span>
                  </div>

                  <div className={`p-[6px] rounded-[10px] bg-white  shadow-[0px_7px_40px_0px_rgba(0,0,0,0.10)] absolute top-[calc(100%+4px)] left-0 right-0 flex-col ${openSwitcher ? 'flex' : 'hidden'}`}>
                    {regions.map((region:any, index:number) => {
                      return(
                        currentRegion == region.locale ? (
                          <div className='flex gap-2 items-center opacity-80 py-[6px] pl-[6px] border-b border-gray-200 last:border-none'>
                            <Image 
                              src={region.flag.url} 
                              alt={region.flag.title} 
                              title={region.flag.title}
                              width={23}
                              height={23}
                              >
                            </Image>
                            <span className='text-gray-900 text-sm font-medium'>{region.title}</span>
                          </div>
                        ):(

                        <a href={region.url} className='flex gap-2 items-center py-[6px] pl-[6px] border-b border-gray-200 last:border-none'>
                          <Image 
                            src={region.flag.url} 
                            alt={region.flag.title} 
                            title={region.flag.title}
                            width={23}
                            height={23}
                            >
                          </Image>
                          <span className='text-gray-900 text-sm font-medium'>{region.title}</span>
                        </a>
                        )
                      )
                    })}
                  </div>
                </div>
              )}
              {/* Region Switcher Desktop end */}
            </div>
          </div>
        </header>
      </div>
      {openForm && (
        <FormModal
          className={`pt-9  flex items-start`}
          onClose={() => setOpenForm(false)}
          data={isDemoPopUpShown}
        />
      )}
    </>

  );
};

export default Header;