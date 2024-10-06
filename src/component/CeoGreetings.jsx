import React from 'react';
import Slider from 'react-slick';
import avatar from "../assets/avatar1.png";
import avatar2 from "../assets/avatar1.png"; // Add another avatar as needed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CeoGreetings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const greetings = [
    {
      text: "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of Sleepstiq.",
      name: "James Miller",
      position: "CEO, Techbias",
      avatar: avatar,
    },
    {
      text: "Using Sleepstiq has transformed my nights and improved my overall well-being significantly.",
      name: "Alice Johnson",
      position: "CTO, Techbias",
      avatar: avatar2,
    },
    // Add more greetings as needed
  ];

  return (
    <Slider {...settings} className='w-10/12 md:w-4/5 lg:w-3/5 mx-auto bg-[#FBF9F2]  shadow-2xl'>
      {greetings.map((greeting, index) => (
        <div key={index} className=' flex flex-col p-6 md:p-8 space-y-16  rounded-lg'>
          <p className='italic text-[#4D533C] text-lg  font-extralight  text-left'>
            {greeting.text}
          </p>
          <div className='flex items-center space-x-4 md:space-x-5 '>
            <img src={greeting.avatar} alt={greeting.name} className='rounded-full w-16 h-16 md:w-20 md:h-20'  loading='lazy'/>
            <div>
              <p className='text-[#4D533C] font-bold text-lg'>{greeting.name}</p>
              <p className='text-[#152934] text-sm md:text-base'>{greeting.position}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
