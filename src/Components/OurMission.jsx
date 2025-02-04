import React from "react";

const OurMission = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-white shadow-2xl rounded-lg px-6 py-12 sm:px-12 mx-4 my-6 space-y-6 sm:space-y-0 sm:gap-12 transition-transform transform hover:scale-105">
      
      {/* Text Section */}
      <div className="sm:w-1/2 flex flex-col justify-center  sm:text-left">
        <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-600 text-transparent bg-clip-text">
          Our Mission
          <div className="opacity-30 flex justify-center sm:justify-start">
            {/* <img width={250} src="/underline.png" alt="Underline" /> */}
          </div>
        </p>
        <p className="text-lg text-customBlue leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
          Our goal is to inspire creativity, foster innovation, and promote intercultural understanding through immersive exchange programs, educational initiatives, and technological partnerships. By offering unique opportunities to engage with both Japanese and Indian cultures, we aim to broaden the global perspective of students.
        </p>
      </div>

      {/* Image Section */}
      <div className="sm:w-2/5 flex justify-center">
        <img
          src="/ourmission.png"
          alt="Our Mission"
          className="w-full max-w-md rounded-lg transition-transform transform hover:scale-110 hover:rotate-2 object-cover"
        />
      </div>

    </div>
  );
};

export default OurMission;
