import MainText from '@/components/includes/MainText'
import Facebook from '@/components/Projects/Facebook'
import CompStore from '@/components/Projects/CompStore'
import Recipe from '@/components/Projects/Recipe'
import Meatball from '@/components/Projects/Meatball'

const Projects = () => {
   return (
      <section id='projects' className='min-h-screen max-w-6xl mx-auto mb-16 pt-20 text-white '>
         <MainText text='Projektek' />
         <Facebook />
         <CompStore />
         <Recipe />
         <Meatball />
      </section>
   )
}

export default Projects
