import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='min-h-screen px-4 flex flex-1 sm:items-center sm:justify-center sm:px-24'>
        <div className='flex flex-col gap-5 flex-1 justify-center sm:items-center'>
            <h1 className='text-5xl font-bold sm:text-6xl sm:w-3/4'>Revolutionizing Mental Health Support</h1>
            <p className='text-2xl sm:w-3/4 tracking-tight'>Empathetic mental health care through real-time, AI-driven video sessions.</p>
            <div className='flex w-3/4 items-center gap-4 sm:gap-8 mt-4'>
                <Link href='' className='px-4 py-2 bg-blue-500 rounded-full shadow-md font-medium sm:px-6 sm:py-3 sm:text-lg'>Join the Waitlist</Link>
                <Link href='' className='sm:text-lg'>More Info</Link>
            </div>
        </div>
        <div className='w-full relative flex flex-col flex-1 items-center justify-start'>
          <span className='absolute -top-10 bg-gray-400 w-1/2 h-56 rounded-lg'>image here</span>
        </div>
    </div>
  )
}
