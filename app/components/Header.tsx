import React from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='absolute top-0 left-0 w-full flex flex-row justify-between items-center p-4 sm:p-8 sm:px-24'>
        <h1 className='text-2xl'>ThryveAI</h1>
        <Menu className='h-8 w-8 sm:hidden'/>
        <nav className='hidden sm:flex gap-4 items-center'>
            <Link href='' className='text-lg'>Home</Link>
            <Link href='' className='text-lg'>About</Link>
            <Link href='' className='text-lg'>Some</Link>
            <Link href='' className='px-4 py-2 bg-blue-500 font-medium rounded-full shadow-lg'>Join the Wait</Link>
        </nav>
    </header>
  )
}
