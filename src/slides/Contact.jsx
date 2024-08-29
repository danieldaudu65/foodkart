import React from 'react';
import { fag } from '../constant';

const Contact = () => {
    return (
        <div className='flex bg-[#EDEDED] p-4 justify-center items-center flex-col'>
            <h1>Contact Us</h1>
            <div className='flex w-full'>
                <div className='w-1/2'>
                    map
                </div>
                <div className='w-1/2'>
                    <form action="" className='flex gap-2 flex-col w-fullS'>
                        <div className=''>
                            <input type="text"  className='px-2 py-4' placeholder='First Name' />
                            <input type="text" className='px-2 py-4'  placeholder='Last Name'/>
                        </div>
                        <input type="text" placeholder='Phone Number' className='bg-white px-2 py-4' />
                        <input type="email" placeholder='Email Address' className='bg-white px-2 py-4' />
                        <input type="text" placeholder='Your Message' className='bg-white px-2 py-4' />
                        <button type='submit' className='bg-[#0C513F] text-white py-2 w-[70%]'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
