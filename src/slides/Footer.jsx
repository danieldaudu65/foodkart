import React from 'react';
import { fb, instagram, iphone, linkedin, logo, playstore, twitter } from '../assets';

const Footer = () => {
    return (
        <div className='m-auto w-[100%] p-4 lg:w-[85%] flex flex-col justify-center items-center bg-black text-white'>
            <img src={logo} alt="" className='w-[50%] mt-4'/>
            <h1 className='text-[20px] my-6 font-[600]'>Get Your Order in Minutes</h1>
            <div className='flex my-2 mb-4 justify-center gap-2 items-center'>
                <button  className='flex py-2 rounded-lg px-2 bg-[#D00000] p-1 bg- items-center '>
                    <img src={playstore} alt="" />
                    <p>Donwload on Google Play</p>
                </button>
                <button className='flex  py-2 rounded-lg px-2 bg-[#D00000] p-1 bg- items-center '>
                    <img src={iphone} alt="" />
                    <p>Donwload on App Store</p>
                </button>
            </div>
            <div className='flex  gap-3'>
                <div className='flex items-center justify-center'>
                    <img src= {twitter} alt="" />
                    <p>Twitter</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src= {instagram} alt="" />
                    <p>Instagram</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src= {fb} alt="" />
                    <p>Facebook</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src= {linkedin} alt="" />
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
