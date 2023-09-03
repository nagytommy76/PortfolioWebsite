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
         <MainText text='Rólam' />
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
                  alt='Nagy Tamás Képe'
               />
               <p className='text-xl leading-8 text-left mb-5 sm:text-sm sm:mb-10 sm:leading-6'>
                  Jelenlegi tudásom nagy részét autodidakta módon, Udemy kurzusok segítségével, valamint hobby
                  projectek elkészítésével szereztem. Körülbelül 2 éve foglalkozom rendszeresen programozással
                  szabadidőmben. Kezdőként Forntend (React) területen szeretnék elhelyezkedni, illetve
                  bővíteni tudásomat, de Fullstack lehetőségek is érdekelnek (MERN stack). A jövőt tekintve
                  szeretném mélyíteni a tudásom Node.js-ben (Express.js) és MongoDB-ben, valamint szeretnék
                  megismerkedni a mobilfejlesztéssel is (ReactNative vagy Flutter). Az angol tudásom
                  szövegértésben, olvasásban jó, de a kommunikációban fejlődnöm kell.
               </p>
               <div className='h-20'>
                  <DefaultButton
                     isBlank={true}
                     href='https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing'
                     text='Önéletrajz'
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
