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
      {/* <div className="sm:px-12">
        <div className=" font-extrabold text-base sm:text-4xl ">
          <div className="flex gap-2 ">
            <p>Delivering</p>
            <p className="text-blue-600  ">since 1999</p>
            <p>best practice expertise</p>
          </div>
      
        </div>
      
        <p className="text-base sm:text-2xl pt-4 ">
          For over 25 years, we’ve been at the forefront of digital marketing and ecommerce learning with our deep sector experience and subject matter expertise.
        </p>
        <div className="py-16 flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {data.map((d, index) => (
            <div
              key={index}
              className="group shrink-0 h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-lg shadow-md bg-white flex flex-col items-center justify-center transition-shadow duration-300 hover:shadow-xl"
            >
            
              <div className="flex flex-col items-center px-4 gap-4 text-center">
            
                <img
                  src={d.img}
                  alt={d.title}
                  className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-contain group-hover:-translate-y-2 transition-transform duration-500"
                />
            
                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {d.title}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div> */}

      <div className="flex flex-col sm:flex-row px-6 sm:px-12 items-center justify-evenly rounded-lg py-16 mx-4 my-6 bg-white shadow-2xl space-y-8 sm:space-y-0 sm:space-x-8 transform transition-all hover:scale-105">
        <div className="sm:w-1/2 sm:text-left">
          <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text">
            Our Mission
            <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
          </p>
          <p className="text-lg black-red-600 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-justify">
            Our goal is to foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.
          </p>
        </div>
        <div className="sm:w-1/3 flex justify-center sm:justify-end">
          <img src="/ourmission.png" alt="Our Mission" className="w-full max-w-xs rounded-lg shadow-lg transition-all transform hover:scale-110 hover:rotate-4" />
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
            <span className="font-semibold text-lg text-black-500">Cultural Fusion:</span>
            We bring together two of the most culturally rich nations to create a truly unique educational experience.
          </p>

          <p className="text-xl sm:text-xl leading-relaxed mb-6 text-black text-justify">
            <span className="font-semibold text-lg text-black-500">Holistic Learning:</span> Our programs aren’t just academic – they’re designed to foster creativity, problem-solving, and intercultural understanding.
          </p>
          <p className="text-xl sm:text-xl leading-relaxed mb-6 text-black text-justify">
            <span className="font-semibold text-lg text-black-500">Network Building:</span> Participants will have the chance to connect with peers, educators, and industry professionals, building a network that spans two continents.
          </p>
          <button className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-l hover:from-red-400 hover:to-red-400 shadow-lg hover:scale-105">
            Join Us Now
          </button>
        </div>
        <div className="sm:w-1/3 sm:mt-0 mt-8 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-orange-500 opacity-20 rounded-lg blur-sm"></div>
          <img className="rounded-xl shadow-2xl transform transition duration-500 hover:scale-110 hover:rotate-3" src="/why choose us.jpg" alt="Why Choose JIITECH" />
        </div>
      </div>
    </div>


  );
}

export default BusinessCentric;
