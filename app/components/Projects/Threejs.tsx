import Image from 'next/image'

import StackIcon from '@/src/StackIcon/StackIcon'
import MoreInfoBtn from '@/src/MoreInfo/MoreInfoBtn'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import TypeScript from '@/icons/typescript.svg'
import Tailwind from '@/icons/tailwindcss.svg'
import ReactIcon from '@/icons/react.svg'
import Blender from '@/icons/blender.png'
import ThreeIcon from '@/icons/ThreeJs.png'
import GSAP from '@/icons/gsap.jpg'

export default function Threejs() {
   return (
      <SingleProject
         headText='Blender and Three.js Porfolio'
         description="
         I've always wanted to dive into 3D programming, so I decided to make a portfolio using Blender and Three.js.
         The app is not published yet, but you can check out the code and run locally on GitHub.
         "
         githubHref='https://github.com/nagytommy76/threejs-portfolio'
         projectHref=''
         isUnderDev
         isUnderDevText='The app is not published yet'
         ProjectImageComponent={
            <ProjectImage
               folder='Three.js'
               imageNames={[
                  'PortfolioRender',
                  'threejs_room1',
                  'threejs_room2',
                  'threejs_room3',
                  'threejs_room4',
                  'threejs_room5',
               ]}
               alt='three.js project images'
            />
         }
         MoreInfoBtn={
            <MoreInfoBtn
               Features={
                  <>
                     <li>The Project is under development and it is in early beta stage.</li>
                     <li>Using Blender to create a personal room 3D model</li>
                     <li>Using Three.js to create a 3D scene</li>
                     <li>Using animation library: GSAP</li>
                  </>
               }
               TechStack={
                  <>
                     <StackIcon src={TypeScript} alt='TypeScript' displayText='TypeScript' />
                     <StackIcon src={ReactIcon} alt='ReactIcon' displayText='React.js' />
                     <StackIcon src={Tailwind} alt='Tailwind' displayText='TailwindCSS' />
                     <StackIcon src={Blender.src} alt='Blender' displayText='Blender' />
                     <StackIcon src={ThreeIcon.src} alt='Three.js' displayText='Three.js' />
                     <StackIcon src={GSAP.src} alt='GSAP' displayText='GSAP' />
                  </>
               }
               headText='Blender and Three.js Portfolio - Project Overview'
               embeddedLink='https://www.youtube.com/embed/yV4zU0I-Dc0?si=1onFSuhXZxVcxIPU'
               videoTitle='Blender and Three.js Portfolio Overview'
            />
         }
      >
         <>
            <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
            <Image className='mr-1' src={ReactIcon} alt='ReactIcon' width={40} height={40} />
            <Image className='mr-1' src={Tailwind} alt='TailwindCSS' width={40} height={40} />
            <Image className='mr-1' src={Blender.src} alt='Blender' width={40} height={40} />
            <Image className='mr-1' src={ThreeIcon.src} alt='Three.js' width={40} height={40} />
            <Image className='mr-1' src={GSAP.src} alt='GSAP' width={40} height={40} />
         </>
      </SingleProject>
   )
}
