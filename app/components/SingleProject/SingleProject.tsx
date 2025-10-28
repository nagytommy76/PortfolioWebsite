import LinkButton from '@/src/LinkButton/LinkButton'
import GitHubIcon from '@/icons/github.svg'

import Typography from '@mui/material/Typography'

const SingleProject: React.FC<{
   ProjectImageComponent: React.ReactNode
   projectHref: string
   githubHref: string
   description: string
   headText: string
   MoreInfoBtn?: React.ReactNode
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
   MoreInfoBtn,
   isReverse = false,
   isUnderDev = false,
   isUnderDevText = 'Fejlesztés alatt...',
   children,
}) => {
   return (
      <div
         className={`mt-32 w-full min-h-[370px] flex flex-wrap ${
            isReverse ? 'flex-row-reverse' : ''
         } justify-between sm:flex-col sm:mt-16`}
      >
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
         <div className={`w-1/3 flex flex-col justify-between sm:w-[95%] sm:mt-3 sm:mx-auto `}>
            <Typography variant='h3' className='text-5xl font-semibold tracking-normal sm:text-3xl sm:mb-3'>
               {headText}
            </Typography>
            <Typography
               variant='body1'
               className='font-normal sm:text-sm sm:mb-4 sm:font-normal sm:text-justify'
            >
               {description}
            </Typography>
            <div className='h-32 flex flex-col gap-2 justify-center sm:items-center'>
               {!isUnderDev ? (
                  <LinkButton displayText='Live demo' href={projectHref} />
               ) : (
                  <p className='text-xl sm:text-base'>{isUnderDevText}</p>
               )}
               <LinkButton displayText='GitHub' href={githubHref} iconElement={GitHubIcon} />
               {MoreInfoBtn}
            </div>
         </div>
      </div>
   )
}

export default SingleProject
