import React from 'react';
import logo from '../assets/footerlogo.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import x from '../assets/x.png';
import backgroud from '../assets/footerbackground.png';
import linkedin from '../assets/linkedin.png';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='bg-[#12305B]' style={{ backgroundImage: `url(${backgroud})` }}>
            <div className='flex flex-col items-center justify-center text-white font-thin mx-auto p-4 space-y-5'>
                <div>
                    <img src={logo} alt='Company Logo' className='' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col gap-6 w-full max-w-7xl p-4 my-20'>
                    <div className='flex flex-row justify-around  space-x-10 '>
                        <div className='space-y-2'>
                            <h3 className='font-bold pb-5'>COMPANY</h3>
                            <div className='text-[#ABABAB] space-y-5'>
                                <p><NavLink to={"/about"}>About</NavLink></p>
                                <p>Blog</p>
                                <p>Contacts</p>
                                <p>Jobs</p>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-bold pb-5'>CONTACT</h3>
                            <div className='space-y-5'>
                                <p className='text-[#ABABAB]'>Phone</p>
                                <p className='font-bold'>+234 708 507 3128</p>
                                <p className='text-[#ABABAB]'>Address</p>
                                <p className='font-bold'>16, Ogindipe Close, Upston Close</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-bold'>CONSUMER ADVISORY</h3>
                        <p>
                            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
                        </p>
                        <p>
                            By using our website or product, you agree to follow our <a href='' className='text-blue-300 underline'>terms of service.</a>
                        </p>
                    </div>
                    <div>
                        <div className='space-y-8 border-s ps-5 border-[#ABABAB]'>
                            <h3 className='font-bold'>Get in Touch</h3>
                            <p className='text-[#ABABAB]'>Feel free to get in touch with us via email</p>
                            <h2 className='font-black text-lg'>hello@sleepstiq.com</h2>
                            <div className='text-white flex space-x-3'>
                                <a href='' className='flex p-2 rounded-full bg-blue-300'>
                                    <img src={facebook} alt='Facebook' className='w-2.5 h-3' />
                                </a>
                                <a href='' className='flex p-2 rounded-full bg-blue-300'>
                                    <img src={x} alt='X' className='w-3.5 h-3' />
                                </a>
                                <a href='' className='flex p-2 rounded-full bg-blue-300'>
                                    <img src={google} alt='Google' className='w-3.5 h-3' />
                                </a>
                                <a href='' className='flex p-2 rounded-full bg-blue-300'>
                                    <img src={linkedin} alt='LinkedIn' className='w-3 h-3' />
                                </a>
                            </div>
                        </div>
                        <p className='text-[#ABABAB] pt-10 text-sm md:text-base'>© 2020@sleepstiq. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
