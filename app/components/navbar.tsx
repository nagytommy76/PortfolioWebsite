import Image from 'next/image'
import Link from 'next/link'

import GithubIcon from '@/icons/github.svg'
import Linkedincon from '@/icons/linkedin.svg'

const navbar = () => {
   return (
      <header className='bg-gray-200 '>
         <nav className='h-20 w-full flex flex-wrap flex-row content-center justify-around'>
            <section className='w-1/3 flex flex-wrap flex-row content-center justify-between text-xl'>
               <Link href='/'>LOGÓ</Link>
               <Link href='/'>Rólam</Link>
               <Link href='/'>Projektek</Link>
               <Link href='/'>Skillek</Link>
               <Link href='/'>Cert-ek</Link>
            </section>
            <section className='w-24 flex flex-wrap flex-row justify-around content-center'>
               <Link className='self-center' target='_blank' href='https://www.linkedin.com/in/tamasnagy93'>
                  <Image src={Linkedincon} alt='Linkedincon' width={40} height={40} />
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
