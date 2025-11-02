/* eslint-disable @next/next/no-img-element */
import MainText from '../includes/MainText'
import ProjectImage from '../SingleProject/ProjectImage'
import LinkButton from '@/src/LinkButton/LinkButton'

import GitHubIcon from '@/icons/github.svg'

const githubYears = [2025, 2024, 2023, 2022, 2021, 2020]

export default function page() {
   return (
      <section id='github' className='min-h-fit max-w-7xl mx-auto mb-16 pt-20 text-white'>
         <MainText text='GitHub' />
         <p className='text-base leading-8 text-center mt-10 sm:text-sm sm:mb-10 sm:leading-6'>
            Since mid-2020, I have been continuously improving myself by creating various pet projects.
         </p>
         <div className='mt-4 w-full flex flex-wrap justify-evenly gap-2'>
            {githubYears.map((year) => (
               <ProjectImage
                  key={year}
                  alt={`GitHub ${year}`}
                  folder='GitHub'
                  imageNames={[`${year}_github`]}
                  imageWidth={610}
                  imageHeight={190}
               />
            ))}
         </div>
         <div className='flex items-center justify-center justify-items-center mt-7 gap-2 sm:flex-col'>
            <img
               width='600px'
               src='https://github-readme-stats.vercel.app/api?username=nagytommy76&show_icons=true&theme=gruvbox&hide_border=true'
               alt='nagy-tamas'
            />
            <img
               width='600px'
               src='https://github-readme-streak-stats.herokuapp.com/?user=nagytommy76&include_all_commits=true&show_icons=true&count_private=true&locale=en&theme=gruvbox&hide_border=true&border_radius=5'
               alt='nagy-tamas'
            />
            <img
               width='400px'
               src='https://github-readme-stats.vercel.app/api/top-langs/?username=nagytommy76&layout=compact&langs_count=8&theme=gruvbox&hide_border=true&border_radius=5'
               alt='nagy-tamas'
            />
         </div>
         <div className='w-full flex items-center justify-center mt-10'>
            <LinkButton
               className='min-w-[400px]'
               displayText='Vitsit My GitHub Page'
               href='https://github.com/nagytommy76'
               iconElement={GitHubIcon}
            />
         </div>
      </section>
   )
}
