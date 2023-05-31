import './globals.css'
import { Inter } from 'next/font/google'
import  {Heebo} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile Settings',
  description: 'component of a profile settings Rocketseat challenger ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
