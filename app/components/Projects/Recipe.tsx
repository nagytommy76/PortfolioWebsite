import Image from 'next/image'

import MoreInfoBtn from '@/src/MoreInfo/MoreInfoBtn'
import StackIcon from '@/src/StackIcon/StackIcon'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'
import Redux from '@/icons/redux.png'

const Recipe = () => {
   return (
      <SingleProject
         isReverse
         headText='Recipe Finder'
         description='Recipe & nutrition explorer — search recipes, videos and fast-food menu items (calories & nutrients) using the Spoonacular API.'
         githubHref='https://github.com/nagytommy76/ReactRecipeFinder'
         projectHref='https://react-recipe-finder.web.app/'
         ProjectImageComponent={
            <ProjectImage
               folder='React%20Recipe'
               imageNames={[
                  'React_Recipe_Finder_WelcomePage1_lvecwz',
                  'React_Recipe_Finder_fvspcp',
                  'React_Recipe_Finder_menuItems_n0zzc9',
                  'React_Recipe_Finder_videos_qrclha',
                  'React_Recipe_Finder_details_jci5zy',
               ]}
               alt='React Recipe finder image'
            />
         }
         MoreInfoBtn={
            <MoreInfoBtn
               Features={
                  <>
                     <li>
                        Detailed nutrition panel per recipe: calories, macros (protein/carbs/fat) and key
                        micronutrients.
                     </li>
                     <li>Search recipes by name or by a list of ingredients</li>
                     <li>
                        Fast-food menu lookup: query chain menu items (e.g., McDonald’s) and display per-item
                        calorie & nutrient info.
                     </li>
                     <li>Using Spoonacular API</li>
                  </>
               }
               TechStack={
                  <>
                     <StackIcon src={TypeScript} alt='TypeScript' displayText='TypeScript' />
                     <StackIcon src={ReactIcon} alt='ReactIcon' displayText='React.js' />
                     <StackIcon src={Redux.src} alt='Redux' displayText='Redux' />
                  </>
               }
               headText='Recipe Finder - Project Overview'
               embeddedLink='https://www.youtube.com/embed/Le4iZpUPirQ?si=pWvMCoFwy3trfSwE'
               videoTitle='Recipe Finder - Project Overview'
            />
         }
      >
         <>
            <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
            <Image src={ReactIcon} alt='ReactIcon' width={40} height={40} />
         </>
      </SingleProject>
   )
}

export default Recipe
