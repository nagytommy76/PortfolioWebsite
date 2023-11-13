import StackIcon from '@/src/StackIcon/StackIcon'

import CSS3 from '@/icons/css3.svg'
import HTML5 from '@/icons/html5.svg'
import JavaScript from '@/icons/javascript.svg'
import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import NodeJs from '@/icons/nodejs.svg'
import ExpressJs from '@/icons/express.svg'
import MongoDB from '@/icons/mongodb.svg'
import SASS from '@/icons/sass.svg'
import TailwindCSS from '@/icons/tailwindcss.svg'
import GIT from '@/icons/git.svg'
import Docker from '@/icons/docker.svg'
import Next2 from '@/icons/next.svg'

const TechIcons = () => {
   return (
      <div className='w-2/4 h-3/5 pl-10 flex flex-wrap flex-row justify-between sm:w-[95%] sm:pl-0 sm:mt-9'>
         <div className='flex flex-wrap flex-col justify-evenly'>
            <StackIcon alt='CSS3' displayText='CSS3' src={CSS3} />
            <StackIcon alt='HTML5' displayText='HTML5' src={HTML5} />
            <StackIcon alt='SASS' displayText='SASS' src={SASS} />
            <StackIcon alt='NodeJs' displayText='TailwindCSS' src={TailwindCSS} />
         </div>
         <div className='flex flex-wrap flex-col justify-evenly'>
            <StackIcon alt='JavaScript' displayText='JavaScript' src={JavaScript} />
            <StackIcon alt='TypeScript' displayText='TypeScript' src={TypeScript} />
            <StackIcon alt='React' displayText='React' src={ReactIcon} />
            <StackIcon alt='NextJs' displayText='Next.js' src={Next2} />
            <StackIcon alt='NodeJs' displayText='Node.js' src={NodeJs} />
         </div>
         <div className='flex flex-wrap flex-col justify-evenly'>
            <StackIcon alt='ExpressJs' displayText='Express.js' src={ExpressJs} />
            <StackIcon alt='MongoDB' displayText='MongoDB' src={MongoDB} />
            <StackIcon alt='GIT' displayText='GIT' src={GIT} />
            <StackIcon alt='Docker' displayText='Docker' src={Docker} />
         </div>
      </div>
   )
}

export default TechIcons
