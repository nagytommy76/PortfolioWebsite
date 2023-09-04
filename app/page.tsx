import Navbar from './components/navbar'
import About from './components/about'
import HomePage from './components/home'
import Projects from './projects/page'
import Certificates from './certs/page'

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
