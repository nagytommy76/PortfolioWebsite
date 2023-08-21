import Image from 'next/image'
import MeImage from '@/assets/me_modified_final.jpg'

import ResumeButton from '@/src/resumeButton'

const about = () => {
   return (
      <section
         id='about'
         className="text-slate-50 h-full bg-hero bg-no-repeat bg-cover bg-center bg-[url('../assets/background1.jpg')]"
      >
         <div className='flex h-4/5 w-full flex-row flex-wrap content-center justify-center'>
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
            <div className='w-2/5'>
               <p className='ml-5 text-xl leading-10 text-justify'>
                  Jelenlegi tudásom nagy részét autodidakta módon, Udemy kurzusok segítségével, valamint hobby
                  projectek elkészítésével szereztem. Körülbelül 2 éve foglalkozom rendszeresen programozással
                  szabadidőmben. Kezdőként Forntend (React) területen szeretnék elhelyezkedni, illetve
                  bővíteni tudásomat, de Fullstack lehetőségek is érdekelnek (MERN stack). A jövőt tekintve
                  szeretném mélyíteni a tudásom Node.js-ben (Express.js) és MongoDB-ben, valamint szeretnék
                  megismerkedni a mobilfejlesztéssel is (ReactNative vagy Flutter). Az angol tudásom
                  szövegértésben, olvasásban jó, de a kommunikációban fejlődnöm kell.
               </p>
               <ResumeButton />
            </div>
         </div>
      </section>
   )
}

export default about
