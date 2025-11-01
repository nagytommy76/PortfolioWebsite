import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

export default function InfoModal({
   Features,
   TechStack,
   headText,
   openModal,
   handleClose,
   embeddedLink,
   videoTitle,
}: {
   Features: React.ReactNode
   TechStack: React.ReactNode
   headText: string
   openModal: boolean
   handleClose: () => void
   embeddedLink: string
   videoTitle?: string
}) {
   return (
      <Modal
         disableAutoFocus
         open={openModal}
         onClose={handleClose}
         aria-labelledby='child-modal-title'
         aria-describedby='child-modal-description'
      >
         <Fade in={openModal} timeout={300}>
            <Box
               component={'section'}
               className='
            absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
            border-0 w-full h-full bg-main-bg text-white
            overflow-y-scroll'
            >
               <CloseIcon
                  onClick={handleClose}
                  className='absolute right-5 top-5 cursor-pointer text-main-text sm:right-2 sm:top-2'
                  fontSize='large'
                  sx={{ fontSize: 55 }}
               />
               <Typography variant='h3' className='text-center mt-4 sm:text-4xl'>
                  {headText}
               </Typography>
               <section className='w-full flex flex-col items-center p-4 mb-5'>
                  <iframe
                     className='sm:w-[350px] sm:h-[280px] md:w-[600px] md:h-[300px] lg:w-[1100px] lg:h-[700px] '
                     width='1100'
                     height='700'
                     src={embeddedLink}
                     title={videoTitle ? videoTitle : 'Project presentation video'}
                     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                     referrerPolicy='strict-origin-when-cross-origin'
                     // allowfullscreen
                  ></iframe>
                  <section className='w-full flex flex-row items-center justify-center mt-7 gap-7 sm:flex-col sm:text-sm'>
                     <div>
                        <Typography variant='h4' className='text-center mb-5'>
                           🧩 Features
                        </Typography>
                        <ul className='flex flex-col gap-2 list-inside list-disc'>{Features}</ul>
                     </div>
                     <div>
                        <Typography variant='h4' className='text-center mb-5'>
                           🛠️ Tech Stack
                        </Typography>
                        <div className='grid grid-cols-5 gap-4 sm:grid-cols-3'>{TechStack}</div>
                     </div>
                  </section>
               </section>
            </Box>
         </Fade>
      </Modal>
   )
}
