'use client'
import { useState } from 'react'

import { LinkButtonClass } from '../LinkButton/LinkButton'

import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'

export default function MoreInfoBtn({
   displayText = 'More info',
   headText,
}: {
   displayText?: string
   headText: string
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
         <Modal
            open={openModal}
            onClose={handleOpen}
            aria-labelledby='child-modal-title'
            aria-describedby='child-modal-description'
         >
            <Paper className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-0 w-3/4 h-5/6'>
               <CloseIcon
                  onClick={handleClose}
                  className='absolute right-5 top-5 cursor-pointer text-main-text'
                  fontSize='large'
                  sx={{ fontSize: 55 }}
               />
               <section className='w-full h-full'>
                  <Typography variant='h3' className='text-center mt-4'>
                     {headText}
                  </Typography>
               </section>
            </Paper>
         </Modal>
      </>
   )
}
