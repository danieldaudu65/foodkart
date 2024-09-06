import React from 'react';
import Slider from 'react-slick';
import { works } from '../constant';
import { hiw1, hiw2, hiw3, iphone, phone1, phone2, phone3, phone4, phone5, phone6, playstore, workbg } from '../assets';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Works = () => {
  return (
    <div className='relative bg-black text-white w-full'>
      <img src={workbg} className='absolute top-[-5px] mb-5' alt="" />

      <h2 className='text-[35px] font-[700]  mt-14 mb-3 flex justify-center'>How It Works</h2>
      <div className='text-center w-full flex justify-center'>
        <p className='w-[80%] text-[13px] '>
          Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download FoodKart App, and let’s deliver happiness to your doorstep in minutes.
        </p>
      </div>
      <div className='grid grid-cols-2 p-8 gap-10 text-black'>
        <div className='bg-white rounded-xl relative h-[180px] p-3'>
          <span className='absolute top-[-15%] left-[-15%] bg-[#1A7D39] p-4 rounded-full text-white font-[600]'>01</span>
          <h3 className='text-[#DD5D0C] font-[600] text-center'>Hungry ?</h3>
          <div className='flex justify-center items-center gap-3 my-3'>
            <div className='bg-black flex w-auto p-2 rounded-full'>
              <img src={playstore} alt="" />
            </div>
            <div className='bg-black flex w-auto p-2 rounded-full'>
              <img src={iphone} alt="" />
            </div>
          </div>
          <p className='font-[600] text-[13px] text-center'>Download the FoodKart</p>
        </div>

        <div className='bg-white rounded-xl relative h-[180px] p-3'>
          <span className='absolute top-[-15%] left-[-15%] bg-[#1A7D39] p-4 rounded-full text-white font-[600]'>02</span>
          <h3 className='text-[#DD5D0C] font-[600] text-center'>Browse Menu</h3>
          <div className=' flex items-center justify-center w-full'>

            <img className='' src={hiw1} alt="" />
          </div>
          <p  className='text-[13px] font-[600] text-center'>Choose from a diverse selection of cuisines</p>
        </div>

        <div className='bg-white rounded-xl relative h-[180px] p-3'>
          <span className='absolute top-[-15%] left-[-15%] bg-[#1A7D39] p-4 rounded-full text-white font-[600]'>03</span>
          <h3 className='text-[#DD5D0C] font-[600] text-center'>Place Order</h3>
          <div className=' flex items-center justify-center w-full'>

            <img className='' src={hiw3} alt="" />
          </div>
          <p  className='text-[13px] font-[600] text-center'>Select your delivery & get it in minutes</p>
        </div>

        <div className='bg-white rounded-xl relative h-[180px] p-3'>
          <span className='absolute top-[-15%] left-[-15%] bg-[#1A7D39] p-4 rounded-full text-white font-[600]'>04</span>
          <h3 className='text-[#DD5D0C] font-[600] text-center'>Enjoy your Meal</h3>
          <div className=' flex items-center justify-center w-full'>

            <img className='' src={hiw2} alt="" />
          </div>
          <p  className='text-[13px] font-[600] text-center'>Eat from the comfort of your home/office</p>
        </div>
      </div>
      <div className='hidden lg:flex'>
        <div><img src="" alt="" /><p>Quick and easy onboarding</p></div>
        <div><img src="" alt="" /><p>Quality meal choices</p></div>
        <div><img src="" alt="" /><p>Live upates on orders</p></div>
        <div><img src="" alt="" /><p>Highly rated riders</p></div>
        <div><img src="" alt="" /><p>24/7 Customer Support</p></div>
      </div>
      <div>
        {/* <Slider {...sliderSettings}>
          <div>
            <img src={phone1} alt="Phone 1" />
          </div>
          <div>
            <img src={phone2} alt="Phone 2" />
          </div>
          <div>
            <img src={phone3} alt="Phone 3" />
          </div>
          <div>
            <img src={phone4} alt="Phone 4" />
          </div>
          <div>
            <img src={phone5} alt="Phone 5" />
          </div>
          <div>
            <img src={phone6} alt="Phone 6" />
          </div>
        </Slider> */}
      </div>
    </div>
  );
}

export default Works;
