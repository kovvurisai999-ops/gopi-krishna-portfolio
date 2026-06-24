import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import ScrollProgress from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
    title: 'Gopi Krishna Ananthula | CA Finalist | Finance Strategist',
    description: 'Premium portfolio of Gopi Krishna Ananthula — CA Finalist at Reliance Industries, Finance Strategist, and Sports Business Leader.',
    keywords: ['CA Finalist', 'Chartered Accountant', 'Finance', 'Reliance Industries', 'Portfolio'],
    openGraph: {
        title: 'Gopi Krishna Ananthula | CA Finalist | Finance Strategist',
        description: 'Premium portfolio of Gopi Krishna Ananthula — CA Finalist at Reliance Industries.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ScrollProgress />
                <Navbar />
                {children}
            </body>
        </html>
    )
}
