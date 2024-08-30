import React from 'react';
import { fag } from '../constant';
import { map } from '../assets';

const Contact = () => {
    return (
        <div className='flex bg-[#EDEDED] p-4 justify-center items-center flex-col'>
            <h1>Contact Us</h1>
            <div className='flex w-full flex-col items-center justify-center'>
                <div className='w-[90%]'>
                    <img src= {map} alt="" />
                </div>
                <div className='lg:w-1/2 m-auto w-1/9 '>
                    <form action="" className='flex gap-2 flex-col items-center w-fullS'>
                        <div className=''>
                            <input type="text"  className='px-2 py-4' placeholder='First Name' />
                            <input type="text" className='px-2 py-4'  placeholder='Last Name'/>
                        </div>
                        <input type="text" placeholder='Phone Number' className='bg-white px-2 w-full py-4' />
                        <input type="email" placeholder='Email Address' className='bg-white w-full px-2 py-4' />
                        <input type="text" placeholder='Your Message' className='bg-white w-full px-2 py-4' />
                        <button type='submit' className='bg-[#0C513F] text-white py-2 w-[70%]'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
