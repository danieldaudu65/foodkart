import React from 'react';
import { works } from '../constant';

const Works = () => {
  return (
    <div>
      <h2>How It Works</h2>
      <p>Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download FoodKart App, and let’s deliver happiness to your doorstep in minutes.</p>
      <div>

      </div>
      <div>
        {
          works.map((item, index) => (
            <div className='' key={index}>
                <img src= {item.imgae} alt="" />
            </div>
          ))
        }
      </div>
      <div>

      </div>
    </div>
  );
}

export default Works;
