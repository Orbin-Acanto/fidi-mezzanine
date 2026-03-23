import type { Metadata } from 'next'
import { Roboto, Old_Standard_TT, Zilla_Slab } from 'next/font/google'
import './globals.css'
import siteConfig from '@/config/siteConfig'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const oldStandard = Old_Standard_TT({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-old-standard',
  display: 'swap',
  style: ['normal', 'italic'],
})

const zillaSlab = Zilla_Slab({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-zilla-slab',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: 'MMEink' }],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: 'https://www.fidimezzanine.com',
    siteName: siteConfig.venue.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://placehold.co/1200x630/1a1a1a/d2b371?text=The+Mezzanine+NYC',
        width: 1200,
        height: 630,
        alt: siteConfig.venue.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ['https://placehold.co/1200x630/1a1a1a/d2b371?text=The+Mezzanine+NYC'],
  },
  alternates: {
    canonical: 'https://www.fidimezzanine.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${oldStandard.variable} ${zillaSlab.variable}`}>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
