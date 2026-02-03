import './globals.css'
import Navbar from '@/components/layout/Navbar'
import siteConfig from '@/data/siteConfig'

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans selection:bg-pink-500 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
