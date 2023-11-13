import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Nagy Tamás - Frontend Developer',
   description: 'Tamás Nagy portfolio wesite',
   category: 'Portfolio wesite',
   creator: 'Nagy Tamás (Thomas Nagy)',
   icons: { icon: '/NTLogo2.jpg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html className='scroll-smooth' lang='hu'>
         <body className={`${inter.className} bg-neutral-900`}>
            {children} <Footer />
         </body>
      </html>
   )
}
