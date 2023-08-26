import Image from 'next/image'
import MeImage from '@/assets/me_modified_final.jpg'

import DefaultButton from '@/src/ResumeButton/DefaultButton'

const about = () => {
   return (
      <section
         id='about'
         className="text-slate-50 h-full bg-hero bg-no-repeat bg-cover bg-center bg-[url('../assets/background1.jpg')]"
      >
         <div className='flex flex-wrap flex-row h-full w-full justify-center content-center m-auto max-w-6xl'>
            <div className='flex flex-col'>
               <h1 className='text-7xl '>Nagy Tamás</h1>
               <h1 className=' text-5xl'>Frontend Fejlesztő</h1>
               <Image
                  className='rounded-full bg-cover w-64 h-64'
                  src={MeImage}
                  height={250}
                  width={250}
                  alt='Nagy Tamás Képe'
               />
            </div>
            <div className='w-1/2 h-1/2 ml-5 flex flex-col flex-wrap items-center'>
               <p className='text-xl leading-10 text-justify'>
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
         </div>
      </section>
   )
}

export default about
// https://codepen.io/LeonGr/pen/eYoZJB
