'use client'
import { useState } from 'react'
import Image from 'next/image'
import useImagePlaceholder from '@/src/ImagePlaceholder/useImagePlaceholder'

import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const ProjectImage: React.FC<{
   folder: string
   imageNames: string[]
   alt: string
   imageWidth?: number
   imageHeight?: number
}> = ({ folder, imageNames, alt, imageHeight = 600, imageWidth = 700 }) => {
   const [openImage, setOpenImage] = useState<boolean>(false)
   const [currentPicIndex, setCurrentPicIndex] = useState<number>(0)
   const convertToBase64 = useImagePlaceholder()

   const handleOpen = () => {
      setOpenImage(true)
   }

   const handleClose = () => {
      setOpenImage(false)
   }

   const nextImage = () => {
      if (imageNames.length > 1) {
         setCurrentPicIndex(currentPicIndex === imageNames.length - 1 ? 0 : currentPicIndex + 1)
      }
   }
   const previousImage = () => {
      if (imageNames.length > 1) {
         setCurrentPicIndex(currentPicIndex === 0 ? imageNames.length - 1 : currentPicIndex - 1)
      }
   }

   return (
      <>
         <Modal
            open={openImage}
            onClose={setOpenImage}
            aria-labelledby='child-modal-title'
            aria-describedby='child-modal-description'
         >
            <section>
               <CloseIcon
                  onClick={handleClose}
                  className='absolute right-5 top-5 cursor-pointer text-amber-600'
                  fontSize='large'
                  sx={{ fontSize: 55 }}
               />
               <ArrowBackIosNewIcon
                  onClick={previousImage}
                  className='absolute left-5 top-[50%] cursor-pointer text-amber-600'
                  fontSize='large'
                  sx={{ fontSize: 55 }}
               />
               <ArrowForwardIosIcon
                  onClick={nextImage}
                  className='absolute right-5 top-[50%] cursor-pointer text-amber-600'
                  sx={{ fontSize: 55 }}
               />
               <div className='w-screen h-screen flex items-center justify-center'>
                  <Image
                     sizes='(max-width: 400px) 400px'
                     className='h-screen object-scale-down'
                     src={`https://res.cloudinary.com/domsczfqu/image/upload/v1660310038/nagytamas93/${folder}/${imageNames[currentPicIndex]}`}
                     alt={alt}
                     placeholder={`data:image/svg+xml;base64,${convertToBase64(1920, 1080)}`}
                     width={1920}
                     height={1080}
                  />
               </div>
               <p className='text-4xl text-white absolute top-10 left-[50%]'>
                  {currentPicIndex + 1}/{imageNames.length}
               </p>
            </section>
         </Modal>
         <div className=''>
            <Image
               onClick={handleOpen}
               className=''
               src={`https://res.cloudinary.com/domsczfqu/image/upload/v1660310038/nagytamas93/${folder}/${imageNames[0]}`}
               alt={alt}
               placeholder={`data:image/svg+xml;base64,${convertToBase64(600, 700)}`}
               width={imageWidth}
               height={imageHeight}
            />
         </div>
      </>
   )
}

export default ProjectImage
