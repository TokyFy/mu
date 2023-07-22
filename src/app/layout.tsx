import './globals.css'
import type { Metadata } from 'next'
import {NavBar} from "@components/NavBar";
import {Footer} from "@components/Footer";

export const metadata: Metadata = {
  title: 'Multi united',
  description: '--',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-cabin subpixel-antialiased">
      <NavBar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
