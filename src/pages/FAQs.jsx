import React, { useState } from 'react';
import { FaqsArray } from '../component/FaqsArray';

export const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className='max-h-screen max-w-full flex items-center mx-auto w-screen bg-[#FBF9F2] md:h-full py-40 lg:py-0 lg:pb-0 lg:h-screen bg-cover bg-center text-lg font-light'>
        <div className='w-full max-w-md md:max-w-4xl lg:max-w-7xl mx-auto space-y-20'>
          <div className='space-y-5 px-4 xl:px-0'>
            <p className='text-[#12305B] font-medium text-sm md:text-base'>We're here to help you</p>
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-[#12305B] font-bold font-poppins'>How can we assist?</h1>
            <input
              type="text"
              className='md:w-1/2 h-12 p-2 px-10 text-base font-normal border'
              placeholder='Search FAQs here'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <FaqsArray searchTerm={searchTerm} />
    </>
  );
};
