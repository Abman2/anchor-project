import React from 'react'
import influencive from "../assets/influencive (1).png"
import sleep from "../assets/influencive (2).png"
import bloomberg from "../assets/influencive (3).png"
import google from "../assets/influencive (4).png"
import forbes from "../assets/forbes.png"

export const Partners = () => {
    const partners =[influencive,forbes,sleep,bloomberg,google]
  return (
   
    <div className='bg-white flex   py-2 lg:py-6 float-end relative -top-3 lg:-top-12 shadow-md items-center justify-around w-4/5 '>
        {partners.map((partner,index)=>{
            return(
                <img src={partner} alt={index} key={index} className='lg:h-8 h-3' loading='lazy'/>
            )
           
        })}
    </div>
  )
}
