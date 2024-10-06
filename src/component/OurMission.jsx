import React from 'react'
import image from "../assets/ourmissionimage.png"
import checkmark from "../assets/checkmark.png"

export const OurMission = () => {
  return (
    <div className='ms-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-0 my-20 place-items-center'>
        <div className='flex flex-col space-y-6 md:w-4/5 lg:w-4/6'>
            <h1 className='font-black text-[#12305B] text-3xl md:text-4xl'>Our Mission</h1>
            <p className='text-[#21384299] font-normal leading-7'>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to - </p>
            <ul className='text-[#21384299] font-normal space-y-1  list-disc ps-4'>
                <li>Promote Calm</li>
                <li>Support Sleep</li>
                <li>Reduce Sleep</li>
                <li>Aid Relaxation</li>
            </ul>
        </div>
        <div>
            <img src={image} alt="" loading='lazy' />
        </div>
    </div>
  )
}
