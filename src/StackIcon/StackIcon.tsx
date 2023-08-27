import Image from 'next/image'

const StackIcon: React.FC<{ src: string; alt: string; displayText: string }> = ({
   src,
   alt,
   displayText,
}) => {
   return (
      <div className='w-28 h-28 flex flex-col flex-wrap justify-evenly content-center items-center text-center'>
         <Image alt={alt} src={src} width={70} height={70} />
         <p className='text-sm uppercase font-semibold'>{displayText}</p>
      </div>
   )
}

export default StackIcon
