import React from "react";

const OurMission = () => {
  return (
    //     <div className="flex flex-col lg:flex-row items-center justify-center bg-white shadow-2xl pt-40 lg:pt-32 rounded-lg px-6 py-12 sm:px-12 lg:px-16 xl:px-24 mx-4 my-6 space-y-6 lg:space-y-0 lg:gap-16 max-w-7xl mx-auto">
    //   {/* Text Section */}
    //   <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
    //     <p className="text-4xl font-train pb-4 text-[#dc2626] bg-clip-text">
    //       Our Mission
    //     </p>
    //     <p className="text-lg text-customBlue font-sm leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-justify">
    //       Japan India Innovation Technology Education Cultural Hub (JIITECH) is a pioneering initiative bridging the cultures of Japan and India through education, technology, and cultural exchange.
    //       Our goal is to inspire creativity, foster innovation, and promote intercultural understanding through immersive exchange programs, educational initiatives, and technological partnerships. By offering unique opportunities to engage with both Japanese and Indian cultures, we aim to broaden the global perspective of students.
    //     </p>
    //   </div>

    //   {/* Image Section */}
    //   <div className="lg:w-2/5 flex justify-center">
    //     <img
    //       src="/In.png"
    //       alt="Our Mission"
    //       className="w-full max-w-md transition-transform transform hover:scale-110 hover:rotate-2 object-cover shadow-lg"
    //     />
    //   </div>
    // </div>




    // new mission 
    <div className="px-2  py-14">

      <div className="flex flex-col sm:flex-row-reverse px-6 sm:px-12 items-center justify-center sm:justify-evenly rounded-xl py-16 mx-6 my-10 bg-white shadow-2xl  ">

        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <p className="text-4xl font-train pb-4   text-[#dc2626] bg-clip-text relative group">
            Our Mission

          </p>
          <p className="text-lg sm:text-xl font-sm leading-relaxed mb-6 text-customBlue text-justify text-justify">

            Japan India Innovation Technology Education Cultural Hub (JIITECH) is a pioneering initiative bridging the cultures of Japan and India through education, technology, and cultural exchange.
            Our goal is to inspire creativity, foster innovation, and promote intercultural understanding through immersive exchange programs, educational initiatives, and technological partnerships. By offering unique opportunities to engage with both Japanese and Indian cultures, we aim to broaden the global perspective of students

          </p>



        </div>
        <div className="sm:w-2/5 sm:mt-0 mt-8 flex justify-center relative">
          <div className="absolute inset-0  opacity-20 rounded-lg blur-sm"></div>
          <img className="rounded-xl   transform transition duration-500 hover:scale-110 hover:rotate-3" src="/In.png" alt="Our Mission" />
        </div>
      </div>
    </div>
    // new mission end

  );
};

export default OurMission;
