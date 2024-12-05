import React from 'react'
import FeatureCard from './FeatureCard'

import { MessagesSquare, Clock, Shield, HeartHandshake } from 'lucide-react'

export default function Description() {
  return (
    <section className='flex flex-col sm:px-24'>
        <h2 className='w-11/18 text-3xl text-left font-bold sm:text-4xl tracking-tight'>Meet the Next Generation of Mental Health Care</h2>
        <p className='text-xl leading-7 pt-2 sm:w-3/4 '>Experience the future of mental health care with AI-powered therapy that&apos;s secure, empathetic, and available anytime, anywhere—affordable support, tailored to you.</p>
    
        <div className='mt-10 h-full grid sm:grid-cols-2 gap-6 items-stretch auto-rows-fr sm:gap-x-24 sm:gap-y-12'>
            <FeatureCard title='Real-Time Conversations' desc='Engage in real-time, face-to-face interactions designed to make therapy accessible and convenient' icon={<MessagesSquare className='bg-blue-500 text-white p-2 rounded-lg w-10 h-10 sm:w-12 sm:h-12'/>} />
            <FeatureCard title='24/7 Availability' desc='Accessible therapy tailored to your schedule, ensuring support is always available whenever you need it' icon={<Clock className='bg-blue-500 text-white p-2 rounded-lg w-10 h-10 sm:w-12 sm:h-12'/>} />
            <FeatureCard title='Private and Secure' desc='Your conversations are safeguarded with advanced encryption, ensuring complete privacy and peace of mind' icon={<Shield className='bg-blue-500 text-white p-2 rounded-lg w-10 h-10 sm:w-12 sm:h-12'/>} />
            <FeatureCard title='Affordable Mental Health Care' desc='Pricing designed to be affordable and inclusive, making mental health care accessible for everyone' icon={<HeartHandshake className='bg-blue-500 text-white p-2 rounded-lg w-10 h-10 sm:w-12 sm:h-12'/>} />
            
        </div>
    </section>
  )
}
