import React from "react";

const data = [
  {
    img: "/Ananya.jpg",
    text: "The exchange program with JIITECH was truly transformative. I learned so much, not only academically but also about myself and the culture of Japan. It broadened my horizons and gave me memories I will cherish forever.",
    name: "Ananya Sharma, Student, India",
  },
  {
    img: "/hiroshi.jpg",
    text: "Living in Japan was an unforgettable experience. JIITECH gave us the perfect blend of education and cultural immersion. I’d highly recommend this program to anyone looking for an eye-opening experience.",
    name: "Hiroshi Nakamura, Student, Japan",
  },
];

function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-gray-100 to-gray-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text relative group">
          Testimonials
          <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl w-full mx-auto ">
        {data.map((d, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition-transform duration-500 flex justify-center"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0">
              <div className="bg-gradient-to-tr from-green-200 to-red-100 w-40 h-40 rounded-full blur-xl opacity-50 -top-10 -left-10"></div>
              <div className="bg-gradient-to-br from-red-200 to-red-200 w-40 h-40 rounded-full blur-xl opacity-50 bottom-0 -right-10"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 flex flex-col items-center">
              {/* Client Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={d.img}
                  alt="testimonial"
                  className="w-24 h-24 rounded-full border-4 border-red-600 shadow-lg object-cover"
                />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 italic text-center text-lg mb-6">
                "{d.text}"
              </blockquote>

              {/* Client Name */}
              <p className="text-center text-customBlue font-semibold text-lg">
                {d.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>



  );
}

export default Testimonials;




{/* <p className="text-center text-xl font-light px-2 ">
        Our exchange program features an itinerary designed to maximize learning and cultural exchange. Here is a sample itinerary highlighting the experiences included:
        </p> */}