import './globals.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Multi united',
    description: '--',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="no-transition font-cabin subpixel-antialiased overflow-x-hidden">
        {children}
        </body>
        </html>
    )
}
