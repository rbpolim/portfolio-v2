import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rbpolim_',
  description: 'A personal portfolio website for rbpolim_',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
