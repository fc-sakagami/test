import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Corporate Landing Page',
  description: 'A cute corporate landing page for Gen Z',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-nunito bg-pastel-gray">{children}</body>
    </html>
  )
}
