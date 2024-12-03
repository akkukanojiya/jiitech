import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import Nabbar from "./Nabbar";
// import React from "react";
function HowToApply() {
  const [form, setForm] = useState(false);

  return (
     <><div className="">

      <Nabbar />
    
        <div className="absolute z-20 w-full h-96">
          <div className="fixed inset-0    flex items-center justify-center" >
            <div className="lg:w-[500px] md:w-[70%] sm:w-[90%] w-[95%] bg-white rounded-lg shadow-lg p-3 sm:p-6 lg:p-8" >
              {/* <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                Apply for Your Dream Opportunity!
              </h2> */}
              <div className="flex flex-col gap-2 sm:gap-6">
                {/* Input Fields */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">
                  <input
                  
                    className="h-10 sm:h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-2 text-gray-700"
                    type="text"
                    placeholder="Full Name *" />
                  <input
                    className="h-10 sm:h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-2 text-gray-700"
                    type="email"
                    placeholder="Email Address *" />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">
                  <input
                    className="h-10 sm:h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-2 text-gray-700"
                    type="text"
                    placeholder="Phone Number *" />
                  <input
                    className="h-10 sm:h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-2 text-gray-700"
                    type="text"
                    placeholder="Job Position *" />
                </div>

                {/* File Upload */}
                <div>
                  <input
                    className="block w-full h-10 sm:h-12 border-b border-gray-300 focus:border-blue-500 outline-none px-2 text-gray-700"
                    type="file"
                    accept=".pdf,.doc,.docx" />
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    className="block w-full h-20 sm:h-28 border-b border-gray-300 focus:border-blue-500 outline-none px-2 py-2 text-gray-700 resize-none"
                    placeholder="Additional Message or Cover Letter"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-4">
                  <button className="w-full md:w-1/2 bg-red-600 text-white py-2 sm:py-3 rounded-md hover:bg-red-700 transition font-semibold">
                    Submit Application
                  </button>
                  {/* Uncomment the WhatsApp button if needed */}
                  {/* <a
    href="https://api.whatsapp.com/send/?phone=9024833455&text=Hello!+I+would+like+to+know+more+about+the+application+process.&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-1/2 bg-green-500 text-white py-2 sm:py-3 rounded-md hover:bg-green-600 transition font-semibold text-center"
  >
    WhatsApp Us
  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  



  );
}

export default HowToApply;
