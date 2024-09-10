import React, { useRef } from 'react';
import { logo } from '../assets';
import { IoMenuSharp } from "react-icons/io5";
import { FaTimeline } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const navBar = useRef()

    const handleNavBarToggle = () => {
        navBar.current.classList.toggle('nav-responsiveness')
    }
    return (
        <>
            <div className='flex w-full p-4 justify-between items-center bg-[#FFB839]'>
                <div className='bg-white py-1.5 px-4 rounded-full'>
                    <img src={logo} alt="" className='w-[60px]' />
                </div>
                {/* <div>
                     <IoMenuSharp onClick={handleNavBarToggle} className='text-[33px] font-[400] lg:hidden cursor-pointer' />
                </div> */}
                <div className='bg-white   py-1.5 px-4 items-center lg:flex gap-10 rounded-full'>
                    <button className='font-[700]  text-[12px] text-black '>FAQS</button>
                    <button className='font-[700] ml-4 text-[12px] text-black '>Contact Us</button>
                </div>
                <div ref={navBar} className='nav relative' >

                    <FaTimes className='absolute top-2 text-[33px] right-2' onClick={handleNavBarToggle} />
                    hello
                </div>
            </div>
        </>
    );
}

export default Navbar;
