import React from 'react'
import background from "../assets/aboutbg.png"
import { CommentSection } from '../component/CommentSection'
import { AboutProduct } from '../component/AboutProduct'

export const About = () => {
  return (
    <div className='font-poppins'>
    <header style={{ backgroundImage: `url(${background})` }} className='max-h-screen max-w-full flex items-center mx-auto w-screen h-screen md:h-full md:py-40 lg:py-0 lg:pb-0 lg:h-screen bg-cover bg-center md:bg-left  text-lg font-light  ' >
        <div className=' w-full max-w-md md:max-w-4xl lg:max-w-7xl mx-auto space-y-20 '>
            <div className='space-y-5 px-4 xl:px-0'>
            <p className='text-[#12305B]'>We're here to help you</p>
            <h1 className='text-7xl text-[#12305B] font-bold font-poppins'>Relax & Rest</h1>
            </div>
        </div>
        
    </header>
    <AboutProduct/>
    <CommentSection/>
    </div>
  )
}
