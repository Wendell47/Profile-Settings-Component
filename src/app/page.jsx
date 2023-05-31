import Image from 'next/image'
import Profile from './components/profileSettings'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center" >
        <Profile/>
    </main>
  )
}
