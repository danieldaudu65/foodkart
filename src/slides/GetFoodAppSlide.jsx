import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

import { arrowDown, bic, footerapple, footerplay, getbackg, greenstar, house, iphone, iphone141, iphone142, logo, playstore } from '../assets';

const GetFoodAppSlide = () => {
  return (
    <div
      className='bg-white p-6 flex flex-col justify-between  bg-cover'
      style={{ backgroundImage: `url(${getbackg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh' }}  // Adding background image and style directly
    >
      <div className='flex w-full ml-2 justify-start items-end  flex-col'>

        <div className='flex   flex-col'>
          <h1 className='text-[20px] font-[700] '>Get<span className='text-red-600'>FoodKart</span>App</h1>
          <h3 className=' text-[12px] mb-3 font-[600]'>Get delicacies delivered to <br /> your doorstep in minutes</h3>
        </div>
        <div className='flex  '>
          <img src={footerplay} alt="" className='w-[80px] ' />
          <img src={footerapple} alt="" className='w-[80px] ' />
        </div>
      </div>

      <div className='justify-center flex items-center rounded-full p-1 px-2 bg-white w-fit '>
        <img src={logo} alt="" className='w-[80px] ' />
      </div>

    </div>
  );
}

export default GetFoodAppSlide;
