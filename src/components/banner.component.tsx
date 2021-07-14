import React from 'react';
const Banner = () => (
  <div className="home-banner">
    <div className="flex h-full pl-20 w-1/2 justify-start items-center bg-gradient-to-r from-black to-transparent ">
      <div className="flex flex-col justify-start space-y-3 text-left">
        <h1 className="text-4xl">Juniors make IT work.</h1>
        <p>Hire and invest highly skilled juniors now.</p>
        <button className="shadow-blue opacity-90 bg-blue-500 text-white font-bold rounded-sm w-max px-6 py-2">
          Post Offer Now
        </button>
      </div>
    </div>
  </div>
);
export default Banner;