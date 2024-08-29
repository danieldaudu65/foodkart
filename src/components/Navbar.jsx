import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
    return (
        <>
            <div className='flex w-full p-4 justify-between items-center'>
                <img src={logo} alt=""  className='w-[150px]'/>
                <div className='bg-white p-4 px-4 flex gap-3 rounded-full'>
                    <button className='font-[700]  text-[12px] text-black '>FAQS</button>
                    <button className='font-[700] text-[12px] text-black '>Contact Us</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
