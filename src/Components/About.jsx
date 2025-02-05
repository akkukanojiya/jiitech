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
        <div className="absolute text-customBlue text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>About Us</p>
          {/* <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div> */}
        </div>
      </div>


      <div className="py-12 sm:px-24 ">
        <div className="px-4 py-8 flex flex-col sm:flex-row sm:gap-6">
          <div className="sm:w-1/2">
            <p className="text-3xl font-normal sm:py-6 border-b-2 border-orange-400">
              Who We Are
            </p>
            <p className="text-sm font-semibold leading-relaxed text-gray-800 tracking-wide pt-3 text-justify">
              JIITECH is a team of professionals specializing in education, science, technology, and culture from Japan and India. Our mission is to promote mutual understanding and foster new partnerships across these sectors, contributing to job creation, economic growth, and the development of a supportive environment for an aging society. We specialize in organizing student immersion programs, workshops, cultural experiences, and educational opportunities that empower the youth of both countries. By connecting students, educators, and innovators, we aim to shape a brighter future through collaboration and cultural exchange. Additionally, we assist industries in discovering new business opportunities, including R&D and marketing, on both sides.
            </p>
          </div>

          <div className="sm:w-1/2 mt-6 sm:mt-0">
            <img src="https://www.razarefrigeration.in/assets/img/about-us.jpg" alt="JIITECH" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>







        {/* <div className="py-8">
          <h2 className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
            Our Advisor
            <div className="flex justify-center opacity-30 mb-6">
              <img width={300} src="/underline.png" alt="underline" />
            </div>
          </h2>
          <div className="sm:px-8 flex sm:flex-row flex-col justify-evenly">
            <div className="sm:w-1/3 mx-1 flex items-center">
              <div className="p-1 border-1 border-gray-300 rounded-md">
                <img
                  src="public/sky.JPG"
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>

            <div className="sm:w-1/3 px-2 flex flex-col justify-evenly gap-2 sm:gap-0">
              <span className="text-2xl text-red-700 font-semibold">
                Akash kanojiya
              </span>
              <p className="text-gray-500">
                In today's fast-paced business environment, companies must adopt
                new technologies and transform their operational frameworks to
                maintain competitiveness. This scenario might resonate with your
                current challenges.
              </p>
            </div>
          </div>

          <div className="sm:px-8 py-8 flex sm:flex-row flex-col-reverse justify-evenly">
            <div className="sm:w-1/3 px-2 flex flex-col justify-evenly gap-2 sm:gap-0">
              <span className="text-2xl text-red-700 font-semibold">
                Jaimin Katva
              </span>
              <p className="text-gray-500">
                We offer a comprehensive range of consultancy services:
                Establishing QA Process, QA Process Assessment, QA Process
                Improvement, Introducing Test Automation, Providing Consultation
                for Testing Specialized Software & Custom QA Training.
              </p>
            </div>

            <div className="sm:w-1/3 mx-1 flex items-center">
              <div className="p-1 border-1 border-gray-300 rounded-md">
                <img
                  src="public/QA_Pics/download-242.jpg"
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="sm:px-8 py-8 flex sm:flex-row flex-col justify-evenly">
            <div className="sm:w-1/3 mx-1 flex items-center">
              <div className="p-1 border-1 border-gray-300 rounded-md">
                <img
                  src="public/QA_Pics/download-35.jpg"
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>

            <div className="sm:w-1/3 px-2 flex flex-col justify-evenly gap-2 sm:gap-0">
              <span className="text-2xl text-red-700 font-semibold">
                Harshil Mehta
              </span>
              <p className="text-gray-500 ">
                Forming the right management and technical teams is a solid
                foundation, yet achieving outstanding results and superior quality
                demands more. Creating a seamless and efficient workflow between
                these teams is pivotal. This is where Quality House's QA
                consultancy services excel.
              </p>
            </div>
          </div>
        </div> */}

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



        <div className="bg-white min-h-screen flex items-center justify-center p-6">
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
              {/* <a
                href="https://www.jiitech.jp"
                className="bg-white text-red-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-100 transition duration-300 transform hover:scale-110"
              >
                Visit www.jiitech.jp
              </a> */}
            </div>
          </div>
        </div>



        {/* new team  */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
                Our Crew
                {/* <div className="flex justify-center opacity-30">
                  <img width={300} src="/underline.png" alt="underline" />
                </div> */}
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



        {/* mentors&Advisors Comiti  */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
                Mentors & Advisors 
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

        {/* mentors&Advisors Comiti end */}


        {/* new team section  */}
        {/* <div className="font-[sans-serif]">
          <div className="max-w-5xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto">
            <h2 className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
            Mentors & Advisors 
            </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:justify-center text-center mt-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all">
                <div className="bg-[#ff3d8c] h-32" />
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
                />
                <div className="p-6">
                  <h4 className="text-gray-800 text-base font-extrabold">John Doe</h4>
                  <p className="text-gray-600 text-xs mt-1">Software Engineer</p>
                  <p className="text-gray-600 mt-4 text-sm">
                    Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.
                  </p>
                  <div className="space-x-4 mt-6">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all">
                <div className="bg-[#c730cb] h-32" />
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
                />
                <div className="p-6">
                  <h4 className="text-gray-800 text-base font-extrabold">Mark Adair</h4>
                  <p className="text-gray-600 text-xs mt-1">Software Engineer</p>
                  <p className="text-gray-600 mt-4 text-sm">
                    Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.
                  </p>
                  <div className="space-x-4 mt-6">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all">
                <div className="bg-[#00a8ff] h-32" />
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
                />
                <div className="p-6">
                  <h4 className="text-gray-800 text-base font-extrabold">
                    Simon Konecki
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">Web Designer</p>
                  <p className="text-gray-600 mt-4 text-sm">
                    Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.
                  </p>
                  <div className="space-x-4 mt-6">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all">
                <div className="bg-[#00a8ff] h-32" />
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-36 h-36 border-4 border-white rounded-full -mt-[72px] shadow-xl inline-block"
                />
                <div className="p-6">
                  <h4 className="text-gray-800 text-base font-extrabold">
                    Simon Konecki
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">Web Designer</p>
                  <p className="text-gray-600 mt-4 text-sm">
                    Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.
                  </p>
                  <div className="space-x-4 mt-6">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        fill="#333"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* new team section end */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
