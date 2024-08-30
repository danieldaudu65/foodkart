import React from 'react';
import { iphone, playstore } from '../assets';

const GetFoodAppSlide = () => {
  return (
    <div>
      <h1>GET <span>FoodKart</span> App</h1>
      <h3>Join our growinf network </h3>
      <div>
        <div>
          <img src="" alt="" />
          <div>

          </div>
          <div>
            <h2>FoodKart Vendors</h2>
            <div>
              <div><img src={playstore} alt="" /></div>
              <div><img src={iphone} alt="" /></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>FoodKart Rider</h2>
            <div>
              <div><img src={playstore} alt="" /></div>
              <div><img src={iphone} alt="" /></div>
            </div>
          </div>
          <img src="" alt="" />
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GetFoodAppSlide;
