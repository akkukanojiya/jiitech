import React from "react";
import { MdHomeWork } from "react-icons/md";
import { FaIndustry, FaPlaneArrival, FaUserFriends } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { FaPersonHiking, FaUsers } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";






function WhyArisezen() {
  return (
    <div className="py-12">
      <div className="text-black flex flex-col justify-center items-center md:px-48 mx-3 ">
        <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text">
          Itinerary Highlights
        </p>
        <p className="text-center text-xl font-light">
          Our exchange program features an itinerary designed to maximize learning and cultural exchange. Here is a sample itinerary highlighting the experiences included

        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        <div className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-lg hover:shadow-xl bg-white rounded-lg">
          <div className="flex justify-center">
            <FaPlaneArrival size={45} className="text-gray-700" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-center pt-4 text-customBlue">
            Day 1-3: Arrival and Introduction
          </h4>
          <p className="text-sm md:text-base text-gray-600 text-center mt-2">
            Arrival and warm welcome session. Introduction to the host culture through an orientation workshop. City tour to visit iconic landmarks and cultural hotspots.
          </p>
        </div>

        <div className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-lg hover:shadow-xl bg-white rounded-lg">
          <div className="flex justify-center">
            <GrTechnology size={45} className="text-gray-700" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-center pt-4 text-customBlue">
            Day 4-7: Academic & Technological Exploration
          </h4>
          <p className="text-sm md:text-base text-gray-600 text-center mt-2">
            Participation in workshops and lectures at partnering institutions. Hands-on experience with local innovations in technology. Interaction sessions with local students and educators.
          </p>
        </div>

        <div className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-lg hover:shadow-xl bg-white rounded-lg">
          <div className="flex justify-center">
            <LiaIndustrySolid size={45} className="text-gray-700" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-center pt-4 text-customBlue">
            Day 8-10: Cultural Activities & Industry Visits
          </h4>
          <p className="text-sm md:text-base text-gray-600 text-center mt-2">
            Attend a traditional festival or ceremony. Industry visits to leading companies in technology, manufacturing, or other relevant sectors. Explore local cuisine and learn about traditional food preparations.
          </p>
        </div>

        <div className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-lg hover:shadow-xl bg-white rounded-lg">
          <div className="flex justify-center">
            <FaPersonHiking size={45} className="text-gray-700" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-center pt-4 text-customBlue">
            Day 11-14: Adventure and Cultural Integration
          </h4>
          <p className="text-sm md:text-base text-gray-600 text-center mt-2">
            Day trips to nearby scenic or historic locations. Experience adventure activities like hiking or local cultural performances. Final group discussions and reflections on the experience.
          </p>
        </div>
      </div>


 


    


    </div>
  );
}

export default WhyArisezen;
