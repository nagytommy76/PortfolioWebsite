import React from 'react'
import Link from 'next/link'
import resumeStyles from './resume.module.css'

const ResumeButton = () => {
   return (
      <button
         // className='
         //    relative bg-slate-800 text-white py-4 px-12 tracking-widest transition-all
         //    hover:tracking-[0.2rem] hover:py-[1.1rem] hover:px-[3.1rem] anim
         //    '
         className={resumeStyles.btn}
      >
         <i></i>
         <Link
            href={`https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing`}
            target='_blank'
         >
            Önéletrajz
         </Link>
      </button>
   )
}

export default ResumeButton
