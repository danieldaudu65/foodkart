import React from 'react';
import Slider from 'react-slick';
import { works } from '../constant';
import { phone1, phone2, phone3, phone4, phone5, phone6, workbg } from '../assets';

// Slick Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,           // Enable autoplay
  autoplaySpeed: 3000       // Set the speed (in milliseconds) for autoplay
};

const Works = () => {
  return (
    <div className='relative bg-black text-white'>
      <img src= {workbg} className='absolute top-[-5px] mb-5' alt="" />
      <h2>How It Works</h2>
      <p>
        Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download FoodKart App, and let’s deliver happiness to your doorstep in minutes.
      </p>
      <div>
        {works.map((item, index) => (
          <div className='work-item' key={index}>
            <h3>{item.number}. {item.title}</h3>
            <img src={item.imgae[0]} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Phone Gallery</h3>
        <Slider {...sliderSettings}>
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
        </Slider>
      </div>
    </div>
  );
}

export default Works;
