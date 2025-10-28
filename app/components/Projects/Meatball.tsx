import Image from 'next/image'
import SingleProject from '@/components/SingleProject/SingleProject'
import ProjectImage from '@/components/SingleProject/ProjectImage'

import VUE from '@/icons/vue.svg'
import Laravel from '@/icons/laravel.svg'
import MySql from '@/icons/mysql.svg'
import SASS from '@/icons/sass.svg'
import PHP from '@/icons/php.png'

const Meatball = () => {
   return (
      <SingleProject
         headText='Meatball Restaurant'
         description='
            Full stack web applcation (Laravel, MySQL, PHP, Vue.js, SCSS).
            Online food ordering system for a restaurant.
            Features: menu browsing, shopping cart, user authentication, admin panel for managing menu items and orders.
            Responsive design for optimal viewing on various devices.
            '
         githubHref='https://github.com/nagytommy76/MeatBallProject'
         projectHref=''
         isUnderDev
         isUnderDevText='The app isn not deployed.'
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
            <Image className='mr-1' src={PHP.src} alt='PHP' width={40} height={40} />
            <Image className='mr-1' src={Laravel} alt='Laravel' width={40} height={40} />
            <Image className='mr-1' src={MySql} alt='MySql' width={40} height={40} />
            <Image className='mr-1' src={VUE} alt='VUE.js' width={40} height={40} />
            <Image src={SASS} alt='SASS' width={40} height={40} />
         </>
      </SingleProject>
   )
}

export default Meatball
