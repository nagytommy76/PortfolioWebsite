import React from 'react'

const MainText: React.FC<{ text: string }> = ({ text }) => {
   return (
      <div className='max-w-fit px-6 mx-auto relative'>
         <h1 className='text-6xl font-semibold z-10 relative sm:text-4xl'>{text}</h1>
         <span className='h-5 bg-amber-600 w-3/4 absolute right-0 bottom-0 z-0 sm:h-4'></span>
      </div>
   )
}

export default MainText
