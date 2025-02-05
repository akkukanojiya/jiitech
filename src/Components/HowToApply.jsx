import React, { useState } from "react";
import Nabbar from "./Nabbar"; // Adjust path if required
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
function HowToApply() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    enquiry: '',
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Simple regex for country code and number
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid Email is required';
    }
    if (!formData.phoneNumber || !validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Valid Phone Number is required (with country code)';
    }
    if (!formData.enquiry) newErrors.enquiry = 'Enquiry is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs.send(
        "your_service_id",
        "your_template_id",
        {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          enquiry: formData.enquiry,
        },
        "your_user_id"
      )
        .then(() => {
          toast.success("Email sent successfully!");
          setFormData({ fullName: '', email: '', phoneNumber: '', enquiry: '' });
          toggleModal();
        })
        .catch((error) => {
          toast.error("Failed to send email. Please try again later.");
          console.error(error);
        });
    }
  };


   
  return (
    <>
      {/* Navbar */}
      <Nabbar />

      <div className=" h-80  flex relative ">
        <img
          src="./how-to-apply.jpg"
          className=" w-full object-cover opacity-40"
        />
        <div className="absolute text-customBlue text-2xl sm:text-5xl font-train flex flex-col h-full justify-center text-center items-center w-full opacity-100">
          <p>How To Apply</p>
        </div>
      </div>
 

 
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
              <span className="text-gray-500 mt-2">STEP 1</span>
            </div>
            <div className="bg-gray-100 p-5 pb-10 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl leading-6 font-semibold text-gray-900 uppercase">
                Fill Out the Interest Form
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
                {/* <Link
                  to="https://jiitech.jp/"
                  target="_blank"
                  className="text-blue-500 underline"
                  rel="noopener noreferrer"
                >
                  Visit our website
                </Link>{" "} */}
                If you are interested, please fill out the form using ‘Apply Now’ at the end of instructions
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
              <span className="text-gray-500 mt-2">STEP 2</span>
            </div>
            <div className="bg-gray-100 p-5 pb-10 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl leading-6 font-semibold text-gray-900 uppercase">
                Orientation & Consultation
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
              Our team will reach out to schedule an orientation session—either virtual or in-person. We’ll cover program details, customization options, fees, and address any questions you may have.
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
              <span className="text-gray-500 mt-2">STEP 3</span>
            </div>
            <div className="bg-gray-100 p-5 pb-10 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl leading-6 font-semibold text-gray-900 uppercase">
                Confirm Your Enrolment
              </h4>
              <p className="mt-2 text-base leading-6 text-black">
              Once you're ready, complete your registration by submitting the required documents and payment details. You'll then receive a welcome kit with your program's itinerary and pre-departure guidelines to ensure a smooth and exciting journey ahead!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>


    
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

      <div className="relative flex items-center justify-center bg-gray-100">
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out mx-4 sm:mx-6 lg:mx-0"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Apply Now</h2>
              <button
                className="text-gray-500 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 rounded-full"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <input
                className={`h-12 border-b ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200`}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}

              {/* Email Address */}
              <input
                className={`h-12 border-b ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              {/* Phone Number */}
              <input
                className={`h-12 border-b ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 outline-none px-3 text-gray-700 transition-colors duration-200`}
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number (+Country Code)*"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}

              {/* Enquiry */}
              <textarea
                className={`block w-full h-28 border-b ${
                  errors.enquiry ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 outline-none px-3 py-2 text-gray-700 resize-none transition-colors duration-200`}
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="Enquiry*"
              ></textarea>
              {errors.enquiry && (
                <p className="text-red-500 text-sm">{errors.enquiry}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-customBlue text-white py-3 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      
    </div>

      <Footer />
    </>
  );
}

export default HowToApply;
