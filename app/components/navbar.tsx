'use client'
import { useState, useEffect, useCallback } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

import Collapse from '@mui/material/Collapse'

import ContactIcons from '@/components/includes/ContactIcons'
import HoverLink from '../../src/hoverLink'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState<boolean>(true)
   const [isMobile, setIsMobile] = useState<boolean>(false)

   const handleCloseNavbar = useCallback(() => {
      isMobile && setIsOpen(false)
   }, [isMobile])
   const handleOpenNavbar = () => setIsOpen(true)

   const handleWindowSizeChange = useCallback(() => {
      if (window.innerWidth <= 639) {
         setIsMobile(true)
         handleCloseNavbar()
      } else {
         handleOpenNavbar()
         setIsMobile(false)
      }
   }, [handleCloseNavbar])

   useEffect(() => {
      handleWindowSizeChange()
      window.addEventListener('resize', handleWindowSizeChange)
      window.addEventListener('load', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
         window.removeEventListener('load', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])

   return (
      <>
         {isMobile && (
            <MenuIcon
               onClick={handleOpenNavbar}
               fontSize='large'
               className={`z-[50] fixed right-5 top-5 text-amber-500 ${isMobile ? 'flex' : 'md:hidden'}`}
            />
         )}
         {/* <Collapse in={isMobile ? isOpen : true}> */}
         <Collapse in={isOpen}>
            <nav
               className='
               text-white
               bg-neutral-800 bg-opacity-60 shadow-md h-[75px] w-full fixed top-0
               flex flex-wrap flex-row content-center justify-around z-50
               sm:h-screen sm:bg-opacity-100 sm:flex-col sm:justify-center
               '
            >
               {isMobile && (
                  <CloseIcon
                     onClick={handleCloseNavbar}
                     fontSize='large'
                     className={`fixed right-5 top-5 text-amber-500 ${isMobile ? 'flex' : 'md:hidden'}`}
                  />
               )}
               <section
                  className='
                  w-1/2 lg:w-1/3 xl:w-[30%] flex flex-wrap flex-row content-center justify-between text-xl z-50
                  sm:w-screen sm:flex-col sm:h-[40%] sm:text-center
                  '
               >
                  <HoverLink onClick={handleCloseNavbar} href='#home' linkText='Logó' />
                  <HoverLink onClick={handleCloseNavbar} href='#about' linkText='Rólam' />
                  <HoverLink onClick={handleCloseNavbar} href='#projects' linkText='Projektek' />
                  <HoverLink onClick={handleCloseNavbar} href='#certificates' linkText='Tanúsítványok' />
               </section>
               <section
                  className='
                  w-40 flex flex-wrap flex-row justify-around content-center items-center
                   sm:justify-around sm:mx-auto sm:mt-11'
               >
                  <ContactIcons />
               </section>
            </nav>
         </Collapse>
      </>
   )
}

export default Navbar
