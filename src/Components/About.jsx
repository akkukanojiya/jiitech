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
    <div>
      <div>
        <Nabbar />
      </div>

      <div className="h-80 flex relative">
        <img
          src="/about us.jpg"
          className="w-full object-cover opacity-20"
          alt="About Us"
        />
        <div className="absolute text-customBlue text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>About Us</p>
          <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
        </div>
      </div>


      <div className="py-12 sm:px-24 ">
        <div className="px-4 py-8 flex flex-col sm:flex-row sm:gap-6">
          <div className="sm:w-1/2">
            <p className="text-3xl font-normal sm:py-6 border-b-2 border-orange-400">
              Who We Are
            </p>
            <p className="text-sm font-semibold leading-relaxed text-gray-800 tracking-wide pt-3 text-justify">
              JIITECH is a team of professional experts in the fields of education, science, technologies, and culture from Japan and India aiming at promoting mutual understanding, bringing new partnerships in these sectors aiming to contribute to creating job opportunities, growth in the economy, and building a friendly environment for an aging society. We specialize in organizing student exchange programs, workshops, cultural experiences, and educational opportunities that empower the youth of both countries. By bringing together students, educators, and innovators from both countries, we aim to build a brighter future defined by collaboration and cultural exchange. We help industries find new business (R&D and marketing) opportunities at both ends.
            </p>
          </div>

          <div className="sm:w-1/2 mt-6 sm:mt-0">
            <img src="https://www.razarefrigeration.in/assets/img/about-us.jpg" alt="JIITECH" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>


        {/* <p className="text-3xl font-sans sm:pt-4">
            Build Software Right, First Time.
          </p> */}

        {/* <p className="text-lg text-gray-500">
            Arisezen  is Delhi-based digital innovation & enterprise AI studio that
            empowers ambitious early-stage startups, growth businesses &
            enterprises to design and develop innovative, impactful digital
            products using talented Agile product team PODs.
          </p> */}

        {/* <p className="text-lg text-gray-500">
            Our clients realize real business returns from new technology
            initiatives because we arm them with our proprietary innovation &
            data/AI acceleration process and a best-in-class, experienced
            digital-first teams.
          </p> */}

        {/* <p className="text-gray-500 text-lg">
            Working with us, our clients move faster, align their stakeholders
            early, reduce their project risk, with fewer costly rework, improve
            time-to-market and increase the impact of bringing new digital
            products to life.
          </p> */}

        {/* <p className="text-gray-500 text-lg">
            For over two decades (since 1999), we have helped companies to
            harness the power of Scaled Agile, build innovative & scalable
            digital products, eliminate rework, leverage emerging technologies
            (Cloud, AI/ML, Automation), and build Hybrid agile PODs
            (offshore/nearshore/local) high-preforming digital product teams.
          </p> */}




        <div className="py-8">
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
        </div>


        {/* <section className="bg-gradient-to-t from-red-200 py-16 rounded-xl shadow-lg">
          <div className="max-w-7xl mx-auto text-center px-6">
            
            <h2 className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group">
              Our Team
              <div className="flex justify-center opacity-30">
                <img width={300} src="/underline.png" alt="underline" />
              </div>
            </h2>

            <p className="text-gray-600 text-lg mb-12">
              Meet the amazing team that makes everything happen. We are dedicated
              to helping you achieve your goals with passion and expertise.
            </p>

            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center">
                    
                    <div className="relative">
                      <img
                        src={member.imgSrc}
                        alt={member.name}
                        className="rounded-full w-28 h-28 object-cover mb-4 shadow-lg border-4 border-red-600"
                      />
                      <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>

                   
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 italic mb-4">{member.role}</p>

                    
                    <div className="flex space-x-4">
                      {member.social.map((type, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                        >
                          <SocialIcon type={type} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}


        {/* new team  */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group text-center">
                Our Crew
                <div className="flex justify-center opacity-30">
                  <img width={300} src="/underline.png" alt="underline" />
                </div>
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              {/* Team Member Block 1 */}


              {/* Team Member Block 2 */}
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238396.png"
                    alt="Patricia image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Patricia Angely
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-red-500">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-400">
                    <FaXTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238396.png"
                    alt="Patricia image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Patricia Angely
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-red-500">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-400">
                    <FaXTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="public/sky.JPG"
                    alt="Antonio image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Akash Kanojiya
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-red-500">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-400">
                    <FaXTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238396.png"
                    alt="Patricia image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Patricia Angely
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-red-500">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-400">
                    <FaXTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238396.png"
                    alt="Patricia image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-red-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-red-600">
                  Patricia Angely
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-red-500">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-400">
                    <FaXTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              {/* Repeat this block for other team members */}
            </div>
          </div>
        </section>
        {/* new team end */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
