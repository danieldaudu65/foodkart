import React from 'react';
import Slider from 'react-slick';
import { customersays, testimonials } from '../constant';

// Slick Carousel settings for multiple rows


const TestimonialsSlider = () => {
  // console.log(customersays)
  return (
    <div className='bg-black lg:p-24 p-8 w-full'>
      <h1 className='flex justify-center font-[700] w-full mb-6 text-white text-[22px] lg:text-[32px] '>What Our Customers Say</h1>

      <div className='mt-3 lg:flex md:flex-col lg:flex-row w-full gap-6 lg:items-center lg:justify-center'>

        {
          customersays.map((item, index) => (
            <div className=' bg-white p-8 rounded-xl lg:w-[85%] md:m-auto md:mb-10 md:self-center md:w-[80%] w-full xl:h-[400px] lg:h-[450px] md: flex flex-col mb-8' key={index}>
              <h3 className='font-[600] text-[19px] lg:text-[22px] mb-4  text-red-600'>"{item.title}"</h3>
              <div className='flex flex-col justify-between h-full'>

                <p className='lg:text-[18px]'>{item.text}</p>
                <hr className='my-5' />
                <div className='flex gap-3 items-center'>
                  <img src={item.image} className='lg:w-[80px] w-[50px]' alt="" />
                  <div>
                    <p className='font-[700]'>{item.name}</p>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TestimonialsSlider;
