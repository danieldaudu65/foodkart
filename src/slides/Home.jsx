import React from 'react';
import Navbar from '../components/Navbar';
import { foodCollection, homeapple, homefood, homeplay } from '../assets';

const Home = () => {
    return (
        <div className='bg-white  '>
            <Navbar />
            <div className='relative h-[60vh] lg:h-[90vh]'>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-[500]  text-[22px]'>Explore Our</h2>
                    <h1 className='font-[800] text-[30px]'>Culinary Delights</h1>
                    <p className='font-[500] w-[80%] text-center'>Download the FoodKart App, and get delicacies delivered to your doorstep in minutes.</p>
                </div>
                <div className='flex gap-3 justify-center items-center mt-8'>
                    <img src={homeplay} alt=""   className='w-[150px]'/>
                    <img src={homeapple} alt=""  className='w-[150px]'/>
                </div>
            </div>
        </div>
    );
}
export default Home;
