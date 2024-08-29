import React from 'react';
import Navbar from '../components/Navbar';
import { homefood } from '../assets';


const Home = () => {

    return (
        <>
            <div className={`bg-[#FFB839] w-full h-screen relative `}>
                <Navbar />
                <div className='flex text-black  h-[90vh] items-center flex-col'>
                    <div className='text-center'>
                        <h2 className='text-[20px] font-[700]'>Explore Our <span className='block'>Culinay Delights</span></h2>
                        <p>Download the FoodKart App, and get delicacies delivered to your doorstep in minutes</p>
                    </div>
                    <div className='flex gap-4'>
                        <button>Get it on Google Play</button>
                        <button>Get it on App Store</button>
                    </div>
                    <img src={homefood} alt="" className='absolute bottom-0 w-[100%] flex justify-center items-center ml-5 ' />
                </div>
            </div>
        </>
    );
}

export default Home;
