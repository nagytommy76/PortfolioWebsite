import Link from 'next/link'
import Image from 'next/image'
import LinkButton from '@/src/LinkButton/LinkButton'

import GitHubIcon from '@/icons/github.svg'

const SingleProject: React.FC<{
   projectHref: string
   githubHref: string
   description: string
   headText: string
   imageLink: string
   isReverse?: boolean
   children?: React.ReactNode
   isUnderDev?: boolean
}> = ({
   projectHref,
   githubHref,
   description,
   headText,
   imageLink,
   isReverse = false,
   isUnderDev = false,
   children,
}) => {
   return (
      <div className={`mt-24 w-full flex flex-wrap ${isReverse ? 'flex-row-reverse' : ''} justify-between`}>
         <Link
            className='relative w-auto transition-all hover:scale-[98%]'
            href={projectHref}
            target='_blank'
         >
            <Image src={imageLink} alt='ComputerStore webáruház' width={700} height={600} />
            {children && (
               <div className='px-3 min-w-[100px] h-12 flex flex-wrap items-center absolute bottom-0 right-0 bg-slate-600 bg-opacity-80'>
                  {children}
               </div>
            )}
         </Link>
         <div className={`w-1/3 flex flex-col justify-between`}>
            <h1 className='text-5xl tracking-wide'>{headText}</h1>
            <p className='font-semibold'>{description}</p>
            <span className='h-28 flex flex-col justify-between'>
               {!isUnderDev && <LinkButton displayText='Élő verzió' href={projectHref} />}
               <LinkButton displayText='GitHub' href={githubHref} iconElement={GitHubIcon} />
            </span>
         </div>
      </div>
   )
}

export default SingleProject
