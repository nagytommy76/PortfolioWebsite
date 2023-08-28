import Image from 'next/image'
import Link from 'next/link'

import GithubIcon from '@/icons/github.svg'
import Linkedincon from '@/icons/linkedin.svg'

import HoverLink from '../../src/hoverLink'

const navbar = () => {
   return (
      <header className='bg-transparent text-white z-50'>
         <nav className='h-20 w-full fixed top-0 flex flex-wrap flex-row content-center justify-around z-50'>
            <section className='w-1/3 flex flex-wrap flex-row content-center justify-between text-xl z-50'>
               <HoverLink href='#home' linkText='Logó' />
               <HoverLink href='#about' linkText='Rólam' />
               <HoverLink href='#projects' linkText='Projektek' />
               <HoverLink href='/' linkText='Skillek' />
               <HoverLink href='/' linkText='Cert' />
            </section>
            <section className='w-24 flex flex-wrap flex-row justify-around content-center'>
               <Link className='self-center' target='_blank' href='https://www.linkedin.com/in/tamasnagy93'>
                  <Image className='' src={Linkedincon} alt='Linkedincon' width={40} height={40} />
               </Link>
               <Link className='self-center' target='_blank' href='https://github.com/nagytommy76'>
                  <Image src={GithubIcon} alt='Githubicon' width={40} height={40} />
               </Link>
            </section>
         </nav>
      </header>
   )
}

export default navbar
