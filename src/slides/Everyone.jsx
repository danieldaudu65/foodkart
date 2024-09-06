import React from 'react';
import { everybg, everybg2, homebg2, minifood1, minifood2 } from '../assets';


const Everyone = () => {
  return (
    <div className='relative mb-16 bg-white z-20 h-[350px]'

    ><div className='flex flex-col justify-center items-center w-full h-full '>
        <h1 className='font-[700] text-[20px]'>Yummy Delights</h1>
        <h1 className='font-[800] text-[23px] text-red-800 -mt-2'>For Everyone</h1>
      </div>
      <img src={everybg2} alt=" " className='absolute top-0' />
      
    </div>
  );
}

export default Everyone;
