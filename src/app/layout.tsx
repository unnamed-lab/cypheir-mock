import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import meta from '@/util/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: meta.url,
    title: meta.title,
    description: meta.desc,
    openGraph: {
        title: meta.title,
        description: meta.desc,
        url: meta.url,
    },
    alternates: {
        canonical: './',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
