import React from 'react';
import { Button } from './Button';
import shopNowImage from "../assets/shopnow1.png";

export const ShopNowSection = () => {
    return (
        <div className='mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 p-4 my-20 place-items-center'>
            <div className='flex justify-center h-[400px] lg:h-[600px]'>
                <img 
                    src={shopNowImage} 
                    alt='Shop Now' 
                    className='w-full max-w-md lg:max-w-xl object-cover' 
                />
            </div>
            <div className='flex flex-col space-y-6 md:w-4/5 lg:w-4/6'>
                <h1 className='font-black text-[#12305B] text-3xl md:text-4xl'>Shop Now</h1>
                <p className='text-[#4D533C] font-extralight leading-7'>
                    Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few
                    breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                </p>
                <Button text={'Visit Shop'} />
            </div>
        </div>
    );
};
