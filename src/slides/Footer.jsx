import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { appleblack, fb, footerapple, footerfood1, footerfood2, footerfood3, footerfood4, footerplay, instagram, iphone, linkedin, logo, playstore, twitter } from '../assets';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='m-auto lg:m-0 w-[100%] p-6 lg:p-12 lg:w-full lg:justify-center lg:items-center flex flex-col lg:grid lg:grid-cols-4 lg:flex-row  bg-[#474747] text-white'>
            <div className='flex mt-4 items-center lg:flex-col lg:justify-start lg:items-start justify-between w-full'>
                <div className='justify-center flex lg:flex-col items-center rounded-full p-1 px-2 bg-white w-fit '>
                    <img src={logo} alt="" className='w-[80px]  lg:w-[120px] ' />
                </div>
                <h1 className='text-[22px] hidden lg:block lg:my-3 my-6 font-[400] w-[100%]'>Get delicacies delivered to your  <br className='hidden lg:block' />  doorstep in minutes</h1>
                <div className=' flex justify-center gap-2 items-center'>
                    <div className='flex p-2 rounded-full bg-red-700 items-center justify-center'>
                        <FaFacebookF />

                    </div>
                    <div className='flex p-2 rounded-full bg-red-700 items-center justify-center'>
                        <FaInstagram />
                    </div>
                </div>
            </div>
            <h1 className='text-[16px] lg:hidden lg:text-[22px] my-6 font-[400]  lg:w-full w-[70%]'>Get delicacies delivered to your doorstep in minutes</h1>
            <div className='flex w-fit my-2 mb-4 flex-col gap-2 '>
                <p className='text-[#DBDFD0] lg:text-[20px] lg:ml-12 mb-6 hover:text-white cursor-pointer'>Links</p>
                <Link to='faqs' duration={1000} smooth = {true} className='text-[#DBDFD0] lg:text-[20px] lg:ml-12 hover:text-white cursor-pointer'>FAQs</Link >
                <Link to='contact' duration={1000} smooth = {true} className='text-[#DBDFD0] lg:text-[20px] lg:ml-12 hover:text-white cursor-pointer'>Contact Us</Link>
            </div>
            <div>
                <div className='flex cursor-pointer lg:text-[20px] items-center rounded-lg bg-[#0C513F] mb-3 p-2 lg:p-4 w-fit '>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={playstore} alt="" className='w-[14px]' />
                    </div >
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={appleblack} alt="" className='w-[14px]' />
                    </div>
                    BECOME A RIDER
                </div>
                <div className='flex cursor-pointer lg:text-[20px] items-center rounded-lg bg-[#0C513F] mb-3 p-2 lg:p-4 w-fit '>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={playstore} alt="" className='w-[14px]' />
                    </div>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={appleblack} alt="" className='w-[14px]' />
                    </div>
                    BECOME A VENDOR
                </div>
            </div>
            <div className=''>
                <div className='flex'>
                    <img src={footerapple} className='cursor-pointer w-[30%] lg:w-[45%] mb-4' alt="" />
                    <img src={footerplay} className='cursor-pointer w-[30%] lg:w-[45%] mb-4' alt="" />
                </div>
                <div className='grid grid-cols-2   lg:mr-10 items-starts w-1/2  lg:gap-0  gap-1 '>
                    <img src={footerfood1} alt="" className=' lg:w-[300px]' />
                    <img src={footerfood2} alt="" className=' lg:w-[300px]' />
                    <img src={footerfood1} alt="" className=' lg:w-[300px]' />
                    <img src={footerfood4} alt="" className=' lg:w-[300px]' />
                </div>
            </div>
        </div>
    );
}

export default Footer;
