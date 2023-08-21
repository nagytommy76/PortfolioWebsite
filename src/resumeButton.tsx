import React from 'react'
import Link from 'next/link'

const resumeButton = () => {
   return (
      <Link
         className='w-36 h-36 bg-amber-500'
         href={`https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing`}
         target='_blank'
      >
         Önéletrajz
      </Link>
   )
}

export default resumeButton
