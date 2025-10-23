import Image from 'next/image'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import NodeIcon from '@/icons/nodejs.svg'
import ExpressIcon from '@/icons/express.svg'
import MongoDBIcon from '@/icons/mongodb.svg'

const CompStore = () => {
   return (
      <SingleProject
         headText='Computer Store webáruház'
         description='
         Full stack (MERN) applikáció (MongoDB, Express.Js, React, Node.js, TypeScript).
         A felhasználók a regisztráció és email cím megerősítése után bejelentkezhetnek, majd vásárolhatnak különböző termékeket (pl. CPU, VGA, HDD, SSD, RAM).
         '
         githubHref='https://github.com/nagytommy76/ComputerStoreMERN'
         projectHref='https://computer-store-frontend-phi.vercel.app/'
         isReverse
         ProjectImageComponent={
            <ProjectImage
               folder='CompStoreMERN'
               imageNames={[
                  'welcome_cwzwvv',
                  'cpu_ll1tf7',
                  'vga_kxxyxh',
                  'Details_jfyguo',
                  'cart_bi5zvy',
                  'OrderSummary_gx3nwo',
                  'checkout_tco1nl',
                  'email_lfrjji',
               ]}
               alt='Computer Store image'
            />
         }
      >
         <>
            <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
            <Image className='mr-1' src={ReactIcon} alt='ReactIcon' width={40} height={40} />
            <Image className='mr-1' src={NodeIcon} alt='NodeIcon' width={40} height={40} />
            <Image className='mr-1' src={ExpressIcon} alt='ExpressIcon' width={40} height={40} />
            <Image src={MongoDBIcon} alt='MongoDBIcon' width={40} height={40} />
         </>
      </SingleProject>
   )
}

export default CompStore
