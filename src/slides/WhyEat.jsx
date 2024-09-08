import React from 'react';
import { Whyeat } from '../constant';

const WhyEat = () => {
  return (
    <div className='bg-[#FFF9F2] flex lg:p-12 flex-col items-center p-6 justify-center '>
      <h1 className='font-[700] lg:mb-8  lg:text-[28px] text-[20px]'>Why <span className='text-red-500'>Eat</span> with us?</h1>

      <div className='lg:flex'>
        {
          Whyeat.map((item, index) => (
            <div className=' p-3 mb-8 flex flex-col justify-center lg:items-start items-center' key={index}>
              <img src= {item.image} className='mb-3 lg:mb-8' alt="" />
              <p className='font-[700] text-[20px]'>{item.title}</p>
              <p className='w-[70%] lg:text-left text-center'>{item.details}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default WhyEat;
