import DefaultButton from '@/src/ResumeButton/DefaultButton'
// import Canvas2 from '@/src/Canvas/Canvas'

const home = () => {
   return (
      <section
         id='home'
         className='text-slate-50 tracking-widest font-light h-screen w-full flex flex-wrap flex-col justify-center content-center
         '
      >
         <h1 className='text-6xl mb-5 text-center sm:text-3xl sm:mb-2'>Hello there! 👋</h1>
         <h1 className='text-6xl mb-5 text-center sm:text-3xl sm:mb-2'>
            I&apos;m <span className='text-main-text'>Tamás Nagy</span>.
         </h1>
         <h1 className='text-6xl mb-10 text-center sm:text-3xl sm:mb-14'>Frontend developer.</h1>
         <div className='h-20 self-center'>
            <DefaultButton text='More info' href='#about' />
         </div>
         {/* <Canvas2 /> */}
      </section>
   )
}

export default home
// https://codepen.io/LeonGr/pen/eYoZJB
// https://medium.com/@ruse.marshall/converting-a-vanilla-js-canvas-animation-to-react-78443bad6d7b
