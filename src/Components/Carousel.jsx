import React from 'react';

const Carousel = () => {
  return (
    <>
    <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <img src="https://imgur.com/3JG52L0.png" className="w-full min-h-20" />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img src="https://imgur.com/RAMUGMl.png" className="w-full" />
      </div>
    </div>
    </>
  );
};

export default Carousel;
