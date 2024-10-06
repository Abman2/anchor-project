import React from 'react';
import { CeoGreetings } from './CeoGreetings';

export const Story = () => {
  return (
    <div className='mx-auto w-full max-w-sm md:max-w-5xl lg:max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 my-20'>
      <div className='space-y-6 w-full lg:w-4/5'>
        <p className='text-[#152934] text-sm'>Our Amazing Story</p>
        <h1 className='font-black text-[#12305B] text-3xl md:text-4xl'>
          10k+ Happy <span className='bg-[#FFD7231A]'>Customers</span>
        </h1>
        <p className='text-[#C4C4C4] text-base md:text-lg'>
          There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
        </p>
        <a href="#" className='text-[#12305B] block underline font-bold text-sm md:text-base'>
          More Know About Us
        </a>
      </div>
      <CeoGreetings />
    </div>
  );
};
