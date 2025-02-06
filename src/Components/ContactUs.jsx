import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MapPin, Phone, Mail } from 'lucide-react';
import React, { useEffect } from "react";
// import { IoLocationSharp } from "react-icons/io5";

import { IoMdPerson } from "react-icons/io";
import Nabbar from "./Nabbar";

import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const iconSize = 24;
  return (
    <div>
      <div className="w-full">
        <Nabbar />
      </div>

      <div className=" h-80 flex relative">
        <img
          src="/contact us.jpg"
          className=" w-full object-cover opacity-20"
        />
        <div className="absolute  text-2xl sm:text-5xl font-train flex flex-col h-full justify-center text-center items-center w-full  text-[#dc2626] bg-clip-text">
          <p>Contact us</p>

        </div>
      </div>






      {/* <div className="bg-gradient-to-b from-customBlue to-white px-4 sm:px-6 md:px-12">
  <div className="py-8 text-center text-white text-lg sm:text-xl">
    <p>
      We’d love to hear from you! If you have any questions, feel free to reach out.
    </p>
    <p className="mt-2">
      Please stay connected with us on Social Media to get the latest updates on upcoming programs and events!
    </p>
  </div>

  <div className="bg-white sm:p-12 p-6 rounded-3xl flex flex-col sm:flex-row sm:gap-8 gap-6 items-stretch">
     
    <div className="bg-customLiteBlue sm:h-auto text-white sm:w-2/5 rounded-3xl p-6 flex flex-col gap-6">
      <p className="font-bold text-xl">Get in Touch</p>

      <div className="flex gap-3 items-center">
        <IoLocationSharp size={30} />
        <div>
          <p>JIITECH Headquarters, Tokyo, Japan</p>
          <p>JIITECH Headquarters, Ahmedabad, India</p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <MdCall size={30} />
        <div>
          <p>+81-8064262379 (Japan)</p>
          <p>+91-9327123451 (India)</p>
          <p>+91-9033211100 (India)</p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <HiOutlineMailOpen size={30} />
        <p>info@jiitech.jp</p>
      </div>

      <div className="flex gap-4 text-white-700">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={40} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={40} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size={40} />
        </a>
      </div>
    </div>

    
    <div className="sm:w-3/5 flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="py-4 border rounded-xl flex items-center px-3">
          <IoMdPerson className="text-gray-400 w-5" />
          <input
            type="text"
            placeholder="First name"
            className="outline-none flex-1 px-2 text-sm"
          />
        </div>

        <div className="py-4 border rounded-xl flex items-center px-3">
          <IoMdPerson className="text-gray-400 w-5" />
          <input
            type="text"
            placeholder="Last name"
            className="outline-none flex-1 px-2 text-sm"
          />
        </div>

        <div className="py-4 border rounded-xl flex items-center px-3">
          <HiOutlineMailOpen className="text-gray-400 w-5" />
          <input
            type="text"
            placeholder="Email address"
            className="outline-none flex-1 px-2 text-sm"
          />
        </div>

        <div className="py-4 border rounded-xl flex items-center px-3">
          <FaPhoneAlt className="text-gray-400 w-5" />
          <input
            type="text"
            placeholder="Phone number"
            className="outline-none flex-1 px-2 text-sm"
          />
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden">
        <textarea
          placeholder="Write description..."
          className="px-4 py-2 outline-none w-full h-32 resize-none text-sm"
        ></textarea>
      </div>

      <div className="flex justify-center sm:justify-start">
        <button className="bg-customBlue px-6 py-3 hover:bg-customLiteBlue transition-all duration-300 rounded-xl text-white font-bold">
          Submit Message
        </button>
      </div>
    </div>
  </div>
</div> */}



      {/* second option  */}
      <div className="relative group w-full bg-gradient-to-br from-red-100 via-red-200 to-green-300 rounded-3xl p-12 shadow-xl overflow-hidden ">
        <div className="absolute  ">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400 via-red-300 to-green-400 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-green-400 via-red-300 to-orange-400 opacity-25 rounded-full"></div>
        </div>
        <div className="py-8 text-center text-black text-lg sm:text-xl md:text-2xl">

          <p>
            We’d love to hear from you! If you have any questions, feel free to reach out.
          </p>
          <p className="mt-2">
            Please stay connected with us on Social Media to get the latest updates on upcoming programs and events!
          </p>
        </div>

        <div className="bg-white  sm:p-8 lg:p-12 p-6 rounded-3xl flex flex-row lg:flex-row lg:gap-12 gap-6 items-stretch max-w-screen-xl mx-auto ">
          {/* Left Section */}
          <div className="bg-customBlue lg:h-auto text-white lg:w-1/3 rounded-3xl p-4 flex flex-col gap-2">
            <h2 className="font-bold text-xl md:text-2xl">Get in Touch</h2>

            {/* Japan Office */}
            <div className="flex items-start gap-3">
              <MapPin size={iconSize} className="flex-shrink-0 mt-1" />
              <div>
                <p>JIITECH Headquarters<br />
                  3-37-7-210 Yoyogi<br />
                  Shibuya, Tokyo<br />
                  Japan</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={iconSize} className="flex-shrink-0" />
              <p>+81-8064262379</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={iconSize} className="flex-shrink-0" />
              <p>info@jiitech.jp</p>
            </div>

            {/* India Office */}
            <div className="flex items-start gap-3 mt-4">
              <MapPin size={iconSize} className="flex-shrink-0 mt-1" />
              <div>
                <p>JIITECH Headquarters<br />
                  Cherish Eduskills<br />
                  615 - 617 Sanskrit Galleria<br />
                  Gurukul<br />
                  Ahmedabad - 380015<br />
                  India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={iconSize} className="flex-shrink-0 mt-1" />
              <div>
                <p>+91-9327123451<br />
                  +91-9033211100</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={iconSize} className="flex-shrink-0" />
              <p>info@jiitech.jp</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 flex flex-col gap-6 ">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="py-4 border rounded-xl flex items-center px-3">
                <IoMdPerson className="text-gray-400 w-5" />
                <input
                  type="text"
                  placeholder="First name"
                  className="outline-none flex-1 px-2 text-sm"
                />
              </div>

              <div className="py-4 border rounded-xl flex items-center px-3">
                <IoMdPerson className="text-gray-400 w-5" />
                <input
                  type="text"
                  placeholder="Last name"
                  className="outline-none flex-1 px-2 text-sm"
                />
              </div>

              <div className="py-4 border rounded-xl flex items-center px-3">
                <HiOutlineMailOpen className="text-gray-400 w-5" />
                <input
                  type="text"
                  placeholder="Email address"
                  className="outline-none flex-1 px-2 text-sm"
                />
              </div>

              <div className="py-4 border rounded-xl flex items-center px-3">
                <FaPhoneAlt className="text-gray-400 w-5" />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="outline-none flex-1 px-2 text-sm"
                />
              </div>
            </div>

            {/* Description Box */}
            <div className="border rounded-xl overflow-hidden">
              <textarea
                placeholder="Write description..."
                className="px-4 py-2 outline-none w-full h-32 resize-none text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-customBlue px-8 py-3 hover:bg-customLiteBlue transition-all duration-300 rounded-xl text-white font-bold">
                Submit 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second option end */}

      <Footer />
    </div>
  );
};

export default ContactUs;
