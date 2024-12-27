import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CloseIcon } from '@sanity/icons'
import VoicestackLogo from 'public/assets/voicestack-logo.svg';
import { MenuIcon } from '@sanity/icons';
import Image from 'next/image';
import ButtonArrow from '../icons/ButtonArrow';
import Button from './Button';
import TelIcon from '../icons/TelIcon';
import { FormModal } from './FormModal';
import Section from '../structure/Section';
import Container from '../structure/Container';
import Logo from './Logo';



const Header = ({ data }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isUk, setIsUk] = useState(false);
  const [openForm, setOpenForm] = useState(false)

  const router = useRouter();
  useEffect(() => {
    setIsUk(router?.locale == 'en-GB' ? true : false)
  }, [router?.locale])


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


  useEffect(() => {
    window.addEventListener("scroll", handleScrollMob);
    return () => {
      window.removeEventListener("scroll", handleScrollMob);
    }
  });


  return (

    <Section className="fixed top-0 left-0  z-[999999] md:h-auto h-screen">
      <Container className="relative md:px-4 px-0">
        <div className='flex md:flex-row flex-col bg-white w-full shadow-[0px_7px_40px_0px_rgba(0,0,0,0.10)] md:mt-4 mt-0 px-5 py-3 md:rounded-md items-center gap-4'>
          <div className='md:w-1/3 w-full '>
          <Link href="/" className="md:justify-start justify-center flex flex-1">
            <Image src={VoicestackLogo} className='w-40' alt='VoiceStack'></Image>
            {/* <Logo></Logo> */}
          </Link>
          </div>
          <nav className='w-full flex justify-center items-center h-full'>
            <ul className='flex md:flex-row flex-col gap-2 h-full items-center justify-center w-full'>
              {data?.heroHeaderSection && data?.heroHeaderSection?.map((link: any, i: number) => {

                return (
                  <li className='md:h-full h-auto flex justify-center items-center md:border-none border-b '>
                    <Link
                      key={i}
                      href={link?.href}
                      className={`text-gray-600 cursor-pointer md:text-base text-xl font-medium text-center md:py-1.5 py-2 px-3 hover:bg-gray-50`}
                      onClick={toggleMenu}
                      
                    >
                      {link.headerMenu}
                    </Link>
                  </li>)

              })
              }
            </ul>
          </nav>

          <div className='w-1/3 flex md:justify-end justify-center'>
            <Button type='primarySm' onClick={() => { setOpenForm(true) }}>
              <ButtonArrow></ButtonArrow>
              <span className="text-base font-medium">{data?.ctabutton}</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>

  )
};

export default Header;