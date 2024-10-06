import React from 'react'
import { Footer } from '../component/Footer'
import { NavBar } from '../component/NavBar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}