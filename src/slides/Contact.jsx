import React from 'react';
import { fag } from '../constant';
import { map } from '../assets';

const Contact = () => {
    return (
        <div className='flex  bg-[#EDEDED] p-2 lg:p-20 justify-center items-center flex-col'>
            <h1 className='font-[700] text-[20px] mb-3 lg:text-[28px]'>Contact Us</h1>
            <div className='flex w-full gap-6 flex-col lg:flex-row justify-start   '>
                <div className='w-[95%] lg:w-1/2 m-auto'>
                    <img src= {map} alt="" />
                </div>
                <div className='lg:w-1/2   w-full '>
                    <form action="" className='flex mt-4 gap-2 lg:gap-6 flex-col   w-full'>
                        <div className=' flex gap-3 w-full '>
                            <input type="text"  className='px-2 py-4 lg:h-[70px] w-1/2' placeholder='First Name' />
                            <input type="text" className='px-2 py-4 lg:h-[70px] w-1/2'  placeholder='Last Name'/>
                        </div>
                        <input type="text" placeholder='Phone Number' className='bg-white px-2 w-full py-4 lg:h-[70px]' />
                        <input type="email" placeholder='Email Address' className='bg-white w-full px-2 lg:h-[70px] py-4' />
                        <input type="text" placeholder='Your Message' className='bg-white w-full px-2 lg:h-[350px] py-4' />
                        <button type='submit' className='bg-[#F0630B] m-auto lg:h-[70px] text-white py-2 w-[70%]'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
