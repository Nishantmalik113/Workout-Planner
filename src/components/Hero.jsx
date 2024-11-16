import React from 'react'
import Button from './Button'

export default function () {
  return (
    <div className='min-h-screen flex flex-col gap-10 
    items-center justify-center text-center max-w-[800px] 
    w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
        <p className='text-md sm:text-lg md:text-xl lg:text-2xl'>Your Fitness Your Way</p>
        <img className='max-w-[300px]' src="/Screenshot 2024-11-16 122955.png" alt="" />
        <h1 className='text-orange-600 uppercase font-semibold text-5xl 
        sm:text-6xl md:text-7xl lg:text-8xl'>FORTE</h1>
        </div>
        <p className='text-sm md:text-base font-light'>
          I hereby acknowledgement that I may become 
          <span className='text-orange-400 font-medium'> unbelievably swolenormous </span> 
          and accept all risks of becoming the local 
          <span className='text-orange-400 font-medium'> mass montrosity </span>, 
          afflicted with severe body dismorphia, 
          unable to fit through doors.
        </p>
        <Button func={()=>{
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
