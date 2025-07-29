import React from "react";
import mainVideo from '../images/video.mp4'; 

function Hero() {
  return (
    <section className="relative h-[80vh] w-full mt-0 overflow-hidden">
      
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={mainVideo}
        autoPlay
        loop
        muted
        playsInline
      />

    

     
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h2 className="text-4xl font-bold text-white uppercase mb-4">
          Welcome to CarDealz
        </h2>
        <p className="text-xl text-red-600 font-bold" >Find Your Dream Ride</p>
      </div>
    </section>
  );
}

export default Hero;
