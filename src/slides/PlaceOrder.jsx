import React from 'react';
import { appdownload, appleblack, applered, bell, bic, bicycle, bicycle2, footerapple, footerplay, getfood, iphone, landscape, logo, orderbig, placeorderfood, playdownload, playstore } from '../assets';
import { ordercontainer } from '../constant';

const PlaceOrder = () => {
    return (
        <div className='bg-white lg:w-full  p-6  lg:p-24'>
            <h1 className='font-[700] lg:text-[30px] gap-2 my-8 text-[20px] flex items-center lg:justify-start justify-center'>How to <span className='text-red-500' >  Order </span>     with us?</h1>
            <div className='lg:flex  w-full'>
                <div className='flex justify-between bg-white h-full flex-col shadow-xl mb-2 lg:mb-0 relative lg:w-1/2 lg:mr-4 rounded-lg text-white           '>
                    <div className="mb-10 w-full ">
                        <img src={orderbig} alt="" className='w-full' />
                    </div>

                    <div className='text-black px-4 mb-8 '>
                        <h2 className='font-[700]  '>HUNGRY?</h2>
                        <p>Download the FoodKart App</p>
                    </div>
                    <div className='flex px-4 pb-2  justify-between'>
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
                <div className='lg:w-1/2 h-full  grid grid-cols-2  gap-4'>
                    {
                        ordercontainer.map((item, index) => (
                            <div
                                className='relative    rounded-lg bg-white gap-4 shadow-xl'
                                key={index}
                            >
                                <img src={item.image} alt="" className='w-full mb-2' />
                                <div className='px-3 p-1 sm:p-2 sm:px-4 '>
                                    <p className='font-[700] text-[9px] sm:text-[13px]  mt-3'>{item.title}</p>
                                    <p className='text-[9px] sm:text-[16px]  mb-2  w-[80%]'>{item.text}</p>
                                    <p className='absolute bg-green-700 p-1 md:p-2 text-white right-1 lg:right-2 text-[10px] sm:text-[14px] rounded-full px-1.5 lg:px-3 bottom-1 lg:bottom-2'>{item.number}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='lg:flex lg:mt-24 justify-between '>

                <div className='flex flex-col'>

                    <div className='flex flex-col mv-3'>

                        <div className='justify-center lg:hidden  my-8 self-end flex items-center rounded-full p-1 px-2 bg-white w-fit '>
                            <img src={logo} alt="" className='w-[80px] ' />
                        </div>
                        <p className='font-[700] lg:text-[42px] mb-4 text-[]'>We provide <span className='text-red-500'>Fast</span> &  <span className='text-red-500'>Reliable</span> <br className='lg:block hidden' /> Delivery <br className='lg:hidden' /> of healthy food for <br className='lg:block hidden' /> your family.</p>
                        <p className='mb-10 lg:text-[18px] text-[15px] '>Looking for a flexible and rewarding job? <br className='lg:hidden' />Become  a <br className='hidden lg:block' /> Delivery Agent OR Vendor  with us.</p>
                    </div>
                    <div className='hidden cursor-pointer lg:flex justify-start gap-4   items-center w-full'>
                        <div className='flex text-white items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                            <div className='p-1 rounded-full bg-white mr-2'>
                                <img src={playstore} alt="" className='w-[14px]' />
                            </div >
                            <div className='p-1 rounded-full bg-white mr-2'>
                                <img src={appleblack} alt="" className='w-[14px]' />
                            </div>
                            BECOME A RIDER
                        </div>
                        <div className='flex cursor-pointer text-white items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
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


                <div className='relative mb-2 '>
                    <div className='justify-center hidden lg:absolute right-0  -top-3 my-8 self-end lg:flex items-center rounded-full p-1 px-2 bg-white w-fit '>
                        <img src={logo} alt="" className='w-[80px] ' />
                    </div>
                    <div className='relative'>

                        <img src={landscape} alt="" className=' w-full' />
                        <img src={bicycle} alt="" className='w-[120px] sm:w-[160px] md:w-[220px] absolute bottom-6 xs:bottom-8 sm:bottom-15 left-[20%]' />
                    </div>
                </div>

                <div className='flex text-[10px] sm:text-[10px] mt-8 justify-between my-4 lg:hidden sm:justify-start md:justify-start items-center w-full'>
                    <div className='cursor-pointer flex text-white items-center scale-90  rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                        <div className='p-1 rounded-full bg-white mr-2'>
                            <img src={playstore} alt="" className='w-[10px]' />
                        </div >
                        <div className='p-1 rounded-full bg-white mr-2'>
                            <img src={appleblack} alt="" className='w-[10px]' />
                        </div>
                        BECOME A RIDER
                    </div>
                    <div className='flex cursor-pointer text-white scale-90  items-center rounded-lg bg-[#0C513F] mb-3 p-2 w-fit '>
                        <div className='p-1 rounded-full bg-white mr-2'>
                            <img src={playstore} alt="" className='w-[10px]' />
                        </div>
                        <div className='p-1 rounded-full bg-white mr-2'>
                            <img src={appleblack} alt="" className='w-[10px]' />
                        </div>
                        BECOME A VENDOR
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;
