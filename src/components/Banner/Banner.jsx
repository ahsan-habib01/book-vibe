import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-10 mt-10 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold py-7">
            Where Words Create Worlds Beyond Imagination!
          </h1>
          {/* <p className="py-6">
            Books connect hearts and minds across time, offering stories that
            inspire, educate, and shape the way we understand our world.
          </p> */}
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;