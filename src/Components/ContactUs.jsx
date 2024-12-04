import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";

import { IoMdPerson } from "react-icons/io";
import Nabbar from "./Nabbar";

import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="absolute  text-2xl sm:text-5xl font-bold flex flex-col h-full justify-center text-center items-center w-full  bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text">
          <p>Contact us</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-customBlue to-white  px-3">
        <div className="py-8 text-center text-white text-xl">
          <p>
          We’d love to hear from you! If you have any questions, feel free to reach out
          </p>
          <p>
          Please sStay connected with us on Social Media to get the latest updates on upcoming programs and events!
          </p>
        </div>

        <div className="bg-white sm:p-14 p-8  rounded-3xl flex flex-col sm:flex-row  ">
          <div className="bg-customLiteBlue h-screen text-white sm:w-2/5  rounded-3xl p-10  flex flex-col gap-3  ">
            <div>
              <p className="font-bold text-xl"> Get in touch</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <IoLocationSharp size={40} className="text-white-700" />
              <p>
              JIITECH Headquarters, Tokyo, Japan 
              </p>
              <p>
              JIITECH Headquarters, Ahmedabad, India
              </p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <MdCall size={27} className="text-white-700" />
              <p>+81-8064262379 (Japan)</p>
              <p>+91-9327123451 (India)  +91-9033211100 (India)</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <HiOutlineMailOpen size={28} className="text-white-700" />
              <p> info@jiitech.jp</p>
            </div>  

            <div className="flex gap-3 py-6 text-white-700 ">
              <FaFacebookSquare size={40} />

              <div>
                <a
                  href="https://www.instagram.com/arisezen2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={40} />
                </a>
              </div>
              <FaYoutube size={40} />
              <div>
                <a
                  href="https://www.linkedin.com/showcase/arisezen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin size={40} />
                </a>
              </div>
            </div>
          </div>

          <div className=" sm:w-2/3 sm:px-4 pt-4 pb-10 ">
            {/* <div>
              <p className="font-bold text-xl">Primary Information</p>
            </div> */}

            <div className="flex flex-wrap  justify-center gap-3 py-3 ">
              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80">
                <IoMdPerson className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Frist name"
                  className="outline-none w-5/6 px-1"
                />
              </div>

              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80  ">
                <IoMdPerson className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last name"
                  className="outline-none w-5/6 px-1"
                />
              </div>
              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80 ">
                <HiOutlineMailOpen className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Email address"
                  className="outline-none w-5/6 px-1"
                />
              </div>
              <div className="py-4 border rounded-xl  outline-none flex justify-start items-center w-80 ">
                <FaPhoneAlt className=" w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="outline-none w-5/6 px-1"
                />
              </div>
            </div>

            <div className=" border rounded-xl  outline-none  h-52  w-full">
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="Write description..."
                rows="10"
                className="rounded-xl px-4 outline-none py-2 w-full h-full"
              />
              <button className="bg-customBlue sm:px-6 hover:bg-customLiteBlue transition-all duration-500 rounded-xl text-white font-bold py-2 sm:w-56 w-1/2 ">
            Submit Message
          </button>
            </div>
          </div>
        </div>

        {/* <div className="flex sm:justify-end py-3 gap-2 justify-center sm:text-lg text-sm">
          <button className="bg-customBlue sm:px-6 hover:bg-customLiteBlue transition-all duration-500 rounded-xl text-white font-bold py-2 sm:w-56 w-1/2 ">
            Submit Message
          </button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
