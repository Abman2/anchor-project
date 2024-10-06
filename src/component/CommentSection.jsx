import React from 'react'

export const CommentSection = () => {
    const obj = [
        {
            "comment": "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
            "name": "John Matthews",
            "rating": 5
        },
        {
            "comment": "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
            "name": "Eunice Oliver",
            "rating": 5
        },
        {
            "comment": "It’s a really good product and helps me sleep better at night!",
            "name": "Laura Davies",
            "rating": 5
        },
        {
            "comment": "Helps me relax and remember to breathe. Stress level definitely goes down.",
            "name": "Jane Bocks",
            "rating": 5
        }
    ];

    const renderStars = (rating) => {
        let stars = [];
        let x = 0;
      
        while (x < rating) {
            stars.push(
                <svg
                    key={x}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="14px"
                    height="14px"
                    className="text-[#27AE60]"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
            x++;
        }
        return stars;
    };

    return (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto lg:mx-0 lg:ms-auto p-4 lg:pr-0 max-w-7xl w-full py-16 '>
            <h1 className='text-3xl font-bold md:hidden text-[#12305B] '>Reviews</h1>
            {obj.map((comment, index) => {
                return (
                    <div
                        key={comment.name}
                        className='bg-[#FBF9F2] h-48  max-w-xs w-full  sm:max-w-full sm:w-full md:max-w-sm lg:max-w-xs rounded-md p-6 shadow-lg mx-auto'
                    >
                        <p className='italic text-[#4D533C] mb-4 h-3/5'>{comment.comment}</p>
                        <div className='flex  flex-col'>
                            <b className='text-[#4D533C] font-bold'>{comment.name}</b>
                            <div className='flex space-x-1'>{renderStars(comment.rating)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
