import React from 'react'
import image from "../assets/product.png"
import { ProductReviw } from './ProductReviw'

export const ProductReviewArray = () => {
  const  reviews=[
        {
            "name":"Rachel Dill",
            "image": image,
            "review":"Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
            "rating":5,
        },
        {
            "name":"Javier Mendez",
            "image": image,
            "review":"It really helps me fall right to sleep compared to melatonin pills.",
            "rating":5,
        },
        {
            "name":"Naomi Nwazurike",
            "image": image,
            "review":"I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
            "rating":5,
        },
        {
            "name":"Nate Jacobs",
            "image": image,
            "review":"I have been falling asleep faster and sleeping thru the night.",
            "rating":5,
        },
    ]
  return (
    <>
    <h1 className='font-black text-[#4D533C] text-3xl md:text-4xl  ps-4 md:ps-0 lg:ms-auto   w-full max-w-sm md:max-w-4xl lg:max-w-7xl' >Product Review</h1>
    <div className='lg:ms-auto w-full max-w-sm md:max-w-5xl lg:max-w-7xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 p-4 lg:p-0 my-10'>
           
           {reviews.map(review=>{
               return(
                   <ProductReviw name={review.name} image={review.image}  review={review.review} rating={review.rating} key={review.name}/>
       
               )
           })}
          </div>
    </>
  
  )
}
