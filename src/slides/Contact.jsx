import React from 'react';
import { fag } from '../constant';
import { map } from '../assets';

const Contact = () => {
    return (
        <div className='flex  bg-[#EDEDED] p-2 justify-center items-center flex-col'>
            <h1 className='font-[700] text-[20px] mb-3'>Contact Us</h1>
            <div className='flex w-full flex-col  '>
                <div className='w-[95%] m-auto'>
                    <img src= {map} alt="" />
                </div>
                <div className='lg:w-1/2 m-auto w-1/9 '>
                    <form action="" className='flex mt-4 gap-2 flex-col items-center w-full'>
                        <div className=' flex gap-3 '>
                            <input type="text"  className='px-2 py-4' placeholder='First Name' />
                            <input type="text" className='px-2 py-4'  placeholder='Last Name'/>
                        </div>
                        <input type="text" placeholder='Phone Number' className='bg-white px-2 w-full py-4' />
                        <input type="email" placeholder='Email Address' className='bg-white w-full px-2 py-4' />
                        <input type="text" placeholder='Your Message' className='bg-white w-full px-2 py-4' />
                        <button type='submit' className='bg-[#F0630B] text-white py-2 w-[70%]'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
