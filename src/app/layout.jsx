import './globals.css';
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from 'next/font/google';

const IBMSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-IBMSans',
})

const IBMSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-IBMSerif',
})

const IBMMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-IBMMono',
})

export const metadata = {
  title: 'Gauge - The User Experience Consultancy',
  description: 'Developed by Gauge.io',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${IBMSans.variable} ${IBMSerif.variable} ${IBMMono.variable}`}>
      <body className='bg-neutral-950 text-neutral-50 font-sans'>{children}</body>
    </html>
  )
}
