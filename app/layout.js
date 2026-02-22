import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import "./globals.css"
import {Inter, Poppins} from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: "Portfolio de Prénom Nom",
  description: "Développeur web passionné par React et Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main className="fule-height">{children}</main>
        <Footer/>
        <SpeedInsights />
      </body>
    </html>
  )
}