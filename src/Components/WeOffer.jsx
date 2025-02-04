import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import Footer from "./Footer";
import Nabbar from "./Nabbar";

const Weoffer = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div>
        <Nabbar />
      </div>

      <div className=" h-80  flex relative ">
        <img
          src="https://img.freepik.com/premium-photo/japanese-teacher-organizing-classroom-library_868783-55464.jpg"
          className=" w-full object-cover opacity-40"
        />
        <div className="absolute text-customBlue text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full opacity-100">
          <p>We Offer</p>
        </div>
      </div>

      {/* <div className="py-20 px-2 text-center font-semibold text-5xl flex justify-center text-yellow-600">
        <p>Who We Are Right Fit For ?</p>
      </div> */}

      

      {/* <div className="bg-gray-100 text-gray-800">
      
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-6">How We Help Best</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "Marketing", icon: "📈", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
            { title: "Operations", icon: "⚙️", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
            { title: "Strategy", icon: "📊", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 w-72 text-center hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-customBlue font-bold hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10 px-6 md:px-16 bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Bold steps forward</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
        <img
          src="https://img3.exportersindia.com/product_images/bc-full/2024/6/13442509/matric-1-1718877036-7488057.jpeg"
          alt="Professional steps"
          className="rounded-lg shadow-lg"
        />
      </section>

  
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10 px-6 md:px-16">
        <img
          src="https://i.pinimg.com/736x/5a/ab/f8/5aabf84d67477f77d3bb8f0fe4cfcd17.jpg"
          alt="Person"
          className="rounded-lg shadow-lg"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p>
          <button className="bg-customBlue text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
            Learn More
          </button>
        </div>
      </section>
    </div> */}

      <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-10 px-6 sm:px-10">
        {/* JUKU Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-customBlue mb-6">
            JUKU - JIITECH’S UNIQUE KINDERING UNIVERSE
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3">
              <img
                src="./familycraft.webp"
                alt="Students doing origami"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-4 text-gray-800">
                <li>
                  <strong>Eye-Opening Encounters:</strong> Engage in culturally
                  immersive sessions where Indian and Japanese values merge.
                </li>
                <li>
                  <strong>Skills That Matter:</strong> Experience the principles of
                  Kaizen (continuous improvement), sustainability, and real-world
                  problem-solving in a condensed 1–2 week program.
                </li>
                <li>
                  <strong>Pathway to Higher Education:</strong> Interact with mentors
                  from Japan and explore international universities, scholarships, and
                  career opportunities.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JOIIN Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-customBlue mb-6">
            JOIIN - JIITECH’S OPEN INNOVATION & INTERNATIONAL NETWORKING
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3">
              <img
                src="./INNOVATION.jpg"
                alt="Students in a futuristic lab"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-4 text-gray-800">
                <li>
                  <strong>Global R&D Exposure:</strong> Dive into Japan’s remarkable
                  infrastructures, advanced research centres, and high-tech industries.
                </li>
                <li>
                  <strong>Innovation-Focused Learning:</strong> Expand horizons in
                  science, technology, engineering, and beyond, leading to global
                  internship and career possibilities.
                </li>
                <li>
                  <strong>Holistic Development:</strong> Cultivate curiosity, critical
                  thinking, and teamwork—skills vital for tomorrow’s leaders.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cultural & Industrial Visits Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-customBlue mb-6">
          CULTURAL & INDUSTRIAL VISITS
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3">
              <img
                src="./Industrial.jpg"
                alt="Students touring a factory"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-4 text-gray-800">
                <li>
                  <strong>School Visits & Cultural Events:</strong> Enjoy interactive
                  exchanges with Japanese students, attend cherry blossom festivals,
                  learn origami and calligraphy, and experience the serenity of
                  traditional Japanese tea ceremonies.
                </li>
                <li>
                  <strong>Industry Explorations:</strong> Witness cutting-edge
                  manufacturing, robotics, and technology hubs that redefine the
                  future.
                </li>
                <li>
                  <strong>Hands-On Workshops:</strong> Be part of sessions taught by
                  martial arts champions, learn essential survival skills, and observe
                  workplace ethics that Japan is renowned for.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customized Training & Internships Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-customBlue mb-6">
          CUSTOMIZED TRAINING & INTERNSHIPS
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3">
              <img
                src="./resume.jpg"
                alt="Cross-cultural professionalism"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-4 text-gray-800">
                <li>
                  <strong>Skill Development:</strong> Enhance professional etiquette,
                  communication, and leadership skills adapted to the Japanese
                  environment.
                </li>
                <li>
                  <strong>Career Advancement:</strong> Intern with leading
                  organizations, understand global work cultures, and open pathways to
                  meaningful careers in India, Japan, or anywhere across the globe.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Weoffer;
