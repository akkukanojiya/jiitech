import React, { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaLinkedin } from "react-icons/fa";
import Nabbar from "./Nabbar";
import Footer from "./Footer";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);






  const teamMembers = [
    {
      name: "Akash Kanojiya",
      role: "Founder and CEO",
      imgSrc: "/sky.JPG", // Replace with actual image URL
      social: ["facebook", "instagram", "twitter"],
    },
    {
      name: "Lucy Kims",
      role: "Member Experience Manager",
      imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
      social: ["facebook", "instagram", "twitter"],
    },

    {
      name: "Dan Wilson",
      role: "Senior Community Manager",
      imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
      social: ["facebook", "instagram", "twitter"],
    },
  ];

  const SocialIcon = ({ type }) => {
    const iconMap = {
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedinIn />,
      instagram: <FaInstagram />,
    };

    return iconMap[type] || null; // Fallback if no matching type is found
  };



  return (
    <div className="">
      <div>
        <Nabbar />
      </div>

      <div className="h-80 flex relative ">
        <img
          src="/about us.jpg"
          className="w-full object-cover opacity-20"
          alt="About Us"
        />
        <div className="absolute text-customBlue text-2xl sm:text-5xl font-train flex flex-col h-full justify-center text-center items-center w-full">
          <p>About Us</p>
           
        </div>
      </div>


      <div className="py-12 sm:px-24 ">
        <div className="px-4 py-8 flex flex-col sm:flex-row sm:gap-6">
          <div className="sm:w-1/2">
            <p className="text-3xl font-train text-customBlue sm:py-6 ">
              Who We Are
            </p>
            <p className="text-sm font-semibold leading-relaxed text-customBlue tracking-wide pt-3 text-justify">
            JIITECH is a team of professionals specializing in education, science, technology, and culture from Japan and India. Our mission is to promote mutual understanding and foster new partnerships across these sectors, contributing to job creation, economic growth, and the development of a supportive environment for an aging society. We specialize in organizing student immersion programs, workshops, cultural experiences, and educational opportunities that empower the youth of both countries. By connecting students, educators, and innovators, we aim to shape a brighter future through collaboration and cultural exchange. Additionally, we assist industries in discovering new business opportunities, including R&D and marketing, on both sides.
            </p>
          </div>

          <div className="sm:w-1/2 mt-4 sm:mt-0">
            <img src="./whoweare.jpg" alt="JIITECH" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>






 
        <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-6 lg:px-10 xl:px-20 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-36 h-36 sm:w-72 sm:h-72 bg-pink-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-red-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="./highfi.jpeg" // Replace with your image URL
                    alt="Cultural Exchange"
                    className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                <p className="text-base sm:text-lg md:text-xl text-black-700 leading-relaxed">
                  At <span className="font-bold text-customBlue">JIITECH</span>, our passion lies in fostering global education to build bridges between cultures, nurture future-ready leaders, and unlock the limitless potential of young minds.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expand your worldview and global awareness",
                    "Develop essential problem-solving and innovation skills",
                    "Discover powerful career and higher-education pathways",
                    "Forge lifelong international friendships",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center bg-customBlue text-white rounded-full shadow-md transform transition-transform duration-300 hover:scale-110">
                          ✓
                        </div>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-base sm:text-lg md:text-xl text-black-700 leading-relaxed">
                We don’t just teach about the world; we bring the world into the classroom—empowering every student to explore their interests, gain fresh insights, and dream beyond borders.
                </p>
                {/* Call-to-Action */}
                {/* <div className="pt-4">
                  <button className="bg-red-500 text-sm sm:text-base md:text-lg text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-customBlue transition-all duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>



        {/* <div className="bg-white min-h-screen flex items-center justify-center p-6">
          <div className="bg-customBlue text-white shadow-xl rounded-lg max-w-4xl mx-auto p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-center">

              <div className="flex justify-center mb-6">
                <img
                  src="./joinjurny.jpg"
                  alt="India and Japan Flags"
                  className="w-1/2 h-36 rounded-lg shadow-lg transform transition duration-300 hover:scale-110"
                />
              </div>

              <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">
                Join the JIITECH Journey
              </h1>

              <p className="text-lg leading-relaxed mb-6 text-justify">
                We invite you to be part of this transformative experience, where knowledge meets exploration and education meets adventure. Whether you’re a student looking to broaden your horizons, an educator seeking enriching exchange opportunities, or a school administrator ready to take your institution global—JIITECH has a place for you.

                Embark on the next chapter of learning, innovation, and cultural discovery today.
                .
              </p>

              <p className="text-white/90 italic mb-4">
                Embark on your next chapter of learning, innovation, and cultural
                discovery today.
              </p>
               
            </div>
          </div>
        </div> */}


        {/* new team section  */}
        {/* <section
          className="ezy__team12 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden"
        >
          <div className="container px-4 mx-auto">
            <div className="flex justify-center text-center">
              <div className="sm:max-w-md">
                <h3 className="text-4xl font-train pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">Our Crew</h3>

              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 lg:col-span-1 my-12 lg:my-0 xl:p-12">
                <div className="group relative">
                  <img
                    src="./jinalpatel.jpg"
                    alt="jinalpatel"
                    className="h-auto w-full mx-auto"
                  />
                  <div
                    className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hover:bg-blue-600 group-hover:pt-7 group-hover:px-5 group-hover:pb-20 duration-300 group-hover:text-customBlue"
                  >
                    <h3 className="text-xl font-semibold leading-normal opacity-80 mb-1">Jinal Patel</h3>
                    <p className="text-[17px] leading-normal opacity-80 mb-2">Founder</p>

                    <div
                      className="absolute w-full left-0 top-auto opacity-0 translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 mt-1"
                    >
                      <ul className="flex justify-center items-center">
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-vimeo"></i
                          ></a>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

              </div>


              <div className="col-span-3 lg:col-span-1 my-12 lg:my-0 xl:p-12">
                <div className="group relative">
                  <img
                    src="./nitinjain.webp"
                    alt=" nitinjain"
                    className="h-auto w-full mx-auto"
                  />
                  <div
                    className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hover:bg-red-200 group-hover:pt-7 group-hover:px-5 group-hover:pb-20 duration-300 group-hover:text-customBlue"
                  >
                    <h3 className="text-xl font-semibold leading-normal opacity-80 mb-1">Nitin Jain</h3>
                    <p className="text-[17px] leading-normal opacity-80 mb-2">Founder</p>

                    <div
                      className="absolute w-full left-0 top-auto opacity-0 translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 mt-1"
                    >
                      <ul className="flex justify-center items-center">
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-vimeo"></i
                          ></a>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

              </div>


              <div className="col-span-3 lg:col-span-1 my-12 lg:my-0 xl:p-12">
                <div className="group relative">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/team/team_13_3.jpg"
                    alt="Our Team Member Image"
                    className="h-auto w-full mx-auto"
                  />
                  <div
                    className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hover:bg-blue-600 group-hover:pt-7 group-hover:px-5 group-hover:pb-20 duration-300 group-hover:text-white"
                  >
                    <h3 className="text-xl font-semibold leading-normal opacity-80 mb-1">Sadab Bean</h3>
                    <p className="text-[17px] leading-normal opacity-80 mb-2">HR, INCA</p>

                    <div
                      className="absolute w-full left-0 top-auto opacity-0 translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 mt-1"
                    >
                      <ul className="flex justify-center items-center">
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
                          ><i className="fab fa-vimeo"></i
                          ></a>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section> */}


        {/* new team section end */}
        {/* new team  */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-train pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
                Our Crew
                
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-3 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">

              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="./jinalpatel.jpg"
                    alt="jinalpatel"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Jinal Patel
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  {/* <a href="#" className="text-gray-500 hover:text-pink-700">
                    <FaInstagram size={20} />
                  </a> */}
                  {/* <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaFacebookF size={20} />
                  </a> */}
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                  {/* <a href="#" className="text-gray-500 hover:text-black">
                    <FaXTwitter size={20} />
                  </a> */}
                </div>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="./nitinjain.webp"
                    alt="nitinjain"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Nitin Jain
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  {/* <a href="#" className="text-gray-500 hover:text-pink-700">
                    <FaInstagram size={20} />
                  </a> */}
                  {/* <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaFacebookF size={20} />
                  </a> */}
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                  {/* <a href="#" className="text-gray-500 hover:text-black">
                    <FaXTwitter size={20} />
                  </a> */}
                </div>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="taichiikeda.jpeg"
                    alt="taichiikeda"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Taichi Ikeda
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  {/* <a href="#" className="text-gray-500 hover:text-pink-700">
                    <FaInstagram size={20} />
                  </a> */}
                  {/* <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaFacebookF size={20} />
                  </a> */}
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                  {/* <a href="#" className="text-gray-500 hover:text-black">
                    <FaXTwitter size={20} />
                  </a> */}
                </div>
              </div>
              {/* <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="sunilkaul.webp"
                    alt="sunilkaul"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                   Sunil Kaul
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                   Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-pink-700">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>                 
                  <a href="#" className="text-gray-500 hover:text-black">
                    <FaXTwitter size={20} />
                  </a>
                </div>
              </div> */}

              {/* Repeat this block for other team members */}
            </div>
          </div>
        </section>
        {/* new team end */}
  


  {/* new try  */}
  <div key="1" className="mb-16">
  <dh-component>
    <div className="container flex justify-center mx-auto pt-16">
      <div>
        <p className="text-gray-500 text-lg text-center font-normal pb-3">
          BUILDING TEAM
        </p>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          The Talented People Behind the Scenes of the Organization
        </h1>
      </div>
    </div>
    <div className="w-full bg-gray-100 px-10 pt-10">
      <div className="container mx-auto">
        <div
          aria-label="Behind the scenes People "
          className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          role="list">
          <div
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            role="listitem">
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    alt="Display Picture of Andres Berlin"
                    className="rounded-full object-cover h-full w-full shadow-md"
                    role="img"
                    src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Andres Berlin
                </h1>
                <p className="text-gray-800 text-sm text-center">
                  Chief Executive Officer
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  The CEO's role in raising a company's corporate IQ is to
                  establish an atmosphere that promotes knowledge sharing and
                  collaboration.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Github" role="img">
                      <svg
                        className="feather feather-github"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Twitter" role="img">
                      <svg
                        className="feather feather-twitter"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Instagram" role="img">
                      <svg
                        className="feather feather-instagram"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          height="20"
                          rx="5"
                          ry="5"
                          width="20"
                          x="2"
                          y="2"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            role="listitem">
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    alt="Display Picture of Silene Tokyo"
                    className="rounded-full object-cover h-full w-full shadow-md"
                    role="img"
                    src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Silene Tokyo
                </h1>
                <p className="text-gray-800 text-sm text-center">
                  Product Design Head
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  The emphasis on innovation and technology in our companies has
                  resulted in a few of them establishing global benchmarks in
                  product design and development.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Github" role="img">
                      <svg
                        className="feather feather-github"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Twitter" role="img">
                      <svg
                        className="feather feather-twitter"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Instagram" role="img">
                      <svg
                        className="feather feather-instagram"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          height="20"
                          rx="5"
                          ry="5"
                          width="20"
                          x="2"
                          y="2"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            role="listitem">
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    alt="Display Picture of Johnson Stone"
                    className="rounded-full object-cover h-full w-full shadow-md"
                    role="img"
                    src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Johnson Stone
                </h1>
                <p className="text-gray-800 text-sm text-center">
                  Manager Development
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  Our services encompass the assessment and repair of property
                  damage caused by water, fire, smoke, or mold. We can also be a
                  part of the restoration.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Github" role="img">
                      <svg
                        className="feather feather-github"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Twitter" role="img">
                      <svg
                        className="feather feather-twitter"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Instagram" role="img">
                      <svg
                        className="feather feather-instagram"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          height="20"
                          rx="5"
                          ry="5"
                          width="20"
                          x="2"
                          y="2"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            role="listitem">
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    alt="Display Picture of Dean Jones"
                    className="rounded-full object-cover h-full w-full shadow-md"
                    role="img"
                    src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Dean Jones
                </h1>
                <p className="text-gray-800 text-sm text-center">
                  Principal Software Engineer
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  An avid open-source developer who loves to be creative and
                  inventive. I have 20 years of experience in the field.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Github" role="img">
                      <svg
                        className="feather feather-github"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Twitter" role="img">
                      <svg
                        className="feather feather-twitter"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Instagram" role="img">
                      <svg
                        className="feather feather-instagram"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          height="20"
                          rx="5"
                          ry="5"
                          width="20"
                          x="2"
                          y="2"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            role="listitem">
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    alt="Display Picture of Rachel Adams"
                    className="rounded-full object-cover h-full w-full shadow-md"
                    role="img"
                    src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Rachel Adams
                </h1>
                <p className="text-gray-800 text-sm text-center">
                  Product Design Head
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  Product designer with interests in immersive computing and XR,
                  political ventures, and emerging technologies. Able to take
                  ideas and give them a life.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Github" role="img">
                      <svg
                        className="feather feather-github"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Twitter" role="img">
                      <svg
                        className="feather feather-twitter"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Instagram" role="img">
                      <svg
                        className="feather feather-instagram"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          height="20"
                          rx="5"
                          ry="5"
                          width="20"
                          x="2"
                          y="2"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            role="listitem">
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    alt="Display Picture of Charles Keith"
                    className="rounded-full object-cover h-full w-full shadow-md"
                    role="img"
                    src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Charles Keith
                </h1>
                <p className="text-gray-800 text-sm text-center">UX Designer</p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  A UX designer is the voice of the customer. Our job is to look
                  beyond the business goals. We don't just experience user
                  interface but also questions it.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Github" role="img">
                      <svg
                        className="feather feather-github"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Twitter" role="img">
                      <svg
                        className="feather feather-twitter"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                  <a className="mx-5" href="javascript:void(0)">
                    <div aria-label="Instagram" role="img">
                      <svg
                        className="feather feather-instagram"
                        fill="none"
                        height="24"
                        stroke="#718096"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          height="20"
                          rx="5"
                          ry="5"
                          width="20"
                          x="2"
                          y="2"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dh-component>
</div>

  {/* new try end */}

        {/* mentors&Advisors Comiti  */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-train pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
                Mentors
                {/* <div className="flex justify-center opacity-30">
                  <img width={300} src="/underline.png" alt="underline" />
                </div> */}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-full mx-auto">
              {/* Mentor Card */}
              <div className="block group">
                <div className="relative mb-6">
                  <img
                    src=""
                    alt="Dr. Renu Wadhwa"
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <span className="text-gray-500 text-center block text-sm sm:text-base transition-all duration-500 group-hover:text-gray-900">
                  Mentor
                </span>
                <h4 className="font-semibold text-gray-900 mb-2 capitalize text-center text-sm sm:text-base md:text-lg transition-all duration-500 group-hover:text-red-600">
                  Dr. Renu Wadhwa
                  <br />
                  Prime Senior Researcher & Head AIST-INDIA DAILAB, AIST, Japan
                </h4>

                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Repeat similar blocks for other mentors */}
              <div className="block group">
                <div className="relative mb-6">
                  <img
                    src=""
                    alt="Dr. Shanuja Beri"
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <span className="text-gray-500 text-center block text-sm sm:text-base transition-all duration-500 group-hover:text-gray-900">
                  Mentor
                </span>
                <h4 className="font-semibold text-gray-900 mb-2 capitalize text-center text-sm sm:text-base md:text-lg transition-all duration-500 group-hover:text-red-600">
                  Dr. Shanuja Beri, PhD
                  <br />
                  Associate Professor, Department of Zoology, India
                </h4>

                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="block group">
                <div className="relative mb-6">
                  <img
                    src=" "
                    alt="Dr. Sunil Kaul"
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <span className="text-gray-500 text-center block text-sm sm:text-base transition-all duration-500 group-hover:text-gray-900">
                  Mentor
                </span>
                <h4 className="font-semibold text-gray-900 mb-2 capitalize text-center text-sm sm:text-base md:text-lg transition-all duration-500 group-hover:text-red-600">
                  Dr. Sunil Kaul
                  <br />
                  Senior Research Scientist, AIST, Japan
                </h4>

                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="block group">
                <div className="relative mb-6">
                  <img
                    src=" "
                    alt="Dr. Yoshihiro Ohmiya"
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <span className="text-gray-500 text-center block text-sm sm:text-base transition-all duration-500 group-hover:text-gray-900">
                  Mentor
                </span>
                <h4 className="font-semibold text-gray-900 mb-2 capitalize text-center text-sm sm:text-base md:text-lg transition-all duration-500 group-hover:text-red-600">
                  Dr. Yoshihiro Ohmiya, PhD
                  <br />
                  Principal Researcher, AIST Biomedical Research Institute, Japan
                </h4>

                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* new team section end */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
