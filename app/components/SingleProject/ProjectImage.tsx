'use client'
import { useState } from 'react'
import Image from 'next/image'

const ProjectImage: React.FC<{ imageLink: string; alt: string }> = ({ imageLink, alt }) => {
   const [openImage, setOpenImage] = useState(false)
   const handleOpen = () => {
      setOpenImage(true)
   }
   return (
      <div>
         <Image onClick={handleOpen} className='' src={imageLink} alt={alt} width={700} height={600} />
      </div>
   )
}

export default ProjectImage
