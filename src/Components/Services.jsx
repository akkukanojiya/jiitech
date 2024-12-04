import React from "react";

const data = [
  {
    img: "/Ananya.jpg",
    text: "The exchange program with JIITECH was truly transformative. I learned so much, not only academically but also about myself and the culture of Japan. It broadened my horizons and gave me memories I will cherish forever.",
    name: "Ananya Sharma, Student, India",
  },
  {
    img: "/japanese.jpg",
    text: "Living in Japan was an unforgettable experience. JIITECH gave us the perfect blend of education and cultural immersion. I’d highly recommend this program to anyone looking for an eye-opening experience.",
    name: "Hiroshi Nakamura, Student, Japan",
  },
];

function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-4xl font-extrabold pb-4 bg-gradient-to-r from-customBlue to-red-500 text-transparent bg-clip-text">
          Testimonials
        </p>
      </div>
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl w-full">
        {data.map((d, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center justify-center shadow-lg h-auto w-full max-w-sm p-10 rounded-lg bg-customBlue hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={d.img}
              alt="testimonial"
              className="w-24 h-24 rounded-full mb-4 object-cover group-hover:scale-110 transform transition-transform duration-500"
            />
            <p className="text-sm text-gray-200 mb-3">{d.text}</p>
            <p className="text-md font-semibold  text-gray-100">{d.name}</p>
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