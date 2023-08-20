import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Nagy Tamás',
   description: 'Tamás Nagy portfolio wesite',
   category: 'Portfolio wesite',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className={inter.className}>{children}</body>
      </html>
   )
}
