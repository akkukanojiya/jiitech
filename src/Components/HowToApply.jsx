import React, { useState } from "react";
import Nabbar from "./Nabbar"; // Adjust path if required
import Footer from "./Footer";
import { Link } from "react-router-dom";
function HowToApply() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };





  // steps 
  // steps end
  return (
    <>
      {/* Navbar */}
      <Nabbar />

      <div className=" h-80  flex relative ">
        <img
          src="./how-to-apply.jpg"
          className=" w-full object-cover opacity-40"
        />
        <div className="absolute text-customBlue text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full opacity-100">
          <p>How To Apply</p>
        </div>
      </div>
      {/* <div className="bg-gray-50 py-10 px-5 lg:px-20 mb-8 mt-16">
        
        <div className="flex flex-col lg:flex-row gap-8">
        
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <span className="text-blue-500 text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold">Fill Out the Interest Form</h3>
            </div>
            <p className="mt-4 text-gray-600">
              <Link
              to="https://jiitech.jp/"
              
                target="_blank"
                className="text-blue-500 underline"
                rel="noopener noreferrer"
              >
                Visit our website
              </Link>{" "}
              and navigate to the “Apply Now” section. Provide basic details about
              your school, students, and the program(s) you’re interested in (JUKU
              or JOIIN).
            </p>
          </div>

          
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-full">
                <span className="text-green-500 text-3xl">📹</span>
              </div>
              <h3 className="text-xl font-semibold">Orientation & Consultation</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Our team will connect with you for an orientation session—virtual or
              in-person. We’ll discuss program schedules, customization options,
              fees, and answer any queries you may have.
            </p>
          </div>

          
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-4 rounded-full">
                <span className="text-yellow-500 text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold">Confirm Your Enrolment</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Once you’re ready, complete the registration by submitting necessary
              documents and payment details. You’ll receive a welcome kit outlining
              your selected program’s itinerary and pre-departure guidelines to
              ensure a smooth, exciting journey ahead!
            </p>
          </div>
        </div>
      </div> */}


      {/* new steps  */}
      <div className="bg-white">
  <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
    <div className="text-center">
      {/* Optional header content */}
    </div>
    <div className="mt-10 sm:mt-20">
      <ul className="space-y-10">
        <li className="text-left">
          <div
            className="flex flex-col sm:flex-row items-start animate-fade-in"
          >
            <div
              className="flex flex-col items-center justify-center sm:mr-5 mb-5 sm:mb-0 animate-scale-up"
            >
              <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-customBlue text-white border-4 border-white text-xl font-semibold transform hover:scale-110 transition-transform duration-300">
                <span className="text-blue-500 text-2xl sm:text-3xl">📋</span>
              </div>
              <span className="text-gray-500 mt-2">STEP</span>
            </div>
            <div className="bg-gray-100 p-5 pb-10 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl leading-6 font-semibold text-gray-900 uppercase">
                Fill Out the Interest Form
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
                <Link
                  to="https://jiitech.jp/"
                  target="_blank"
                  className="text-blue-500 underline"
                  rel="noopener noreferrer"
                >
                  Visit our website
                </Link>{" "}
                and navigate to the “Apply Now” section. Provide basic details
                about your school, students, and the program(s) you’re
                interested in (JUKU or JOIIN).
              </p>
            </div>
          </div>
        </li>
        <li className="text-left">
          <div className="flex flex-col sm:flex-row items-start animate-fade-in">
            <div
              className="flex flex-col items-center justify-center sm:mr-5 mb-5 sm:mb-0 animate-scale-up"
            >
              <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-customBlue text-white border-4 border-white text-xl font-semibold transform hover:scale-110 transition-transform duration-300">
                <span className="text-green-500 text-2xl sm:text-3xl">📹</span>
              </div>
              <span className="text-gray-500 mt-2">STEP</span>
            </div>
            <div className="bg-gray-100 p-5 pb-10 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl leading-6 font-semibold text-gray-900 uppercase">
                Orientation & Consultation
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
                Our team will connect with you for an orientation session—
                virtual or in-person. We’ll discuss program schedules,
                customization options, fees, and answer any queries you may
                have.
              </p>
            </div>
          </div>
        </li>
        <li className="text-left">
          <div className="flex flex-col sm:flex-row items-start animate-fade-in">
            <div
              className="flex flex-col items-center justify-center sm:mr-5 mb-5 sm:mb-0 animate-scale-up"
            >
              <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-customBlue text-white border-4 border-white text-xl font-semibold transform hover:scale-110 transition-transform duration-300">
                <span className="text-yellow-500 text-2xl sm:text-3xl">🤝</span>
              </div>
              <span className="text-gray-500 mt-2">STEP</span>
            </div>
            <div className="bg-gray-100 p-5 pb-10 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl leading-6 font-semibold text-gray-900 uppercase">
                Confirm Your Enrolment
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
                Once you’re ready, complete the registration by submitting
                necessary documents and payment details. You’ll receive a
                welcome kit outlining your selected program’s itinerary and
                pre-departure guidelines to ensure a smooth, exciting journey
                ahead!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>


      {/* new steps end */}


      {/* <div className="relative min-h-screen flex items-center justify-center pt-40 pb-40 bg-gray-100">
         
      

        
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
      </div> */}
      <div className="flex items-center justify-center mt-3 mb-3 bg-white">
        <button
          className="bg-customBlue text-white px-6 py-3 rounded-md font-semibold transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-glow-bounce"
          onClick={toggleModal}
        >
          Apply Now
        </button>

        <style jsx>{`
    @keyframes glowBounce {
      0%, 100% {
        transform: translateY(0) scale(1);
        box-shadow: 0 0 12px red; /* Initial glow */
      }
      25% {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 0 16px red; /* Glow intensifies */
      }
      50% {
        transform: translateY(0) scale(1.1);
        box-shadow: 0 0 18px red; /* Maximum glow and scale */
      }
      75% {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 0 14px red; /* Intermediate glow */
      }
    }

    .animate-glow-bounce {
      animation: glowBounce 2s infinite ease-in-out;
    }
  `}</style>
      </div>

      <div className="relative   flex items-center justify-center bg-gray-100">

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
            style={{ animation: "fadeIn 0.3s" }}
          >
            {/* Modal Content */}
            <div
              className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out mx-4 sm:mx-6 lg:mx-0"
              style={{ animation: "scaleIn 0.3s" }}
            >
              <div className="flex justify-between items-center mb-4">

                <button
                  className="text-gray-500 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 rounded-full"
                  onClick={toggleModal}
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200"
                    type="text"
                    placeholder="Full Name*"
                  />
                  <input
                    className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200"
                    type="email"
                    placeholder="Email Address*"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200"
                    type="text"
                    placeholder="Phone Number*"
                  />
                  {/* <input
                    className="h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200"
                    type="text"
                    placeholder="Job Position *"
                  /> */}
                </div>

                {/* <input
                  className="block w-full h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200"
                  type="file"
                  accept=".pdf,.doc,.docx"
                /> */}

                <textarea
                  className="block w-full h-28 border-b border-gray-300 focus:border-blue-500 outline-none px-3 py-2 text-gray-700 resize-none transition-colors duration-200"
                  placeholder="Additional Message "
                ></textarea>

                <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CSS for Animations */}
        <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
      </div>

      <Footer />
    </>
  );
}

export default HowToApply;
