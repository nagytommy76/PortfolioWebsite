import MainText from '../includes/MainText'
import ProjectImage from '../SingleProject/ProjectImage'

export default function page() {
   return (
      <section id='github' className='min-h-fit max-w-6xl mx-auto mb-16 pt-20 text-white'>
         <MainText text='GitHub' />
         <p className='text-base leading-8 text-center mt-10 sm:text-sm sm:mb-10 sm:leading-6'>
            2020 Közepe óta folyamatosan fejlesztem magam különböző pet projektek elkészítésével.
         </p>
         <div className='mt-4 w-full flex flex-wrap justify-evenly items-center gap-4'>
            <div className='cursor-pointer'>
               <ProjectImage
                  alt='GitHub 2020'
                  folder='GitHub'
                  imageNames={['uhxv8vwaid0lre1twx8e']}
                  imageWidth={810}
                  imageHeight={190}
               />
            </div>
            <div className='cursor-pointer'>
               <ProjectImage
                  alt='GitHub 2021'
                  folder='GitHub'
                  imageNames={['vzzixypzte89rvw6wqh2']}
                  imageWidth={810}
                  imageHeight={190}
               />
            </div>
            <div className='cursor-pointer'>
               <ProjectImage
                  alt='GitHub 2022'
                  folder='GitHub'
                  imageNames={['v3z8x1qihzlcckphkn7o']}
                  imageWidth={810}
                  imageHeight={190}
               />
            </div>
            <div className='cursor-pointer'>
               <ProjectImage
                  alt='GitHub 2023'
                  folder='GitHub'
                  imageNames={['l5uuiamt6r1t7qmi6xpl']}
                  imageWidth={810}
                  imageHeight={190}
               />
            </div>
            <div className='cursor-pointer'>
               <ProjectImage
                  alt='GitHub 2024'
                  folder='GitHub'
                  imageNames={['m0ohhj3epwtbfmkuq1ms']}
                  imageWidth={810}
                  imageHeight={190}
               />
            </div>
         </div>
      </section>
   )
}
