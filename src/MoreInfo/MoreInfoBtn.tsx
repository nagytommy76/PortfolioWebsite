'use client'
import InfoModal from './InfoModal'
import { useState } from 'react'

import { LinkButtonClass } from '../LinkButton/LinkButton'

export default function MoreInfoBtn({
   displayText = 'More info',
   Features,
   TechStack,
   headText,
   embeddedLink,
}: {
   displayText?: string
   Features: React.ReactNode
   TechStack: React.ReactNode
   headText: string
   embeddedLink: string
   videoTitle?: string
}) {
   const [openModal, setOpenModal] = useState<boolean>(false)

   const handleOpen = () => {
      setOpenModal(true)
   }

   const handleClose = () => {
      setOpenModal(false)
   }

   return (
      <>
         <button onClick={handleOpen} className={LinkButtonClass}>
            {displayText}
         </button>
         <InfoModal
            openModal={openModal}
            handleClose={handleClose}
            Features={Features}
            TechStack={TechStack}
            headText={headText}
            embeddedLink={embeddedLink}
         />
      </>
   )
}
