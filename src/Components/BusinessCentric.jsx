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
  <div className="sm:w-1/2 text-center sm:text-left">
    <p className="text-5xl font-extrabold pb-4 bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text">
      Our Mission
    </p>
    <p className="text-lg black-red-600 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
      Our goal is to foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.
    </p>
  </div>
  <div className="sm:w-1/3 flex justify-center sm:justify-end">
    <img src="/ourmission.png" alt="Our Mission" className="w-full max-w-xs rounded-lg shadow-lg transition-all transform hover:scale-110 hover:rotate-3" />
  </div>
</div>









    </div>
  );
}

export default BusinessCentric;
