import React, { useEffect, useState } from "react";

function OurProduct() {
  const [objects, setObjects] = useState([]);

  const tab = [
    <div className="pt-16 p-4 flex items-center justify-center flex-row flex-wrap gap-2 ">
      <div className="relative group w-full bg-gradient-to-br from-red-100 via-red-200 to-green-300 rounded-2xl p-2 sm:p-5 md:p-8 shadow-xl overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-16 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-[orange-400] via-[red-300] to-green-400 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tl from-green-400 via-red-300 to-orange-400 opacity-25 rounded-full"></div>
        </div>

        <div className="relative">
          {/* <h3 className="text-xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-wide text-center group-hover:text-red-700 transition-colors duration-500">
            JUKU
          </h3> */}
          <h3 className="text-xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-wide text-center group-hover:text-red-700 transition-colors duration-500">
          Student Immersion Program
          </h3>


          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center  mx-auto mb-8">
            Our Student Immersion Program is designed to provide students a life-changing opportunity to learn, grow, and experience another culture. Participants will immerse themselves in an environment known for its exceptional infrastructure, cleanliness, discipline, and safety. Our academic and cultural activity programs are thoughtfully designed not only to foster educational growth but also to create lasting friendships and memories.
          </p>

          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  icon: "🌍",
                  title: "Cultural Immersion",
                  description:
                    "Explore local traditions, food, festivals, and customs for an authentic cultural experience.",
                },
                {
                  icon: "🎓",
                  title: "Academic Exposure",
                  description:
                    "Attend lectures, seminars, and workshops to understand the educational approaches of Japan or India. Visit schools, universities, and research institutes. Engage in group and one-on-one interactions to satisfy your curiosities and gain insights into the local living and work cultures.",
                },
                {
                  icon: "💡",
                  title: "Innovation & Technology Workshops",
                  description:
                    "Participate in hands-on sessions to explore cutting-edge technologies and innovations shaping the future. Gain the opportunity to intern with prestigious companies, gaining real-world experience.",
                },
                {
                  icon: "🏢",
                  title: "Industry Visits",
                  description:
                    "Gain insight into leading industries through company visits and talks with professionals",
                },
                {
                  icon: "🏠",
                  title: "Homestays",
                  description:
                    "Experience local hospitality firsthand through homestay options, offering students a unique opportunity to understand family life in a different culture.",
                },
                {
                  icon: "🤝",
                  title: "Study, Networking & Business Opportunities",
                  description:
                    "Empowering individuals through education, global connections, and opportunities for professional growth.",
                },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className={`relative bg-white bg-opacity-70 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 backdrop-blur`}
                >
                  <div className="text-3xl sm:text-4xl text-center mb-4 text-red-500 group-hover:scale-125 transition-transform duration-500">
                    {highlight.icon}
                  </div>
                  <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">
                    {highlight.title}
                  </h5>
                  <p className="text-sm sm:text-base text-gray-700 text-center">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="mt-12 sm:mt-16 text-center">
            <button className="px-4 sm:px-6 py-2 mb-3 sm:py-3 bg-red-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <a href="/weoffer">Learn More →</a>

            </button>
          </div> */}
        </div>
      </div>
    </div>,



  ];

  useEffect(() => {
    setObjects(tab[0]);
  }, []);

  return (
    <>
      <div className="mx-6">
        <div className="flex text-center flex-col px-8 py-2">
          <div className="text-center mb-2">
            <p className="text-4xl font-extrabold pb-2 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative">
              Program We Offer
              {/* <div className="relative">
                <img className="mx-auto opacity-30 mt-2" width={300} src="/underline.png" alt="" />
              </div> */}
            </p>
          </div>


          <p className="text-xl font-light pb-2">
            Our goal is to cultivate a global perspective in students by providing opportunities to immerse themselves in the richness of both Japanese and Indian cultures.
          </p>
        </div>

        <div> {objects}</div>

        <div></div>
      </div>
    </>
  );
}

export default OurProduct;






// Our goal is to To foster creativity, innovation, and intercultural understanding through immersive exchange programs, educational initiatives, and technological collaboration. Our goal is We aim to nurture a global perspective in students and professionals by creating opportunities to experience the best of Japanese and Indian cultures.