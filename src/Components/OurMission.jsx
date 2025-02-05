import React from "react";

const OurMission = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-[#fdfdfd] shadow-2xl pt-40 rounded-lg px-6 py-12 sm:px-12 mx-4 my-6 space-y-6 sm:space-y-0 sm:gap-12 transition-transform transform hover:scale-105">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-36 h-36 sm:w-72 sm:h-56 bg-pink-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-56 bg-red-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      {/* Text Section */}
      <div className="sm:w-1/2 flex flex-col justify-center  sm:text-left">
        <p className="text-4xl font-train pb-4  text-[#dc2626] bg-clip-text">
          Our Mission

        </p>
        <p className="text-lg text-customBlue font-sm leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-justify">
          Japan India Innovation Technology Education Cultural Hub (JIITECH) is a pioneering initiative bridging the cultures of Japan and India through education, technology, and cultural exchange.
          Our goal is to inspire creativity, foster innovation, and promote intercultural understanding through immersive exchange programs, educational initiatives, and technological partnerships. By offering unique opportunities to engage with both Japanese and Indian cultures, we aim to broaden the global perspective of students.

        </p>
      </div>

      {/* Image Section */}
      <div className="sm:w-2/5 flex justify-center">
        <img
          src="/In.png"
          alt="Our Mission"
          className="w-full max-w-md   transition-transform transform hover:scale-110 hover:rotate-2 object-cover"
        />
      </div>

    </div>
  );
};

export default OurMission;
