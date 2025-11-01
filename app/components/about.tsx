import Image from 'next/image'
import MeImage from '@/assets/me_modified_final.jpg'

import TechIcons from './includes/TechIcons'
import DefaultButton from '@/src/ResumeButton/DefaultButton'
import MainText from './includes/MainText'

const about = () => {
   return (
      <section
         id='about'
         className='pt-20 md:h-screen text-slate-50 bg-hero bg-no-repeat bg-cover bg-center sm:min-h-screen sm:pt-6'
      >
         <MainText text='About Me' />
         <div
            className='
            max-w-6xl mx-auto h-4/5 flex flex-row flex-wrap content-center items-center justify-center
            sm:h-full sm:w-full
            '
         >
            <div className='w-2/4 flex flex-wrap justify-center pr-10 sm:pr-0 sm:content-center sm:w-[85%]'>
               <Image
                  className='rounded-full object-cover object-top w-64 h-64 mb-10 sm:w-44 sm:h-44 sm:mt-10'
                  src={MeImage}
                  height={250}
                  width={250}
                  alt='Nagy Tamás picture'
               />
               <p className='text-xl leading-8 text-left mb-5 sm:text-sm sm:mb-10 sm:leading-6'>
                  I’m a self-taught frontend developer who learns by building — since 2020 I’ve been coding
                  almost every day and I keep a steady rhythm of ~800–900 commits a year. I specialize in
                  JavaScript and TypeScript, and I build full-stack projects with React, Next.js, Node.js and
                  Mongo/Mongoose. <br /> I am actively seeking to advance my career within the frontend
                  development industry. <br /> I am eager to apply my skills to tackle challenging projects
                  and advance my professional growth. <br />
                  I&apos;m interested in learning new technologies and continuously improving my skills to
                  become a better developer.
               </p>
               <div className='h-20'>
                  <DefaultButton
                     isBlank={true}
                     href='https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing'
                     text='CV'
                  />
               </div>
            </div>
            <TechIcons />
         </div>
      </section>
   )
}

export default about
// https://codepen.io/LeonGr/pen/eYoZJB
