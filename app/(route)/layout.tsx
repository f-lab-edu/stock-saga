import type { Metadata } from 'next'

import Header from '@/app/(route)/_home/components/Header'
import Providers from '@/app/provider/ReactQueryProvider'

import '@/app/css/globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-turquoise-900 dark:text-white">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
