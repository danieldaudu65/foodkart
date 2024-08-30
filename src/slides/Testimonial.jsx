import React from 'react';
import Slider from 'react-slick';
import { testimonials } from '../constant';

// Slick Carousel settings for multiple rows
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // 5 seconds for auto-slide
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }
  ]
};
const sliderSettings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // 5 seconds for auto-slide
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }
  ]
};

const TestimonialsSlider = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">What Our Users Say</h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-xl font-bold mb-2">{testimonial.name}</p>
              <p className="italic text-gray-600 mb-4">{testimonial.type}</p>
              <p className="text-gray-800">{testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </Slider>
      <Slider {...sliderSettings2}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-xl font-bold mb-2">{testimonial.name}</p>
              <p className="italic text-gray-600 mb-4">{testimonial.type}</p>
              <p className="text-gray-800">{testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;
