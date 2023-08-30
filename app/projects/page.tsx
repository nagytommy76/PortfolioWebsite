import Image from 'next/image'
import MainText from '../components/includes/MainText'
import SingleProject from '../components/SingleProject/SingleProject'

import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import NodeIcon from '@/icons/nodejs.svg'
import ExpressIcon from '@/icons/express.svg'
import MongoDBIcon from '@/icons/mongodb.svg'
import NextJsIcon from '@/icons/nextjs.svg'

const Projects = () => {
   return (
      <section id='projects' className='min-h-screen max-w-6xl mx-auto mb-16 pt-20 text-white'>
         <MainText text='Projektek' />
         <SingleProject
            headText='Facebook clone app'
            description='Full stack (MERN) applikáció (MongoDB, Express.Js, React, Node.js, TypeScript).'
            imageLink='https://res.cloudinary.com/domsczfqu/image/upload/v1/nagytamas93/CompStoreMERN/welcome_cwzwvv'
            githubHref='https://github.com/nagytommy76/FacebookClone'
            projectHref='#projects'
            isUnderDev
         >
            <>
               <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
               <Image className='mr-1' src={ReactIcon} alt='ReactIcon' width={40} height={40} />
               <Image className='mr-1' src={NextJsIcon} alt='NextJsIcon' width={40} height={40} />
               <Image className='mr-1' src={NodeIcon} alt='NodeIcon' width={40} height={40} />
               <Image className='mr-1' src={ExpressIcon} alt='ExpressIcon' width={40} height={40} />
               <Image src={MongoDBIcon} alt='MongoDBIcon' width={40} height={40} />
            </>
         </SingleProject>
         <SingleProject
            headText='Computer Store webáruház'
            description='Full stack (MERN) applikáció (MongoDB, Express.Js, React, Node.js, TypeScript).'
            imageLink='https://res.cloudinary.com/domsczfqu/image/upload/v1/nagytamas93/CompStoreMERN/welcome_cwzwvv'
            githubHref='https://github.com/nagytommy76/ComputerStoreMERN'
            projectHref='https://computerstorebackend.firebaseapp.com/'
            isReverse
         >
            <>
               <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
               <Image className='mr-1' src={ReactIcon} alt='ReactIcon' width={40} height={40} />
               <Image className='mr-1' src={NodeIcon} alt='NodeIcon' width={40} height={40} />
               <Image className='mr-1' src={ExpressIcon} alt='ExpressIcon' width={40} height={40} />
               <Image src={MongoDBIcon} alt='MongoDBIcon' width={40} height={40} />
            </>
         </SingleProject>
         <SingleProject
            headText='Recept kereső'
            description='Recepteket, videókat illetve menüket (MCDonalds, Burger King) tudunk keresni név, illetve hosszávalók alapján.'
            imageLink='https://res.cloudinary.com/domsczfqu/image/upload/v1/nagytamas93/React%20Recipe/React_Recipe_Finder_WelcomePage1_lvecwz'
            githubHref='https://github.com/nagytommy76/ReactRecipeFinder'
            projectHref='https://react-recipe-finder.web.app/'
         >
            <>
               <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
               <Image src={ReactIcon} alt='ReactIcon' width={40} height={40} />
            </>
         </SingleProject>
      </section>
   )
}

export default Projects
