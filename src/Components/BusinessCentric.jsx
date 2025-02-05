import React from "react";

 
function BusinessCentric() {
  return (
    <div className="px-2  py-14">
    
      <div className="flex flex-col sm:flex-row-reverse px-6 sm:px-12 items-center justify-center sm:justify-evenly rounded-xl py-16 mx-6 my-10 bg-white shadow-2xl absolute top-10 left-10 w-36 h-36 sm:w-72 sm:h-56 bg-pink-400 opacity-20 rounded-full filter blur-3xl animate-pulse absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-56 bg-red-400 opacity-20 rounded-full filter blur-3xl animate-pulse">
      
        <div className="sm:w-1/2 py-4  sm:text-left text-black">
          <p className="text-4xl font-train pb-4   text-[#dc2626] bg-clip-text relative group">
            Why Choose JIITECH?
             
          </p>
          <p className="text-lg sm:text-xl font-sm leading-relaxed mb-6 text-customBlue text-justify text-justify">
            
          JIITECH was conceived out of a deep passion for both Japan and India by our peers, who bring over three decades of experience in learning and performing in both countries. We aim to blend Japan's values of patience, punctuality, perfection, perseverance, and professionalism with the energy, elegance, and innovation of India's dynamic young minds. Our programs go beyond academics—they are designed to nurture creativity, problem-solving, and intercultural understanding from both Indian and Japanese perspectives, fostering opportunities for exchange in education, recruitment, and business on both sides.

          </p>
 
          {/* <button className="mt-6 bg-gradient-to-r from-red-400 to-customBlue text-white px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-l hover:from-customBlue  hover:to-red-500 shadow-lg hover:scale-105">
          <a href="#"> Join Us Now</a>
           
          </button> */}
        </div>
        <div className="sm:w-2/5 sm:mt-0 mt-8 flex justify-center relative">
          <div className="absolute inset-0  opacity-20 rounded-lg blur-sm"></div>
          <img className="rounded-xl   transform transition duration-500 hover:scale-110 hover:rotate-3" src="/why choose us.png" alt="Why Choose JIITECH" />
        </div>
      </div>
    </div>


  );
}

export default BusinessCentric;
