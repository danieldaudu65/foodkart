import React from 'react';
import Navbar from '../components/Navbar';
import { homefood } from '../assets';

const Home = () => {
    return (
        <div className='bg-[#FFB839] h-[100vh]'>
            <Navbar />
            <div className='relative h-[90vh]'>
                <div>
                    <h2>Explore Our</h2>
                    <h1>Culinary Delights</h1>
                    <p>Download the FoodKart App, and get delicacies delivered to your doorstep in minutes.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={homefood} alt="" className='absolute bottom-0 w-[80%]' />
                </div>
            </div>
        </div>
    );
}

export default Home;
