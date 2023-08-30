import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import GihubIcon from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'

const Footer = () => {
   return (
      <footer className='text-slate-100 h-36 w-[100%] mt-auto bg-neutral-800 flex flex-col items-center justify-center'>
         <div className='mb-3 flex flex-row w-32 justify-evenly items-center'>
            <Link className='hover:animate-bounce' href={'https://github.com/nagytommy76'} target='_blank'>
               <Image
                  className='sepia-0 invert-[100%] saturate-[600%] brightness-95 contrast-75'
                  src={GihubIcon}
                  alt='Github icon'
                  width={45}
                  height={45}
               />
            </Link>
            <Link
               className='hover:animate-bounce'
               href={'https://www.linkedin.com/in/tamasnagy93'}
               target='_blank'
            >
               <Image src={LinkedIn} alt='LinkedIn icon' width={45} height={45} />
            </Link>
         </div>
         <h1 className='text-lg'>Nagy Tamás 2023.</h1>
      </footer>
   )
}

export default Footer
