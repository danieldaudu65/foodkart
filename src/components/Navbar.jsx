import React from 'react';
import { logo } from '../assets';
import { FaArrowUp, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const handleLinkClick = (section) => {
        console.log(`${section} link clicked`);
    };
    
    return (
        <>
            <div className='flex w-full p-4 lg:px-12 justify-between items-center bg-[#FFB839]'>
                <div className='bg-white py-1.5 px-4 rounded-full'>
                    <img src={logo} alt="Logo" className='w-[60px] lg:w-[120px]' onClick={() => navigate('/')} />
                </div>
                <div className='bg-white lg:py-3 py-1.5 px-4 flex  items-center lg:flex  rounded-full'>
                    <Link
                        to="faqs"
                        smooth={true}
                        duration={1000}
                        className='font-[700] text-[10px] lg:text-[16px] text-black cursor-pointer'
                        onClick={() => handleLinkClick('FAQs')}
                    >
                        FAQS
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={1500}
                        className='font-[700] ml-4 text-[10px] lg:text-[18px] text-black cursor-pointer'
                        onClick={() => handleLinkClick('Contact Us')}
                    >
                        Contact Us
                    </Link>
                </div>

                
            </div>
        </>
    );
};

export default Navbar;
