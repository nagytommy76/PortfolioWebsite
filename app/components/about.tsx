import Image from 'next/image'
import MeImage from '@/assets/me_modified_final.jpg'

import TechIcons from './includes/TechIcons'
import DefaultButton from '@/src/ResumeButton/DefaultButton'

const about = () => {
   return (
      <section id='about' className='pt-20 h-screen text-slate-50 bg-hero bg-no-repeat bg-cover bg-center'>
         <div className='w-48 mx-auto relative'>
            <h1 className='text-6xl z-10 relative'>Rólam</h1>
            <span className='h-5 bg-amber-600 w-40 absolute right-0 bottom-0 z-0'></span>
         </div>
         <div className='max-w-6xl mx-auto h-4/5 flex flex-row flex-wrap content-center items-center justify-center'>
            <div className='w-2/4 flex flex-wrap justify-center pr-10'>
               <Image
                  className='rounded-full bg-cover w-64 h-64 mb-10'
                  src={MeImage}
                  height={250}
                  width={250}
                  alt='Nagy Tamás Képe'
               />
               <p className='text-xl leading-8 text-left mb-5'>
                  Jelenlegi tudásom nagy részét autodidakta módon, Udemy kurzusok segítségével, valamint hobby
                  projectek elkészítésével szereztem. Körülbelül 2 éve foglalkozom rendszeresen programozással
                  szabadidőmben. Kezdőként Forntend (React) területen szeretnék elhelyezkedni, illetve
                  bővíteni tudásomat, de Fullstack lehetőségek is érdekelnek (MERN stack). A jövőt tekintve
                  szeretném mélyíteni a tudásom Node.js-ben (Express.js) és MongoDB-ben, valamint szeretnék
                  megismerkedni a mobilfejlesztéssel is (ReactNative vagy Flutter). Az angol tudásom
                  szövegértésben, olvasásban jó, de a kommunikációban fejlődnöm kell.
               </p>
               <DefaultButton
                  isBlank={true}
                  href='https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing'
                  text='Önéletrajz'
               />
            </div>
            <TechIcons />
         </div>
      </section>
   )
}

export default about
// https://codepen.io/LeonGr/pen/eYoZJB
