import React from "react";

const data = [
  {
    img: "/Business-Centric-pics/e-commerce.jpg",
    title: "Ecommerce",
  },

  {
    img: "/Business-Centric-pics/marketing.avif",
    title: "Marketing",
  },

  {
    img: "/Business-Centric-pics/dataAnalytics.jpg",
    title: "Data & Analytics",
  },

  {
    img: "/Business-Centric-pics/customerExperience.jpg",
    title: "Customer Experience (CX)",
  },

  // {
  //   img: "/Business-Centric-pics/9732077.png",
  //   title: "Cloud Optimization",
  // },

  // {
  //   img: "/Business-Centric-pics/4744315.png",
  //   title: "Cyber Security",
  // },
  // {
  //   img: "/Business-Centric-pics/4529976.png",
  //   title: "Artificial Intelligence",
  // },
  // {
  //   img: "/Business-Centric-pics/6974613.png",
  //   title: "Blockchain Solutions",
  // },
];
function BusinessCentric() {
  return (
    <div className="px-2  py-14">
    

      <div className="flex flex-col sm:flex-row px-6 pt-0 mt-1 sm:px-12 items-center justify-evenly rounded-lg py-16 mx-4 my-6 bg-white shadow-2xl space-y-12 sm:space-y-0 sm:space-x-8 transform transition-all hover:scale-105">
        <div className="sm:w-1/2 sm:text-left">
          <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text">
            Our Mission
            <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
          </p>
          <p className="text-lg black-red-600 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-justify">
            Our goal is to foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.
          </p>
        </div>
        <div className="sm:w-2/5 flex justify-center sm:justify-center">
          <img src="/ourmission.png" alt="Our Mission" className="w-full max-w-sm rounded-lg   transition-all transform hover:scale-110 hover:rotate-4" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse px-6 sm:px-12 items-center justify-center sm:justify-evenly rounded-xl py-16 mx-6 my-10 bg-white shadow-2xl">
        <div className="sm:w-1/2 py-4  sm:text-left text-black">
          {/* <p className="text-4xl font-extrabold pb-6 bg-gradient-to-r from-red-400 to-customBlue text-transparent bg-clip-text">
            
          </p> */}
          <div className="text-center mb-16">

          </div>
          <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group">
            Why Choose JIITECH?
            <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
          </p>
          <p className="text-xl sm:text-xl leading-relaxed mb-6 text-black text-justify text-justify">
            
            JIITECH was conceived and born as a passion and love for both countries
            by our peers who have experience learning and performing in both
            countries for over three decades. We aim to merge Japanese patience,
            punctuality, perfection, perseverance, and professionalism with the energy,
            elegance, and excellence of exciting young Indian minds.
            Our programs aren’t just academic–they’re designed to foster creativity,
            problem-solving, and intercultural understanding from Indian and Japanese
            perspectives to promote exchange in education,recruitment,and business
            opportunities at both ends.

          </p>
 
          <button className="mt-6 bg-gradient-to-r from-red-400 to-customBlue text-white px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-l hover:from-customBlue  hover:to-red-500 shadow-lg hover:scale-105">
          <a href="#"> Join Us Now</a>
           
          </button>
        </div>
        <div className="sm:w-2/5 sm:mt-0 mt-8 flex justify-center relative">
          <div className="absolute inset-0  opacity-20 rounded-lg blur-sm"></div>
          <img className="rounded-xl   transform transition duration-500 hover:scale-110 hover:rotate-3" src="/why choose us.png" alt="Why Choose JIITECH" />
        </div>
      </div>
    </div>


  );
}

export default BusinessCentric;
