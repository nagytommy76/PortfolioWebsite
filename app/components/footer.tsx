import ContactIcons from './includes/ContactIcons'

const Footer = () => {
   return (
      <footer className='text-slate-100 h-36 w-[100%] mt-auto bg-footer-color flex flex-col items-center justify-center'>
         <div className='mb-3 flex flex-row w-40 justify-evenly items-center'>
            <ContactIcons />
         </div>
         <h1 className='text-2xl'>Nagy Tamás &copy; 2024.</h1>
      </footer>
   )
}

export default Footer
