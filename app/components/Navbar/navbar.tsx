'use client'
import useNavbar from './Hooks/useNavbar'
import Image from 'next/image'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import styles from './navbar.module.css'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

import ContactIcons from '@/components/includes/ContactIcons'
import HoverLink from '../../../src/hoverLink'

import NTLogo2 from '@/assets/NTLogo2.jpg'

const Navbar = () => {
   const { isMobile, isOpen, navbarRef, handleCloseNavbar, handleOpenNavbar } = useNavbar()

   return (
      <>
         {isMobile && (
            <MenuIcon
               onClick={handleOpenNavbar}
               fontSize='large'
               className={`z-[50] fixed right-5 top-5 text-main-text ${isMobile ? 'flex' : 'md:hidden'}`}
            />
         )}
         <CSSTransition
            appear
            in={isOpen}
            unmountOnExit
            mountOnEnter
            timeout={300}
            nodeRef={navbarRef}
            classNames={{
               enter: styles.NavEnter,
               enterActive: styles.NavEnterActive,
               exit: styles.NavExit,
               exitActive: styles.NavExitActive,
            }}
         >
            <nav
               ref={navbarRef}
               className='
               text-white
               bg-footer-color bg-opacity-60 shadow-md h-[75px] w-full fixed top-0
               flex flex-wrap flex-row content-center justify-around z-50
               sm:h-screen sm:bg-opacity-100 sm:flex-col sm:justify-center               
               '
            >
               {isMobile && (
                  <CloseIcon
                     onClick={handleCloseNavbar}
                     fontSize='large'
                     className={`fixed right-5 top-5 text-main-text ${isMobile ? 'flex' : 'md:hidden'}`}
                  />
               )}
               <section
                  className='
                  w-1/3 lg:w-1/3 xl:w-[30%] flex flex-wrap flex-row content-center justify-evenly items-center text-xl z-50
                  sm:w-screen sm:flex-col sm:h-[50%] sm:text-center
                  '
               >
                  <Link href={'#home'}>
                     <Image
                        onClick={handleCloseNavbar}
                        className='rounded-full sm:w-[190px]'
                        src={NTLogo2}
                        width={50}
                        height={50}
                        alt='Nagy Tamás logó'
                        sizes='(max-width: 500px) 200px'
                     />
                  </Link>
                  <HoverLink onClick={handleCloseNavbar} href='#about' linkText='About' />
                  <HoverLink onClick={handleCloseNavbar} href='#projects' linkText='Projects' />
                  <HoverLink onClick={handleCloseNavbar} href='#github' linkText='GitHub' />
                  <HoverLink onClick={handleCloseNavbar} href='#certificates' linkText='Certificates' />
               </section>
               <section
                  className='
                  w-40 flex flex-wrap flex-row justify-around content-center items-center
                  sm:justify-around sm:mx-auto sm:mt-11'
               >
                  <ContactIcons />
               </section>
            </nav>
         </CSSTransition>
      </>
   )
}

export default Navbar
