import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AI Agency — Искусственный интеллект для бизнеса',
  description: 'Разработка интеллектуальных систем, R&D, корпоративное обучение и стратегический консалтинг в области ИИ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
