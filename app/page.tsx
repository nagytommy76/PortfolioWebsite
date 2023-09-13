import dynamic from 'next/dynamic'

// import Navbar from './components/Navbar/navbar'
import About from './components/about'
import HomePage from './components/home'
import Projects from './projects/page'
import Certificates from './certs/page'
const Navbar = dynamic(() => import('@/components/Navbar/navbar'), { ssr: false })

export default function Home() {
   return (
      <>
         <Navbar />
         <HomePage />
         <About />
         <Projects />
         <Certificates />
      </>
   )
}
