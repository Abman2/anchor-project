import React from 'react'
import { Header } from '../component/Header'
import { Partners } from '../component/Partners'
import { CommentSection } from '../component/CommentSection'
import { Story } from '../component/Story'
import { ShopNowSection } from '../component/ShopNowSection'
import { OurMission } from '../component/OurMission'
import { VisitOurShop } from '../component/visitOurShop'
import { ProductReviewArray } from '../component/ProductReviewArray'
import header from "../assets/header.png"




export const Home = () => {
  return (
    <div className='bg-none font-poppins'>
      <Header  background={header}/>
        <Partners/>
        <Story/>
        <CommentSection/>
        <ShopNowSection/>
        <OurMission/>
        <VisitOurShop/>
        <ProductReviewArray/>

    </div>
  )
}
