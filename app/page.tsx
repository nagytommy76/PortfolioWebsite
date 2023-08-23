import Navbar from './components/navbar'
import About from './components/about'
import Projects from './projects/page'

export default function Home() {
   return (
      <main className='h-screen'>
         <Navbar />
         <About />
         <Projects />
      </main>
   )
}
