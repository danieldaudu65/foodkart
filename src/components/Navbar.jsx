import React, { useRef } from 'react';
import { logo } from '../assets';
import { IoMenuSharp } from "react-icons/io5";


const Navbar = () => {
    const navBar = useRef()

    const handleNavBarToggle = ()=>{
        
    }
    return (
        <>
            <div className='flex w-full p-4 justify-between items-center'>
                <div className='bg-white py-1.5 px-4 rounded-full'>

                    <img src={logo} alt="" className='w-[60px]' />
                </div>
                <div>
                    <IoMenuSharp  className='text-[33px] font-[400] cursor-pointer'/>
                </div>
                <div className='bg-white hidden p-4 px-4 lg:flex gap-3 rounded-full'>
                    <button className='font-[700]  text-[12px] text-black '>FAQS</button>
                    <button className='font-[700] text-[12px] text-black '>Contact Us</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
