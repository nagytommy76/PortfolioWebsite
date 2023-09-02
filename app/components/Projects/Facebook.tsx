import Image from 'next/image'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import NodeIcon from '@/icons/nodejs.svg'
import ExpressIcon from '@/icons/express.svg'
import MongoDBIcon from '@/icons/mongodb.svg'
import NextJsIcon from '@/icons/nextjs.svg'

const Facebook = () => {
   return (
      <SingleProject
         headText='Facebook clone app'
         description='Full stack (MERN) applikáció (MongoDB, Express.Js, React, Node.js, TypeScript).'
         githubHref='https://github.com/nagytommy76/FacebookClone'
         projectHref='#projects'
         isUnderDev
         ProjectImageComponent={
            <ProjectImage folder='CompStoreMERN' imageNames={['welcome_cwzwvv']} alt='Facebook clone image' />
         }
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
   )
}

export default Facebook
