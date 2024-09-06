import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { fb, footerapple, footerfood1, footerfood2, footerfood3, footerfood4, footerplay, instagram, iphone, linkedin, logo, playstore, twitter } from '../assets';

const Footer = () => {
    return (
        <div className='m-auto w-[100%] p-4 lg:w-[85%] flex flex-col  bg-[#474747] text-white'>
            <div className='flex mt-4 items-center justify-between w-full'>
                <div className='justify-center flex items-center rounded-full p-1 px-2 bg-white w-fit '>
                    <img src={logo} alt="" className='w-[80px] ' />
                </div>
                <div className=' flex justify-center gap-2 items-center'>
                    <div className='flex p-2 rounded-full bg-red-700 items-center justify-center'>
                        <FaFacebookF />

                    </div>
                    <div className='flex p-2 rounded-full bg-red-700 items-center justify-center'>
                        <FaInstagram />
                    </div>
                </div>
            </div>
            <h1 className='text-[16px] my-6 font-[400] w-[70%]'>Get delicacies delivered to your doorstep in minutes</h1>
            <div className='flex w-fit my-2 mb-4 flex-col gap-2 '>
                <p className='text-[#DBDFD0] hover:text-white cursor-pointer'>Links</p>
                <p className='text-[#DBDFD0] hover:text-white cursor-pointer'>FAQs</p>
                <p className='text-[#DBDFD0] hover:text-white cursor-pointer'>Conact Us</p>
            </div>
            <div>
                <div className='flex items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={playstore} alt="" className='w-[14px]' />
                    </div >
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={iphone} alt=""  className='w-[14px]'/>
                    </div>
                    BECOME A RIDER
                </div>
                <div className='flex items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={playstore} alt=""  className='w-[14px]'/>
                    </div>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={iphone} alt=""  className='w-[14px]'/>
                    </div>
                    BECOME A VENDOR
                </div>
            </div>
            <div className='flex'>
                <img src={footerapple} className='w-[30%] mb-4' alt="" />
                <img src={footerplay} className='w-[30%] mb-4' alt="" />
            </div>
            <div className='grid grid-cols-2 w-[60%] gap-1 '>
                <img src={footerfood1} alt="" />
                <img src={footerfood2} alt="" />
                <img src={footerfood3} alt="" />
                <img src={footerfood4} alt="" />
            </div>
        </div>
    );
}

export default Footer;
