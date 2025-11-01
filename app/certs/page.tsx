import ProjectImage from '../components/SingleProject/ProjectImage'

import MainText from '../components/includes/MainText'

const Certificates = () => {
   return (
      <section id='certificates' className='min-h-fit max-w-6xl mx-auto mb-16 pt-20 text-white '>
         <MainText text='Certificates' />
         <div className='mt-14 w-full flex flex-wrap justify-evenly items-center'>
            <div className='cursor-pointer transition-all hover:scale-[98%] sm:mb-5'>
               <ProjectImage
                  alt='React országos megmérettetés'
                  folder='certificates'
                  imageNames={['ReactCertENG_gjbhsf']}
                  imageWidth={355}
                  imageHeight={600}
               />
            </div>
            <div className='cursor-pointer transition-all hover:scale-[98%] sm:mb-5'>
               <ProjectImage
                  alt='Nagy nyelvi modellek használata (ChatGPT...) Országos IT megmérettetés'
                  folder='certificates'
                  imageNames={['OITM_Nagy_nyelvi_modellek_használata_OKLEVÉL_2023_fsoleb']}
                  imageWidth={355}
                  imageHeight={600}
               />
            </div>
            <div className='cursor-pointer transition-all hover:scale-[98%] sm:mb-5'>
               <ProjectImage
                  alt='Frontend Fejlesztés Országos IT megmérettetés'
                  folder='certificates'
                  imageNames={['OITM_Front-end_fejlesztés_ENG_2023_yaxi39']}
                  imageWidth={355}
                  imageHeight={600}
               />
            </div>
         </div>
      </section>
   )
}

export default Certificates
