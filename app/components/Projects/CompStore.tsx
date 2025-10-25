import Image from 'next/image'

import StackIcon from '@/src/StackIcon/StackIcon'
import MoreInfoBtn from '@/src/MoreInfo/MoreInfoBtn'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import NodeIcon from '@/icons/nodejs.svg'
import ExpressIcon from '@/icons/express.svg'
import MongoDBIcon from '@/icons/mongodb.svg'
import Docker from '@/icons/docker.svg'
import Jest from '@/icons/Jest.png'
import Material from '@/icons/material.png'

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
         MoreInfoBtn={
            <MoreInfoBtn
               Features={
                  <>
                     <li>Registration, login, and secure JWT cookie-based sessions.</li>
                     <li>Email verification after registration.</li>
                     <li>Password reminder via email.</li>
                     <li>Product listing and detail views.</li>
                     <li>roduct search and category filters (for example: filter by CPU socket)</li>
                     <li>Add, remove, and update cart items.</li>
                     <li>Order summary and mock payment with Stripe.</li>
                     <li>Admin dashboard for managing products and orders</li>
                     <li>Emails sent after registration, password reset, and successful order.</li>
                     <li>Templated emails using Handlebars and sent through Resend.</li>
                     <li>Unit and integration tests with React Testing Library and Jest.</li>
                  </>
               }
               TechStack={
                  <>
                     <StackIcon src={TypeScript} alt='TypeScript' displayText='TypeScript' />
                     <StackIcon src={ReactIcon} alt='ReactIcon' displayText='React.js' />
                     <StackIcon src={NodeIcon} alt='NodeIcon' displayText='Node.js' />
                     <StackIcon src={ExpressIcon} alt='ExpressIcon' displayText='Express.js' />
                     <StackIcon src={MongoDBIcon} alt='MongoDBIcon' displayText='MongoDB' />
                     <StackIcon src={Docker} alt='Docker' displayText='Docker' />
                     <StackIcon src={Material.src} alt='Material' displayText='Material UI' />
                     <StackIcon src={Jest.src} alt='Jest' displayText='Jest' />
                  </>
               }
               headText='Computer Store webshop'
               embeddedLink='https://www.youtube.com/embed/jFU0n80CqDA?si=d0S-JmWISGy1VuXZ'
               videoTitle='Computer Store Webshop - Full Stack Project Overview'
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
