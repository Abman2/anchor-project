import React from 'react'

import { Button } from "./Button"
import { NavBar } from './NavBar'



export const Header = ({background}) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='max-h-screen max-w-full flex items-center mx-auto w-screen h-screen md:h-full md:py-40 lg:py-0 lg:pb-0 lg:h-screen bg-cover bg-center text-lg font-light  ' >
        <div className=' w-full max-w-md md:max-w-4xl lg:max-w-7xl mx-auto space-y-20 '>
            <div className='space-y-5 px-4 xl:px-0'>
            <p>We're here to help you</p>
            <h1 className='text-7xl text-[#12305B] font-bold font-poppins'>Relax & Rest</h1>
            <p>With the aid of our Melatonin Sleepstiq, we can assure you can get quality sleep</p>

            <Button text={"Visit Shop"} />
            </div>
        </div>
        
    </div>
  )
}
