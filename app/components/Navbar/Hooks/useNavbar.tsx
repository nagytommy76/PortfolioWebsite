import { useRef, useState, useCallback, useEffect } from 'react'

const useNavbar = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false)
   const navbarRef = useRef<HTMLElement>(null)
   const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth <= 639 ? false : true)

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
   return {
      isOpen,
      isMobile,
      navbarRef,
      handleOpenNavbar,
      handleCloseNavbar,
   }
}

export default useNavbar
