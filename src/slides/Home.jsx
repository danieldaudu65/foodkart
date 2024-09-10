import React from 'react';
import Navbar from '../components/Navbar';
import { foodCollection, footerapple, footerplay, homeapple, homebg, homefood, homeplay } from '../assets';

const Home = () => {
    return (<>
        <Navbar />
        <div
            style={{ backgroundImage: `url(${homebg})` }}
            className="bg-white bg-cover flex items-center justify-center bg-center w-full h-[50vh] lg:h-screen"
        >
            <div className='relative [60vh]'>
                <div className='flex justify-center py-5 backdrop-blur-md h-fit rounded-full w-fit items-center flex-col'>
                    <h2 className='font-[500] text-[25px] lg:text-[36px]'>Explore Our</h2>
                    <h1 className='font-[700] text-[30px] lg:text-[46px] text-red-600'>Culinary Delights</h1>
                    <p className='font-[500] w-[80%] text-center lg:text-[26px] p'>Hungry? Get delicacies delivered to your doorstep in minutes.</p>
                </div>
                <div className='flex gap-3 justify-center items-center mt-8'>
                    <img src={footerapple} alt="" className='w-[150px] lg:w-[250px]' />
                    <img src={footerplay} alt="" className='w-[150px] lg:w-[250px]' />
                </div>
            </div>
        </div>
    </>
    );
}
export default Home;
