import Link from 'next/link'
import Image from 'next/image'

export const LinkButtonClass = `
   transition-all duration-[380ms] min-w-[100px] max-w-[180px] cursor-pointer text-lg font-semibold tracking-[5px] pt-1 pb-2 
   uppercase relative flex flex-wrap flex-col justify-center
   after:absolute after:content-[""] after:bg-main-text after:h-[2px] after:w-full after:bottom-1 after:block after:-z-[1]
   after:transition-all hover:after:h-full hover:text-black
   sm:text-sm
`

const LinkButton: React.FC<{ displayText: string; href: string; iconElement?: any }> = ({
   displayText,
   href,
   iconElement,
}) => {
   return (
      <Link target='_blank' href={href} className={LinkButtonClass}>
         <p className='w-full flex flex-row flex-wrap items-center content-center justify-center'>
            {displayText}
            {iconElement && (
               <Image
                  className='ml-3 sepia-0 invert-[100%] saturate-[600%] brightness-95 contrast-75'
                  src={iconElement}
                  alt='Icon'
                  width={25}
                  height={25}
               />
            )}
         </p>
      </Link>
   )
}

export default LinkButton
