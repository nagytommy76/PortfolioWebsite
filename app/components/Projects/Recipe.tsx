import Image from 'next/image'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import TypeScript from '@/icons/typescript.svg'
import ReactIcon from '@/icons/react.svg'

const Recipe = () => {
   return (
      <SingleProject
         headText='Recept kereső'
         description='Recepteket, videókat illetve menüket (MCDonalds, Burger King) tudunk keresni név, illetve hosszávalók alapján.'
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
      >
         <>
            <Image className='mr-1' src={TypeScript} alt='TypeScript' width={40} height={40} />
            <Image src={ReactIcon} alt='ReactIcon' width={40} height={40} />
         </>
      </SingleProject>
   )
}

export default Recipe
