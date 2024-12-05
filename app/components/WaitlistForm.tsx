import React from 'react'

export default function WaitlistForm() {
  return (
    <section className='relative rounded-lg m-4 mt-24 p-8 flex flex-col items-center justify-center'>

      {/* Form Content */}
      <form className='w-2/5 my-16 relative'>
        <h1 className='text-4xl font-bold tracking-tight'>Your First Month of Premium Is On Us—Join the Waitlist Today!</h1>
        <p className='text-xl leading-8 my-6'>Join our waitlist today and unlock 1 month of premium access at no cost when we launch. Experience the full power of our AI therapy platform, including advanced features designed to make mental health care more accessible and effective</p>

        <div className='flex gap-3 w-full'>
          <input type='email' placeholder='Enter email here...' className='rounded-lg shadow-lg px-6 py-3 flex-1' />
          <button type='submit' className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600'>Join the Wait</button>
        </div>
      </form>
    </section>
  )
}
