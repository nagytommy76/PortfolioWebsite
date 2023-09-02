import LinkButton from '@/src/LinkButton/LinkButton'
import GitHubIcon from '@/icons/github.svg'

const SingleProject: React.FC<{
   ProjectImageComponent: React.ReactNode
   projectHref: string
   githubHref: string
   description: string
   headText: string
   isReverse?: boolean
   children?: React.ReactNode
   isUnderDev?: boolean
   isUnderDevText?: string
}> = ({
   ProjectImageComponent,
   projectHref,
   githubHref,
   description,
   headText,
   isReverse = false,
   isUnderDev = false,
   isUnderDevText = 'Fejlesztés alatt...',
   children,
}) => {
   return (
      <div className={`mt-24 w-full flex flex-wrap ${isReverse ? 'flex-row-reverse' : ''} justify-between`}>
         <div className='relative w-auto cursor-pointer transition-all hover:scale-[98%]'>
            {ProjectImageComponent}
            {children && (
               <div
                  className='
                     px-3 min-w-[100px] h-12 flex flex-wrap items-center absolute bottom-0 right-0 bg-slate-700 bg-opacity-90
               '
               >
                  {children}
               </div>
            )}
         </div>
         <div className={`w-1/3 flex flex-col justify-between`}>
            <h1 className='text-5xl tracking-wide'>{headText}</h1>
            <p className='font-semibold'>{description}</p>
            <span className='h-24 flex flex-col justify-between'>
               {!isUnderDev ? (
                  <LinkButton displayText='Élő verzió' href={projectHref} />
               ) : (
                  <p className='text-2xl'>{isUnderDevText}</p>
               )}
               <LinkButton displayText='GitHub' href={githubHref} iconElement={GitHubIcon} />
            </span>
         </div>
      </div>
   )
}

export default SingleProject
