import React from 'react';
import Navbar from '../components/Navbar';
import { homefood } from '../assets';

const Home = () => {
  return (
    <div className='bg-[#FFB839] h-[100vh]'>
      <Navbar />
      <div className='relative h-[90vh]'>
        <img src={homefood} alt=""  className='absolute bottom-0 w-[190%]'/>
      </div>
    </div>
  );
}

export default Home;
