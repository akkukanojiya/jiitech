import React from "react";

 
function BusinessCentric() {
  return (
    <div className="px-2  py-14">
    

      {/* <div className="flex flex-col sm:flex-row px-6 pt-0 mt-1 sm:px-12 items-center justify-evenly rounded-lg py-16 mx-4 my-6 bg-white shadow-2xl space-y-12 sm:space-y-0 sm:space-x-8 transform transition-all hover:scale-105">
        <div className="sm:w-1/2 sm:text-left">
          <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text">
            Our Mission
            <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
          </p>
          <p className="text-lg black-red-600 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-justify">
            Our goal is to foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.
          </p>
        </div>
        <div className="sm:w-2/5 flex justify-center sm:justify-center">
          <img src="/ourmission.png" alt="Our Mission" className="w-full max-w-sm rounded-lg   transition-all transform hover:scale-110 hover:rotate-4" />
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row-reverse px-6 sm:px-12 items-center justify-center sm:justify-evenly rounded-xl py-16 mx-6 my-10 bg-white shadow-2xl">
        <div className="sm:w-1/2 py-4  sm:text-left text-black">
          
          
          <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group">
            Why Choose JIITECH?
            {/* <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div> */}
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-customBlue text-justify text-justify">
            
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
