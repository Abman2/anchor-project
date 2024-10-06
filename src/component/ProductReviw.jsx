import React from 'react';

export const ProductReviw = ({ image, review, name, rating }) => {
    const renderStars = (rating) => {
        let stars = [];
        let x = 0;

        while (x < rating) {
            stars.push(
                <svg
                    key={x}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    width='14px'
                    height='14px'
                    className='text-[#27AE60]'>
                    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
            );
            x++;
        }
        return stars;
    };

    return (
        <div className='shadow-lg p-6 flex flex-row sm:flex-col justify-between items-start space-y-5  '>
            <div className='w-full sm:h-1/2 h-48  overflow-hidden '>
                <img src={image} alt={name} className='h-full w-full object-cover' />
            </div>
            <div className='w-full sm:h-1/2 space-y-3 flex-col flex'>
                <p className='text-[#4D533C] italic font-thin h-3/5 text-sm sm:text-base'>{review}</p>
                <div className='space-y-2'>
                    <b className='block text-md'>{name}</b>
                    <span className='flex space-x-1'>{renderStars(rating)}</span>
                </div>
            </div>
        </div>
    );
};
