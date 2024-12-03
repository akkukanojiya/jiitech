import React, { useEffect, useState } from "react";

function OurProduct() {
  const [objects, setObjects] = useState([]);

  const tab = [
    <div className="pt-14 p-5 flex items-center justify-center flex-row flex-wrap gap-2 ">
      {/* <div className="flex flex-col md:flex-row gap-4 justify-center">

        <div className="h-auto md:h-80 w-full md:w-2/5 rounded-lg border shadow-md shadow-red-400 p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 relative">
          <div className="flex flex-row z-10">
            <div className="flex flex-col justify-center">
              <p className="font-bold p-4">Student Exchange Program</p>
              <p className="p-4">
                Our Student Exchange Program is designed to provide students with life-changing opportunities to live and learn in another culture. Participants can explore different academic environments, experience cultural activities, and forge lifelong friendships.
              </p>
            </div>
          </div>
          
        </div>




        <div className="h-auto md:h-80 w-full md:w-2/5 rounded-lg border shadow-md shadow-red-400 p-4 transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center">
              <p className="font-bold p-4">Highlights of the Student Exchange Program:</p>
              <p className="p-4">
                Cultural Immersion: Explore local traditions, food, festivals, and customs for an authentic cultural experience.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="h-auto md:h-80 w-full md:w-2/5 rounded-lg border shadow-md shadow-red-400 p-4 transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="flex flex-row">

            <div className="flex flex-col justify-center">
              <p className="font-bold p-4">Academic Exposure</p>
              <p className="p-4">Attend lectures, seminars, and workshops to understand the educational approaches of Japan or India. Visit schools, universities,  and research institutes. Group and One-to-one interactions to answer curiosities and questions about living and work cultures</p>
            </div>
          </div>
        </div>

        <div className="h-auto md:h-80 w-full md:w-2/5 rounded-lg border shadow-md shadow-red-400 p-4 transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="flex flex-row">

            <div className="flex flex-col justify-center">
              <p className="font-bold p-4"> Innovation & Technology Workshops</p>
              <p className="p-4"> Participate in hands-on sessions to learn about cutting-edge technologies and innovations shaping the future. Opportunity to intern at prestigious companies.</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="h-auto md:h-80 w-full md:w-2/5 rounded-lg border shadow-md shadow-red-400 p-4 transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="flex flex-row">

            <div className="flex flex-col justify-center">
              <p className="font-bold p-4">Industry Visits</p>
              <p className="p-4">Experience the environment of leading industries through company visits and talks by professionals</p>
            </div>
          </div>
        </div>

        <div className="h-auto md:h-80 w-full md:w-2/5 rounded-lg border shadow-md shadow-red-400 p-4 transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="flex flex-row">

            <div className="flex flex-col justify-center">
              <p className="font-bold p-4"> Homestays</p>
              <p className="p-4">Experience local hospitality through homestay options, allowing students to understand family life in a different culture.</p>
            </div>
          </div>
        </div>
      </div> */}




      {/* new card design  */}

      <div className="flex flex-wrap gap-8 p-8 justify-center items-center">
        {/* Card 1 */}
        <div className="group w-full sm:w-96 md:w-[28rem] h-80 sm:h-[20rem] md:h-[24rem] bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl p-8 shadow-xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold mt-4 group-hover:text-orange-700 transition-colors duration-300">
            Student Exchange Program
          </h3>
          <p className="text-sm md:text-base text-gray-700 mt-3">
            Our Student Exchange Program is designed to provide students with life-changing opportunities to live and learn in another culture. Participants can explore different academic environments, experience cultural activities, and forge lifelong friendships.
          </p>
          <button className="text-orange-600 font-semibold mt-6 group-hover:underline transition-all duration-300">
            Learn more →
          </button>
          <div className="absolute top-8 right-8 w-32 h-32 bg-orange-300/50 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        </div>

        {/* Card 2 */}
        <div className="group w-full sm:w-96 md:w-[28rem] h-80 sm:h-[20rem] md:h-[24rem] bg-gradient-to-br from-purple-200 to-purple-400 rounded-xl p-8 shadow-xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold mt-4 group-hover:text-purple-700 transition-colors duration-300">
            Highlights of the Program
          </h3>
          <p className="text-sm md:text-base text-gray-700 mt-3">
            Cultural Immersion: Explore local traditions, food, festivals, and customs for an authentic cultural experience.
          </p>
          <button className="text-purple-600 font-semibold mt-6 group-hover:underline transition-all duration-300">
            Learn more →
          </button>
          <div className="absolute top-12 right-8 w-32 h-14 bg-white/50 rounded-t-full group-hover:translate-y-[-10px] transition-transform duration-300"></div>
        </div>

        {/* Card 3 */}
        <div className="group w-full sm:w-96 md:w-[28rem] h-80 sm:h-[20rem] md:h-[24rem] bg-gradient-to-br from-green-200 to-green-400 rounded-xl p-8 shadow-xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold mt-4 group-hover:text-green-700 transition-colors duration-300">
            Academic Exposure
          </h3>
          <p className="text-sm md:text-base text-gray-700 mt-3">
            Attend lectures, seminars, and workshops to understand the educational approaches of Japan or India. Visit schools, universities, and research institutes. Group and one-to-one interactions to answer curiosities and questions about living and work cultures.
          </p>
          <button className="text-green-600 font-semibold mt-6 group-hover:underline transition-all duration-300">
            Learn more →
          </button>
          <div className="absolute top-8 right-8 w-16 h-20 bg-white/50 rounded-lg group-hover:rotate-12 transition-transform duration-300"></div>
        </div>

        {/* Card 4 */}
        <div className="group w-full sm:w-96 md:w-[28rem] h-80 sm:h-[20rem] md:h-[24rem] bg-gradient-to-br from-pink-200 to-pink-400 rounded-xl p-8 shadow-xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold mt-4 group-hover:text-pink-700 transition-colors duration-300">
            Innovation & Technology Workshops
          </h3>
          <p className="text-sm md:text-base text-gray-700 mt-3">
            Participate in hands-on sessions to learn about cutting-edge technologies and innovations shaping the future. Opportunity to intern at prestigious companies.
          </p>
          <button className="text-pink-600 font-semibold mt-6 group-hover:underline transition-all duration-300">
            Learn more →
          </button>
          <div className="absolute top-8 right-8 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[90px] border-b-white/50 group-hover:rotate-45 transition-transform duration-300"></div>
        </div>
      </div>




      {/* new card design end */}
      {/* <div class="h-80 w-96 rounded-lg border">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  py-3">
            <img src="/OurProducts/Business/flight.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold p-4">Industry Visits</p>
            <p className="p-4">Experience the environment of leading industries through company visits and talks by professionals.</p>
          </div>
        </div>
      </div> */}
      {/* <div class="h-80 w-96 rounded-lg border">
        <div className="flex flex-row">
           
          <div className="flex flex-col justify-center">
            <p className="font-bold p-4"> Homestays</p>
            <p className="p-4">Experience local hospitality through homestay options, allowing students to understand family life in a different culture.</p>
          </div>
        </div>
      </div> */}
      {/* <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  py-3">
            <img src="/OurProducts/Business/hr4.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">HR Manager</p>
            <p>Human Resource Management System HR Software (HRMS)</p>
          </div>
        </div>
      </div> */}
      {/* <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/inventory.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"> Wholesale</p>
            <p> Inventory Control and Inventory Management System</p>
          </div>
        </div>
      </div> */}

      {/* <div class="h-28 w-96 rounded-lg border  bg-gradient-to-r from-teal-400 to-indigo-600">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Business/vms.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"> VSG </p>
            <p> Vehicle Management System</p>
          </div>
        </div>
      </div> */}
    </div>,

    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/crypto.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold p-4">Nishue</p>
            <p>CryptoCurrency Buy Sell Exchange and Lending with MLM System</p>
          </div>
        </div>
      </div>

      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/cryptoW.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">ICO Wallet</p>
            <p>
              ICO Script | Complete ICO Software and Token Launching Solution
            </p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/exchange.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold"></p>
            <p>Tradebox CryptoCurrency Buy Sell and Trading Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/BlockChain/token.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Tokenbox</p>
            <p>Best Security Token Offering Platform (STO)</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 px-2 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Hospitality/flight.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Flight Booking</p>
            <p>Flight Booking Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Hospitality/manager.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Bhojan</p>
            <p>Restaurant Management Software with Restaurant Website</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Hospitality/managerH.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Xain</p>
            <p>Hotel Management System & Booking Software</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="px-2 pt-14 flex items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/E-Commerce/cashier.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Isshue</p>
            <p>Multi Store eCommerce Shopping Cart Solution</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/E-Commerce/shopping-cart.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Storefex</p>
            <p>Multi Vendor Marketplace Platform</p>
          </div>
        </div>
      </div>
    </div>,

    <div className="pt-14 flex px-2 items-center justify-center flex-row flex-wrap gap-2">
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/clinic.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Hospital Automanager</p>
            <p>Advance Hospital Management System Software</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/doctor.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Hospital</p>
            <p>Hospital Management System with Website</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/Healthcare/domain-registration.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Pharma Care</p>
            <p>Pharmacy Software Made Easy</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/Healthcare/healthcare1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Multi-Hospital</p>
            <p>Best Hospital Management System (SaaS App)</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img
              src="/OurProducts/Healthcare/management-service.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Clinic365</p>
            <p>Clinic Management System</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/payment.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">Doctors</p>
            <p>Doctor Appointment and Prescription System with Website</p>
          </div>
        </div>
      </div>
      <div class="h-28 w-96 rounded-lg border bg-gradient-to-r from-gray-200 to-blue-300">
        <div className="flex flex-row">
          <div className="h-28 w-24  flex justify-center items-center  p-3">
            <img src="/OurProducts/Healthcare/pharmacy.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">G-Priscription</p>
            <p>Gynaecology & OBS Consultation Software</p>
          </div>
        </div>
      </div>
    </div>,
  ];

  useEffect(() => {
    setObjects(tab[0]);
  }, []);

  return (
    <>
      <div className="my-10">
        <div className="flex text-center flex-col px-4 py-8">
          <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text  ">Programs We Offer

          </p>
          <p className="text-xl font-light">
            Our goal is to To foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. Our goal is We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap text-white font-semibold gap-4 ">
          <button
            class="bg-customBlue hover:bg-customLiteBlue px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[0])}
          >
            Student Exchange Program
          </button>

          <button
            class="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[1])}
          >
            Highlights of the Student Exchange Program:
          </button>

          <button
            class="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[2])}
          >
            Academic Exposure
          </button>

          <button
            class="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl"
          // onClick={() => setObjects(tab[3])}
          >
            Innovation & Technology Workshops
          </button>

          <button
            class="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl "
          // onClick={() => setObjects(tab[4])}
          >
            Industry Visits
          </button>
          <button
            class="bg-customBlue hover:bg-customLiteBlue  px-8 py-1.5 rounded-xl "
          // onClick={() => setObjects(tab[4])}
          >
            Homestays
          </button>
        </div>

        <div> {objects}</div>

        <div></div>
      </div>
    </>
  );
}

export default OurProduct;
