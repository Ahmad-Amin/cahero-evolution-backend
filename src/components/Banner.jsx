import React from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './Navbar';
// import LoginedNavbar from './LoginedNavbar'; 

function Banner() {
  // const currentUser = useSelector((state) => state.auth.user); 

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* {currentUser ? <LoginedNavbar position='absolute' /> : <Navbar position='absolute' />} */}
      <img 
        src={`${process.env.PUBLIC_URL}/images/banner.png`} 
        alt="" 
        className="w-full h-[80vh] md:h-[60vh] lg:h-[50vh] xl:h-[50vh] object-cover scale-105" 
      />
      <div className="absolute bottom-0 left-0 mb-14 p-4 ml-8 text-left">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-5">Morning Peace</h1>
        <p className="text-white text-sm md:text-md lg:text-lg font-normal mb-7">Guided Meditation | 10 min</p>
        <button className="bg-[#44ae4b] hover:bg-[#307b35] ease-in-out transition duration-300 px-5 h-12 rounded-lg font-semibold text-white text-lg">Start</button>
      </div>
    </div>
  );
}

export default Banner;
