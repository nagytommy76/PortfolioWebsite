import DefaultButton from '@/src/ResumeButton/DefaultButton'

const home = () => {
   return (
      <section
         id='home'
         className='
            text-slate-50 tracking-widest font-light h-screen bg-hero bg-no-repeat bg-cover bg-center bg-neutral-900
            flex flex-wrap flex-col justify-center content-center
         '
      >
         <h1 className='text-6xl mb-5'>
            Helló, <span className='text-amber-400'>Nagy Tamás</span> vagyok,
         </h1>
         <h1 className='text-6xl mb-5'>frontend fejlesztő.</h1>
         <div className='h-20'>
            <DefaultButton text='Tovább' href='#about' />
         </div>
      </section>
   )
}

export default home
// https://codepen.io/LeonGr/pen/eYoZJB
// https://medium.com/@ruse.marshall/converting-a-vanilla-js-canvas-animation-to-react-78443bad6d7b
