import React from 'react';
import { Button } from './Button';

export const VisitOurShop = () => {
     return (
          <div className='flex flex-col lg:items-center space-y-8 lg:space-y-10 mx-auto lg:text-center w-full max-w-5xl  p-4 border-b pb-16 mb-16 '>
               <h1 className='font-black text-[#12305B] text-3xl md:text-4xl '>Visit Our Shop</h1>
               <p className='text-[#21384299] font-normal leading-7  '>
                    Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few
                    breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
               </p>
               <Button text={'Visit Shop'} />
          </div>
     );
};
