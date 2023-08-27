import Link from 'next/link'
import Image from 'next/image'
import LinkButton from '@/src/LinkButton/LinkButton'

import GitHubIcon from '@/icons/github.svg'

const SingleProject: React.FC<{
   projectHref: string
   githubHref: string
   description: string
   isReverse?: boolean
}> = ({ projectHref, githubHref, description, isReverse = false }) => {
   return (
      <div className={`mt-24 flex ${isReverse ? 'flex-row-reverse' : ''}`}>
         <Link className='transition-all hover:scale-[105%]' href={projectHref} target='_blank'>
            <Image
               src='https://res.cloudinary.com/domsczfqu/image/upload/v1/nagytamas93/CompStoreMERN/welcome_cwzwvv'
               alt='ComputerStore webáruház'
               width={800}
               height={600}
            />
         </Link>
         <div className='ml-10 flex flex-col justify-between'>
            <h1 className='text-4xl tracking-widest'>Computer Store webáruház</h1>
            <p className='font-semibold'>{description}</p>
            <span className='h-28 flex flex-col justify-between'>
               <LinkButton displayText='Élő verzió' href={projectHref} />
               <LinkButton displayText='GitHub' href={githubHref} iconElement={GitHubIcon} />
            </span>
         </div>
      </div>
   )
}

export default SingleProject
