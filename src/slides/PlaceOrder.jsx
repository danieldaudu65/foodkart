import React from 'react';
import { appdownload, applered, bell, getfood, logo, placeorderfood, playdownload, playstore } from '../assets';

const PlaceOrder = () => {
    return (
        <div className='bg-white p-3 '>
            <div className='bg-[#3A7700] flex justify-between flex-col mb-2 h-[480px] relative py-4 px-4 rounded-lg text-white           '>
                <div className='h-[30%] justify-between flex flex-col '>
                    <h2 className='font-[800] text-[22px] mb-12'>Place your <br /> order in Seconds</h2>
                    <div className=' '>
                        <img src={playdownload} alt=""  className='mb-3'/>
                        <img src={appdownload} alt="" className='mb-2'/>
                    </div>
                </div>
                <div className='bg-white p-2 rounded-md flex w-fit'>
                    <img src={logo} alt=""  className='w-[100px]'/>
                </div>
                <img src={bell} alt="" className='absolute left-[16.9px] top-[297.65px]' />
                <img src={placeorderfood} alt="" className='absolute right-0 -bottom-4' />
            </div>
            <div>
                <img src={getfood} alt="" className='' />
            </div>
        </div>
    );
}

export default PlaceOrder;
