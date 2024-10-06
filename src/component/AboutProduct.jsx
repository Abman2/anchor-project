import React from 'react';
import image from '../assets/aboutproduct.png';
import { Button } from './Button';

export const AboutProduct = () => {
     return (
          <div className='grid w-max-md w-screen p-4 md:grid-flow-col py-20 md:max-w-4xl lg:max-w-7xl mx-auto lg:ms-auto gap-10 place-items-center space-x-'>
               <div className=''>
                    <img src={image} alt='' className='' />
               </div>
               <div className='space-y-5 lg:w-7/12 mx-auto'>
                    <h1 className='font-black text-[#12305B] text-3xl md:text-4xl'>About Product</h1>
                   
                         <p className='text-[#21384299]'>
                              Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A
                              few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                         </p>
                         <div className='text-[#4D533C] italic'>
                         <p>😊 Promotes calm and relaxation.</p>
                         <p>💤 Inhalation allows for a rapid effect.</p>
                         <p>✅ 100% drug-free, plant-based ingredients.</p>
                         <p>‍⚕️ 3rd-party lab tested.</p>
                    </div>
                    <div className='flex space-x-10 text-[]'>
                         <div className='space-y-3'>
                              <p>Price</p>
                              <p className='font-bold'>USD 50</p>
                         </div>
                         <div className='space-y-3'>
                              <p>Unit</p>
                              <input type='number' className='border- border-2 w-16 h-8 p-1 border-black' />
                         </div>
                    </div>
                    <Button text={'Buy'} />
               </div>
          </div>
     );
};
