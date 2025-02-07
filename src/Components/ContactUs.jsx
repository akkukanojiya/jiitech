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





 


      {/* second option  */}
      <div className="relative group w-full bg-gradient-to-br from-red-100 via-red-200 to-green-300 rounded-3xl p-6 sm:p-12 shadow-xl overflow-hidden">
      <div className="absolute">
        <div className="absolute -top-16 -left-16 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-br from-orange-400 via-red-300 to-green-400 opacity-20 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-60 sm:w-96 h-60 sm:h-96 bg-gradient-to-tl from-green-400 via-red-300 to-orange-400 opacity-25 rounded-full"></div>
      </div>
      <div className="py-6 sm:py-8 text-center text-black text-base sm:text-lg md:text-2xl">
        <p>We’d love to hear from you! If you have any questions, feel free to reach out.</p>
        <p className="mt-2">Stay connected on Social Media for updates on programs and events!</p>
      </div>
      <div className="bg-white p-4 sm:p-6 lg:p-12 rounded-3xl flex flex-col lg:flex-row gap-6 items-stretch max-w-screen-xl mx-auto">
        <div className="bg-customBlue text-white lg:w-1/3 rounded-3xl p-4 flex flex-col gap-2">
          <h2 className="font-bold text-lg md:text-2xl">Get in Touch</h2>
          <div className="flex items-start gap-3">
            <MapPin size={28} className="mt-1" />
            <p>JIITECH HQ, 3-37-7-210 Yoyogi, Shibuya, Tokyo, Japan</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <p>+81-8064262379</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <p>info@jiitech.jp</p>
          </div>
          <div className="flex items-start gap-3 mt-4">
            <MapPin size={28} className="mt-1" />
            <p>JIITECH HQ, 615-617 Sanskrit Galleria, Ahmedabad, India</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={20} className="mt-1" />
            <p>+91-9327123451</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={20} className="mt-1" />
            <p>+91-9033211100</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <p>info@jiitech.jp</p>
          </div>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-3 border rounded-xl flex items-center px-3">
              <IoMdPerson className="text-gray-400 w-5" />
              <input type="text" placeholder="First name" className="outline-none flex-1 px-2 text-sm" />
            </div>
            <div className="py-3 border rounded-xl flex items-center px-3">
              <IoMdPerson className="text-gray-400 w-5" />
              <input type="text" placeholder="Last name" className="outline-none flex-1 px-2 text-sm" />
            </div>
            <div className="py-3 border rounded-xl flex items-center px-3">
              <HiOutlineMailOpen className="text-gray-400 w-5" />
              <input type="text" placeholder="Email address" className="outline-none flex-1 px-2 text-sm" />
            </div>
            <div className="py-3 border rounded-xl flex items-center px-3">
              <FaPhoneAlt className="text-gray-400 w-5" />
              <input type="text" placeholder="Phone number" className="outline-none flex-1 px-2 text-sm" />
            </div>
          </div>
          <div className="border rounded-xl overflow-hidden">
            <textarea placeholder="Write description..." className="px-4 py-2 outline-none w-full h-32 resize-none text-sm"></textarea>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-customBlue px-6 sm:px-8 py-2 sm:py-3 hover:bg-customLiteBlue transition-all duration-300 rounded-xl text-white font-bold">Submit</button>
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
