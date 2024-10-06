import React, { useState } from 'react';
import logo from '../assets/image.png';
import { Link,NavLink } from 'react-router-dom';


export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  return (

   <div className='lg:bg-cover bg-blend-saturation w-screen max-w-full absolute' >
     <div className="flex lg:space-x-48 bg-transparent pt-3 px-4 md:px-10 font-poppins  max-w-md md:max-w-4xl lg:max-w-7xl  items-center  mx-auto justify-between  lg:justify-start " >
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-20 h-16" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-20 text-lg text-gray-700  ">
        <NavLink to={"/"} href="/" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} >Home</NavLink>
        <NavLink to={"/about"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} >About</NavLink>
        <NavLink to={"/shop"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} >Shop</NavLink>
        <NavLink to={"faqs"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')} >FAQs</NavLink>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {/* Hamburger Icon */}
          {isOpen ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white md:hidden z-10 md:z-0 ">
          <nav className="flex flex-col items-center space-y-4 py-4 text-lg text-gray-700">
            <NavLink to={"/"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')}  onClick={toggleMenu}>Home</NavLink>
            <NavLink to={"/about"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')}  onClick={toggleMenu}>About</NavLink>
            <NavLink to={"/shop"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')}  onClick={toggleMenu}>Shop</NavLink>
            <NavLink to={"faqs"} href="#" className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : 'hover:text-blue-900')}  onClick={toggleMenu}>FAQs</NavLink>
          </nav>
        </div>
      )}
     
    </div>
   </div>

  );
};

export default NavBar;
