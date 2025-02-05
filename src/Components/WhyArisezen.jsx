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
    <div className="py-10">
      <div className="text-black flex flex-col justify-center items-center md:px-48 mx-3 ">
        <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group">
          Itinerary Highlights
          {/* <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div> */}
        </p>

        <p className="text-center text-xl font-light">
        Our exchange program offers an itinerary crafted to maximize learning and cultural exchange. Here is a sample itinerary showcasing the exciting experiences included.

        </p>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-6 p-4">
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
      </div> */}


      {/* new cards style   */}
      <div className="h-full mt-4 min-h-full w-full bg-red-800 pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-2 md:gap-5">
          {/* Service Card 1 */}
          <div className="rounded-xl bg-white p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transform transition-all duration-300">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40 hover:bg-teal-500 transition-all duration-300">
              <FaPlaneArrival size={45} className="text-white" />
            </div>
            <h1 className="text-darken mb-3 uppercase text-xl font-medium lg:px-14">Day 1-3: Arrival and Introduction</h1>
            <p className="px-4 text-gray-800 text-justify">
            Arrival and a warm welcome session, followed by an orientation workshop to introduce you to the host culture. Enjoy a city tour visiting iconic landmarks and cultural hotspots.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="rounded-xl bg-white p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transform transition-all duration-300" data-aos-delay="150">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 hover:bg-rose-600 transition-all duration-300">
              <GrTechnology size={45} className="text-white" />
            </div>
            <h1 className="text-darken uppercase mb-3 text-xl font-medium lg:px-14">Day 4-7: Academic & Technological Exploration</h1>
            <p className="px-4 text-gray-700 text-justify">
            Participate in workshops and lectures at partnering institutions, gaining hands-on experience with local technological innovations. Engage in interactive sessions with local students and educators.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="rounded-xl bg-white p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transform transition-all duration-300" data-aos-delay="300">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 hover:bg-sky-600 transition-all duration-300">
              <LiaIndustrySolid size={45} className="text-white" />
            </div>
            <h1 className="text-darken uppercase mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
              Day 8-10: Cultural Activities & Industry Visits
            </h1>
            <p className="px-4 text-gray-700 text-justify">
            Attend a traditional festival or ceremony, visit leading companies in technology, manufacturing, and other relevant sectors, and explore local cuisine while learning about traditional food preparations
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="rounded-xl bg-white p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transform transition-all duration-300" data-aos-delay="300">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-[#aa81a1] shadow-purple-500/40 hover:bg-[#8a6191] transition-all duration-300">
              <FaPersonHiking size={45} className="text-white" />
            </div>
            <h1 className="text-darken uppercase mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
              Day 11-14: Adventure and Cultural Integration
            </h1>
            <p className="px-4 text-gray-700 text-justify">
            Day trips to nearby scenic or historic locations, enjoy adventure activities like hiking or local cultural performances, and conclude with group discussions and reflections on the experience.
            </p>
          </div>
        </div>
      </div>

      {/* new cards style end  */}

      {/* <div className="overflow-hidden w-full bg-transparent py-4">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-extrabold pb-1 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
            Our Alliance
          </p>
          <div className="opacity-30">
            <img width={300} src="/underline.png" alt="Underline" />
          </div>
        </div>

        <div className="flex animate-marquee space-x-8 animate-infinite-scroll">
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Blue-Prism-Delivery-Partner.png.webp"
              alt="Blue Prism Delivery Partner"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/cloud-migarator-logo.jpg.webp"
              alt="Cloud Migrator Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Google-Partner.png.webp"
              alt="Google Partner"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Group-19-1.png.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/UI-Path-Partner.png.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/microsoft-goldlogo-small.jpg.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/vm-wave-logo.jpg.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
        </div>
        <style jsx>{`
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-marquee {
    display: flex;
    animation: marquee 50s linear infinite;
  }
`}</style>

      </div> */}


      {/* <div className="overflow-hidden w-full bg-transparent py-4">
        <div className="flex animate-scroll-left-to-right space-x-8">
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Group-19-1.png.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Apple-1.png.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Automation-Anywhere.png.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="border-gray-300 transition-all duration-300 p-3 flex-shrink-0">
            <img
              src="/About-pics/Bing-Partner.png.webp"
              alt="Group 19 Logo"
              className="h-28 w-auto object-contain"
            />
          </div>

        </div>
        <style jsx>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scroll-left-to-right {
          animation: scrollLeftToRight 50s linear infinite;
        }
      `}</style>
      </div> */}



      {/* <div className="overflow-hidden w-full bg-transparent py-8">
        
        <div className="flex flex-col items-center">
          <p className="text-4xl font-extrabold pb-2 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text text-center">
            Our Alliance
          </p>
          <img width={300} src="/underline.png" alt="Underline" className="opacity-30" />
        </div>
 
        <div className="relative overflow-hidden">
          
          <div className="flex space-x-8 animate-marquee">
            {[
              "/About-pics/Blue-Prism-Delivery-Partner.png.webp",
              "/About-pics/cloud-migarator-logo.jpg.webp",
              "/About-pics/Google-Partner.png.webp",
              "/About-pics/Group-19-1.png.webp",
              "/About-pics/UI-Path-Partner.png.webp",
              "/About-pics/microsoft-goldlogo-small.jpg.webp",
              "/About-pics/vm-wave-logo.jpg.webp",
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 p-3">
                <img src={src} alt={`Partner ${index + 1}`} className="h-28 w-auto object-contain" />
              </div>
            ))}
          
            {[
              "/About-pics/Blue-Prism-Delivery-Partner.png.webp",
              "/About-pics/cloud-migarator-logo.jpg.webp",
              "/About-pics/Google-Partner.png.webp",
              "/About-pics/Group-19-1.png.webp",
              "/About-pics/UI-Path-Partner.png.webp",
              "/About-pics/microsoft-goldlogo-small.jpg.webp",
              "/About-pics/vm-wave-logo.jpg.webp",
            ].map((src, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 p-3">
                <img src={src} alt={`Duplicate Partner ${index + 1}`} className="h-28 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden mt-8">
       
          <div className="flex space-x-8 animate-marquee-reverse">
            {[
              "/About-pics/Group-19-1.png.webp",
              "/About-pics/Apple-1.png.webp",
              "/About-pics/Automation-Anywhere.png.webp",
              "/About-pics/Bing-Partner.png.webp",
              "/About-pics/Apple-1.png.webp",
              "/About-pics/Automation-Anywhere.png.webp",
              "/About-pics/Bing-Partner.png.webp",
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 p-3">
                <img src={src} alt={`Partner ${index + 1}`} className="h-28 w-auto object-contain" />
              </div>
            ))}
          
            {[
              "/About-pics/Group-19-1.png.webp",
              "/About-pics/Apple-1.png.webp",
              "/About-pics/Automation-Anywhere.png.webp",
              "/About-pics/Bing-Partner.png.webp",
              "/About-pics/Apple-1.png.webp",
              "/About-pics/Automation-Anywhere.png.webp",
              "/About-pics/Bing-Partner.png.webp",
            ].map((src, index) => (
              <div key={`dup-reverse-${index}`} className="flex-shrink-0 p-3">
                <img src={src} alt={`Duplicate Partner ${index + 1}`} className="h-28 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        
        <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    @keyframes marquee-reverse {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    .animate-marquee {
      display: flex;
      animation: marquee 30s linear infinite;
    }
    .animate-marquee-reverse {
      display: flex;
      animation: marquee-reverse 30s linear infinite;
    }
  `}</style>
      </div> */}
    </div>
  );
}

export default WhyArisezen;
