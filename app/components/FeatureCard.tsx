import React from 'react'

type FeatureProps = {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export default function FeatureCard({title, desc, icon}: FeatureProps) {
  return (
    <div className='h-full flex gap-3 rounded-lg mx-auto'>
        <div>{icon}</div>
        <div className='flex-1'>
            <h3 className='text-lg font-semi-bold mb-2 sm:text-xl'>{title}</h3>
            <p className='sm:w-3/4 leading-6'>{desc}</p>
        </div>
    </div>
  )
}
