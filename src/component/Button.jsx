import React from 'react'

export const Button = ({text}) => {
  return (
    <div>
        <button className='bg-[#FC5959] text-white rounded-md outline-none border-none w-[225px] h-[50px]'>
        {text}
        </button>
    </div>
  )
}
