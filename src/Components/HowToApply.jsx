import React, { useState } from "react";
import Nabbar from "./Nabbar"; // Adjust path if required
import Footer from "./Footer";
function HowToApply() {
  return (
    <>
      {/* Navbar */}
      <Nabbar />


      <div className="relative min-h-screen flex items-center justify-center pt-40 pb-40 bg-gray-100">
         
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url("/HeroCarousel-pics/slider3.jpg")',
          }}
        ></div> */}

        
        <div className="relative  lg:w-[500px] md:w-[70%] sm:w-[90%] w-[95%] bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col gap-4">
             
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
              <input
                className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700"
                type="text"
                placeholder="Full Name *"
              />
              <input
                className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700"
                type="email"
                placeholder="Email Address *"
              />
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
              <input
                className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700"
                type="text"
                placeholder="Phone Number *"
              />
              <input
                className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700"
                type="text"
                placeholder="Job Position *"
              />
            </div>

            <input
              className="block w-full h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700"
              type="file"
              accept=".pdf,.doc,.docx"
            />

            <textarea
              className="block w-full h-28 border-b border-gray-300 focus:border-blue-500 outline-none px-3 py-2 text-gray-700 resize-none"
              placeholder="Additional Message or Cover Letter"
            ></textarea>

            <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-customBlue transition font-semibold">
              Submit Application
            </button>
          </div>
        </div>
      </div>
      <Footer />


    </>
  );
}

export default HowToApply;
