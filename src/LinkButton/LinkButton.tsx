import Link from 'next/link'
import Image from 'next/image'

const LinkButton: React.FC<{ displayText: string; href: string; iconElement?: any }> = ({
   displayText,
   href,
   iconElement,
}) => {
   return (
      <Link
         target='_blank'
         href={href}
         className='
            transition-all w-fit cursor-pointer text-lg font-semibold tracking-[5px] pt-1 pb-2 uppercase relative flex flex-wrap flex-col justify-center
            after:absolute after:content-[""] after:bg-amber-500 after:h-[2px] after:w-full after:bottom-1 after:block after:-z-[1]
            after:transition-all hover:after:h-full hover:text-black
            sm:text-sm
            '
      >
         <p className='flex flex-row flex-wrap items-center content-center justify-center'>
            {displayText}
            {iconElement && (
               <Image
                  className='ml-3 sepia-0 invert-[100%] saturate-[600%] brightness-95 contrast-75'
                  src={iconElement}
                  alt='Icon'
                  width={30}
                  height={30}
               />
            )}
         </p>
      </Link>
   )
}

export default LinkButton
