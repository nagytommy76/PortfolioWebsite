import Image from 'next/image'

import StackIcon from '@/src/StackIcon/StackIcon'
import MoreInfoBtn from '@/src/MoreInfo/MoreInfoBtn'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import NodeIcon from '@/icons/nodejs.svg'
import ExpressIcon from '@/icons/express.svg'
import MongoDBIcon from '@/icons/mongodb.svg'
import NextJsIcon from '@/icons/nextjs.svg'
import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import NodeJs from '@/icons/nodejs.svg'
import ExpressJs from '@/icons/express.svg'
import MongoDB from '@/icons/mongodb.svg'
import Next2 from '@/icons/next.svg'
import Firebase from '@/icons/firebase.png'
import Redis from '@/icons/redis.png'
import Socket from '@/icons/socket.io.png'
import Material from '@/icons/material.png'

const Facebook = () => {
   return (
      <SingleProject
         headText='Facebook clone'
         description='
            Users can create posts, comment on them, reply to comments, and use reaction buttons to interact.
            Real-time chat and notifiactions are also implemented using WebSockets (Socket.IO).
            '
         githubHref='https://github.com/nagytommy76/FacebookClone'
         projectHref='https://facebookclone-production-8185.up.railway.app/'
         ProjectImageComponent={
            <ProjectImage
               folder='FacebookClone'
               imageNames={[
                  'Post_1_2023.11.13_nqe8wb',
                  'Post2_2023.11.13_cjh3x4',
                  'Comments_2022.11.13_voqhdn',
                  'Delete_2023.11.13_ldnpxx',
               ]}
               alt='Facebook clone image'
            />
         }
         MoreInfoBtn={
            <MoreInfoBtn
               Features={
                  <>
                     <li>Login / Register with JWT authentication (secure cookies)</li>
                     <li>Add / remove friends</li>
                     <li>Create posts with images</li>
                     <li>React to posts (like, funny, angry, dislike etc...)</li>
                     <li>Comment on posts and reply infinitely</li>
                     <li>Like / dislike comments</li>
                     <li>Edit or delete your posts and comments</li>
                     <li>Real-time Notifications for post interactions and comments</li>
                     <li>Real-time chat between users using WebSockets (Socket.io)</li>
                     <li>User presence tracking (last seen, online status) with Redis cache</li>
                  </>
               }
               TechStack={
                  <>
                     <StackIcon src={ReactIcon} alt='React' displayText='React' />
                     <StackIcon src={Next2} alt='Next.js' displayText='Next.js' />
                     <StackIcon src={TypeScript} alt='TypeScript' displayText='TypeScript' />
                     <StackIcon src={Material.src} alt='Material' displayText='Material UI' />
                     <StackIcon src={Firebase.src} alt='Firebase' displayText='Firebase' />
                     <StackIcon src={NodeJs} alt='NodeJs' displayText='Node.Js' />
                     <StackIcon src={ExpressJs} alt='Express.js' displayText='Express.js' />
                     <StackIcon src={MongoDB} alt='MongoDB' displayText='MongoDB' />
                     <StackIcon src={Redis.src} alt='Redis' displayText='Redis cache' />
                     <StackIcon src={Socket.src} alt='Socket' displayText='Socket.IO' />
                  </>
               }
               headText={'Facebook clone'}
               embeddedLink={'https://www.youtube.com/embed/jFU0n80CqDA?si=d0S-JmWISGy1VuXZ'}
               videoTitle={'Facebook Clone - Full Stack Project Overview'}
            />
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
