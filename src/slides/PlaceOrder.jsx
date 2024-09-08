import React from 'react';
import { appdownload, appleblack, applered, bell, bic, bicycle, bicycle2, footerapple, footerplay, getfood, iphone, landscape, logo, orderbig, placeorderfood, playdownload, playstore } from '../assets';
import { ordercontainer } from '../constant';

const PlaceOrder = () => {
    return (
        <div className='bg-[#F6F6F6]  p-6 '>
            <h1 className='font-[700] lg:text-[22px] gap-2 my-8 text-[20px] flex items-center lg:justify-start justify-center'>How to <span className='text-red-500' >  Order </span>     with us?</h1>
            <div className='lg:flex w-full'>
                <div className='flex justify-between bg-white h-fit flex-col mb-2 relative py-4 px-4 rounded-lg text-white           '>
                    <div className=' '>
                        <div className="mb-10 w-full">
                            <img src={orderbig} alt="" className='w-full' />
                        </div>

                        <div className='text-black mb-8 '>
                            <h2 className='font-[700]  '>HUNGRY?</h2>
                            <p>Download the FoodKart App</p>
                        </div>
                        <div className='flex  justify-between'>
                            <div className='flex gap '>
                                <div className='p-3 px-4 flex justify-center items-center rounded-full bg-black mr-2'>
                                    <img src={playstore} alt="" className='w-[10px]' />
                                </div >
                                <div className='p-3  flex justify-center items-center rounded-full bg-black mr-2'>
                                    <img src={iphone} alt="" className='w-[17px]' />
                                </div>
                            </div>
                            <p className=' flex justify-center items-center  bg-green-700 p-2 text-white right-0 rounded-full px-3 '>01</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 m gap-4'>
                    {
                        ordercontainer.map((item, index) => (
                            <div
                                className='relative  rounded-lg bg-white gap-4 shadow-xl'
                                key={index}
                            >
                                <img src={item.image} alt="" className='w-full mb-2' />
                                <div className='p-2 '>
                                    <p className='font-[700]'>{item.title}</p>
                                    <p className='text-[12px] w-[70%]'>{item.text}</p>
                                    <p className='absolute bg-green-700 p-2 text-white right-2 text-[14px] rounded-full px-3 bottom-2'>{item.number}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='flex flex-col mv-3'>

                <div className='justify-center my-8 self-end flex items-center rounded-full p-1 px-2 bg-white w-fit '>
                    <img src={logo} alt="" className='w-[80px] ' />
                </div>
                <p className='font-[600] text-[]'>We provide <span className='text-red-500'>Fast</span> &  <span className='text-red-500'>Reliable</span> Delivery <br /> of healthy food for your family.</p>
                <p className='mb-10 text-[15px]'>Looking for a flexible and rewarding job? <br />Become a Delivery Agent OR Vendor  with us.</p>
            </div>


            <div className='relative mb-2'>
                <img src={landscape} alt="" />
                <img src={bicycle} alt="" className='absolute bottom-0 left-[25%]' />
            </div>


            <div className='flex justify-between my-4  items-center w-full'>
                <div className='flex text-white items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={playstore} alt="" className='w-[14px]' />
                    </div >
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={appleblack} alt="" className='w-[14px]' />
                    </div>
                    BECOME A RIDER
                </div>
                <div className='flex text-white items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={playstore} alt="" className='w-[14px]' />
                    </div>
                    <div className='p-1 rounded-full bg-white mr-2'>
                        <img src={appleblack} alt="" className='w-[14px]' />
                    </div>
                    BECOME A VENDOR
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;
