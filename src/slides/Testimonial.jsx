import React from 'react';
import Slider from 'react-slick';
import { customersays, testimonials } from '../constant';

// Slick Carousel settings for multiple rows


const TestimonialsSlider = () => {
  // console.log(customersays)
  return (
    <div className='bg-black  p-8 w-full'>
      <h1 className='flex justify-center font-[600] w-full mb-6 text-white text-[23px]'>What Our Customers Say</h1>

      <div className='mt-3 lg:flex gap-6'>

        {
          customersays.map((item, index) => (
            <div className=' bg-white p-8 rounded-xl lg:w-fit flex flex-col mb-8' key={index}>
              <h3 className='font-[600] text-[19px] mb-4  text-red-600'>"{item.title}"</h3>
              <p>{item.text}</p>
              <hr  className='my-5'/>
              <div className='flex gap-3 items-center'>
                <img src={item.image} className='w-[50px]' alt="" />
                <div>
                  <p className='font-[700]'>{item.name}</p>
                  <p>{item.position}</p>
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
