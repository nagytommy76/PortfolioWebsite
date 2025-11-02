'use client'
import { useState } from 'react'
import Link from 'next/link'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ContactPageIcon from '@mui/icons-material/ContactPage'

import Tooltip from '@mui/material/Tooltip'

const ContactIcons = () => {
   const [tooltipText, setTooltipText] = useState<string>('nagytommy76@gmail.com')
   const handleCopy = async () => {
      await navigator.clipboard.writeText('nagytommy76@gmail.com')
      setTooltipText('The email has been copied to clipboard!')
      setTimeout(() => {
         setTooltipText('nagytommy76@gmail.com')
      }, 3000)
   }

   return (
      <>
         <Link
            aria-label='Tamas Nagy LinkedIn profile'
            className='transition hover:-translate-y-1'
            target='_blank'
            href='https://www.linkedin.com/in/tamasnagy93'
         >
            <LinkedInIcon fontSize='large' />
         </Link>
         <Link
            aria-label='Tamas Nagy GitHub profile'
            className='transition hover:-translate-y-1'
            target='_blank'
            href='https://github.com/nagytommy76'
         >
            <GitHubIcon fontSize='large' />
         </Link>
         <p onClick={handleCopy} className='cursor-pointer transition hover:-translate-y-1'>
            <Tooltip title={tooltipText} placement='bottom' arrow>
               <EmailIcon fontSize='large' />
            </Tooltip>
         </p>
         <Link
            aria-label='Tamas Nagy CV, Resume'
            href={'https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing'}
            className='cursor-pointer transition hover:-translate-y-1'
            target='_blank'
         >
            <Tooltip title={'CV'} placement='bottom' arrow>
               <ContactPageIcon fontSize='large' />
            </Tooltip>
         </Link>
      </>
   )
}

export default ContactIcons
