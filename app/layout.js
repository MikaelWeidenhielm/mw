import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'
import BossImg from './components/BossImg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cool site',
  description: 'V cool and epic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <BossImg />
        {children}
        </body>
    </html>
  )
}
