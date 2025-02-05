import React, { useState, useEffect } from "react";

import { CiFacebook } from "react-icons/ci";
import { RiGlobeFill, RiInstagramLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";

const Nabbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isTECHNOLOGIES, setIsTECHNOLOGIES] = useState(false);
  const [isPRODUCTS, setIsPRODUCTS] = useState(false);
  // console.log(isHamTrue.service);

  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function HandleHamTrue() {
    setIsService((perv) => !perv);
  }

  function HandleisTECHNOLOGIES() {
    setIsTECHNOLOGIES((perv) => !perv);
  }

  function HandleisPRODUCTS() {
    setIsPRODUCTS((perv) => !perv);
  }


  useEffect(() => {
    // Ensure the Google Translate script initializes
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);


  return (
    <div>
      {isOpenMenu && (
        <div className="sm:hidden fixed z-20 inset-0 bg-red-800">
          <div className="relative text-end mr-4 mt-6">
            <button className="" onClick={() => setIsOpenMenu(false)}>
              <ImCross color="white" size={45} />
            </button>
          </div>

          <div className="flex flex-col pt-8 text-white text-3xl font-[20px]  text-center gap-4 ">
            <Link to={"/"}>HOME</Link>


            <p>
              <Link to={"/about"}> ABOUT US </Link>
            </p>
            <p>
              <Link to={"/weoffer"}> WHAT WE OFFER </Link>
            </p>

            {/* <span onClick={HandleHamTrue} className="px-2 ">
                WE OFFER
              </span> */}
            <p>
              <Link to={"/howtoapply"}> HOW TO APPLY </Link>
            </p>

            {/* <p>
              <Link to={"#"}> GALLERY </Link>
            </p> */}
            <p>
              <Link to={"/contactus"}> CONTACT US </Link>
            </p>
            <div className="">

              <div
                className={`transition-all duration-500 bg-white text-xs px-2 text-black gap-2.5 flex flex-col w-full overflow-hidden   ${isService ? "max-h-60 py-3 " : "max-h-0 py-0"
                  }`}
              >
                <span className="">
                  <Link to={"/softwaredevelopment"}>SoftwareDevelopment</Link>
                </span>
                <span className="">Consultansy</span>
                <span className="">Testing</span>
                <span className="">Emerging</span>
                <span className="">Cloud</span>
                <span className="">Data Analytics</span>
                <span className="">Staff Augmentation</span>
                <span className="">Projct Management Services</span>
              </div>
            </div>



            {/* <div className="">
              <span onClick={HandleisTECHNOLOGIES}>TECHNOLOGIES</span>
              <div
                className={`transition-all duration-500 bg-white text-xs px-2 text-black gap-2.5 flex flex-col w-full overflow-hidden   ${isTECHNOLOGIES ? "max-h-96 py-3" : "max-h-0 py-0"
                  }`}
              >
                <span className="hover:cursor-pointer">
                  <Link to={"/InternshipAndTraining"}>
                    {" "}
                    Internship & Training{" "}
                  </Link>
                </span>
                <span className="hover:cursor-pointer">
                  <Link to={"/frontenddev"}> Front End Development </Link>
                </span>
                <span className="hover:cursor-pointer">Backend Devlopment</span>
                <span className="hover:cursor-pointer">
                  Fullstack Development
                </span>
                <span className="hover:cursor-pointer">
                  <Link to={"/database"}> Database Management Services </Link>
                </span>
                <span className="hover:cursor-pointer">
                  <Link to={"/mobileappdev"}> Mobile App Development </Link>
                </span>
                <span className="hover:cursor-pointer">Cloud and Infra</span>
                <span className="hover:cursor-pointer">
                  Data Analytics and Reporting
                </span>
                <span className="hover:cursor-pointer">Ecommerce</span>
                <span className="hover:cursor-pointer">QA</span>
              </div>
            </div> */}

            {/* <div>
              <span onClick={HandleisPRODUCTS}>PRODUCTS</span>
              <div
                className={`transition-all duration-500 bg-white text-xs px-2 text-black gap-2.5 flex flex-col w-full overflow-hidden  ${
                  isPRODUCTS ? "max-h-60 py-3 " : "max-h-0 py-0"
                }`}
              >
                <span className="">Clients</span>
                <span className="">Success Stories</span>
                <span className="">Testimonials</span>
                <span className="">More Case Studies</span>
              </div>
            </div> */}



          </div>
        </div>
      )}

      <div
        className={
          navbar
            ? "bg-white duration-300 fixed top-0 flex w-full z-10 items-center py-2 shadow-md"
            : "duration-300 fixed top-0 flex w-full z-10 items-center py-2 shadow-md"
        }
      >
        <div className="flex items-center sm:pl-12">
          <a href="/">

            <img
              src="/JIITECH.png"
              alt="Logo"
              className="w-60 sm:w-auto max-h-24"
            />
          </a>

        </div>

        <div className="sm:hidden mr-4 flex justify-end w-full">
          <button onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu size={40} color="black" />
          </button>
        </div>

        <div className="hidden sm:flex text-black font-bold  text-sm gap-3 pr-8 w-full justify-end">
          <p className="hover:text-red-700">
            <Link to={"/"}>HOME</Link>
          </p>
          <p className="hover:text-red-700">
            <Link to={"/about"}>ABOUT US</Link>
          </p>
          <p className="hover:text-red-700">
            <Link to={"/weoffer"}>WHAT WE OFFER</Link>
          </p>


          {/* <p className="hover:text-red-700  group-hover:text-red-700 transition-all duration-200 px-2">
          <Link to={"/weoffer"}></Link>
              WE OFFER
            </p> */}

          <p className="hover:text-red-700">
            <Link to={"/howtoapply"}>HOW TO APPLY</Link>
          </p>

          {/* <p className="hover:text-red-700">
            <Link to={"#"}>GALLERY</Link>
          </p> */}


          <p className="hover:text-red-700">
            <Link to={"/contactus"}>CONTACT US</Link>
          </p>







          {/* <div className="relative group">
           
            <div className="absolute hidden group-hover:block bg-white text-black text-xs w-44 py-2 mt-1 rounded shadow-lg">
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/softwaredevelopment"}>Software Development</Link>
              </span>
              <span className="block px-2 py-1 hover:text-red-700">Consultancy</span>
              <span className="block px-2 py-1 hover:text-red-700">Testing</span>
              <span className="block px-2 py-1 hover:text-red-700">Emerging</span>
              <span className="block px-2 py-1 hover:text-red-700">Cloud</span>
              <span className="block px-2 py-1 hover:text-red-700">Data Analytics</span>
              <span className="block px-2 py-1 hover:text-red-700">Staff Augmentation</span>
              <span className="block px-2 py-1 hover:text-red-700">Project Management Services</span>
            </div>
          </div> */}

          {/* <div className="relative group">
            <p className="hover:text-red-700 cursor-pointer group-hover:text-red-700 transition-all duration-200 px-2">
              TECHNOLOGIES
            </p>
            <div className="absolute hidden group-hover:block bg-white text-black text-xs w-44 py-2 mt-1 rounded shadow-lg">
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/InternshipAndTraining"}>Internship & Training</Link>
              </span>
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/frontenddev"}>Front End Development</Link>
              </span>
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/backendDevlopment"}>Back End Development</Link>
              </span>
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/database"}>Database Management Services</Link>
              </span>
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/mobileappdev"}>Mobile App Development</Link>
              </span>
              <span className="block px-2 py-1 hover:text-red-700">
                <Link to={"/qa"}>QA</Link>
              </span>
            </div>
          </div> */}




        </div>
        {/* <div className="language-switcher-container">

          <div id="google_translate_element"></div>
        </div> */}
      </div>

    </div>
  );
};

export default Nabbar;
