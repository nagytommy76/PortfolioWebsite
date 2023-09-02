import Image from 'next/image'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import VUE from '@/icons/vue.svg'
import Laravel from '@/icons/laravel.svg'
import MySql from '@/icons/mysql.svg'
import SASS from '@/icons/sass.svg'

const Meatball = () => {
   return (
      <SingleProject
         headText='Húsgolyó Étterem'
         description='
            Full stack applikáció (Laravel, MySQL, PHP, Vue.js, SCSS).
            A weboldal egy kitalált étterem honlapja, ahol lehetőség van ételeket rendelni.
            '
         githubHref='https://github.com/nagytommy76/MeatBallProject'
         projectHref=''
         isUnderDev
         isUnderDevText='Az app átmenetileg nem elérhető'
         isReverse
         ProjectImageComponent={
            <ProjectImage
               folder='Meatball'
               imageNames={[
                  'meatball-main-page_z2gqjt',
                  'pizza_wp57mc',
                  'pasta_u1gsqz',
                  'meal_lpqmay',
                  'cart_s1dxdy',
                  'paypal_ir1kue',
                  'input-admin_rcjs2y',
                  'modify_f1ybut',
               ]}
               alt='Meatball project image'
            />
         }
      >
         <>
            <Image className='mr-1' src={VUE} alt='VUE.js' width={40} height={40} />
            <Image className='mr-1' src={Laravel} alt='ReactIcon' width={40} height={40} />
            <Image className='mr-1' src={MySql} alt='MySql' width={40} height={40} />
            <Image src={SASS} alt='SASS' width={40} height={40} />
         </>
      </SingleProject>
   )
}

export default Meatball
