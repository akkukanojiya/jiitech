import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      {/* <div
        id="carouselExampleInterval"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          
          <div className="carousel-item active" data-bs-interval="4500">
            <div className="relative">
              <img
                src="/HeroCarousel-pics/slider 1.jpg"
                className="d-block w-full h-[50vh] pt-0 sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover rounded-xl opacity-20"
                alt="Slider 1"
              />
              <div className="absolute top-1/2 left-10 sm:left-24 lg:left-38 transform -translate-y-1/2 px-8 sm:px-16 lg:px-20 text-customBlue">
                <div className="text-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide">
                    Welcome to JIITECH.
                  </h2>
                  <p className="text-sm font-semibold sm:text-base lg:text-lg opacity-90 max-w-xl">
                    Japan India Innovation Technology Education Cultural Hub (JIITECH) is a pioneering initiative bridging the cultures of Japan and India through education, technology, and cultural exchange.
                  </p>
                  <div className="mt-4 sm:mt-8">
                    <a
                      href="#"
                      className="inline-block bg-red-600 text-white text-sm sm:text-base px-3 py-2 rounded-full hover:bg-red-700 transition duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

           
 
          <div className="carousel-item" data-bs-interval="4500">
            <div className="relative">
              <img
                src="/HeroCarousel-pics/slider3.jpg"
                className="d-block w-full h-[50vh] pt-0 sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover rounded-xl opacity-20"
                alt="Slider 3"
              />
              <div className="absolute top-1/2 left-10 sm:left-20 lg:left-38 transform -translate-y-1/2 px-8 sm:px-16 lg:px-20 text-customBlue">
                <div className="text-shadow-xl opacity-90 animate__animated animate__fadeIn animate__delay-1s">
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold mb-6 leading-tight tracking-wide">
                    An Integral Part of Corporate India’s & Japan’s Journey
                  </h2>
                  <p className="text-sm font-semibold sm:text-base lg:text-lg opacity-90 max-w-xl">
                    Trusted advisors to multinationals, leading Indian & Japanese businesses, and leadership professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <button
          className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-black p-3 rounded-full shadow-lg"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-black p-3 rounded-full shadow-lg"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-between bg-white py-28 px-5">
        
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-5xl text-customBlue font-bold leading-snug">
            Welcome to JIITECH<br />
            <div className="opacity-30"><img width={300} src="/underline.png" alt="" /></div>
          </h1>
          <p className="text-customBlue text-lg font-bold ">
            Japan India Innovation Technology Education Cultural Hub (JIITECH) is a pioneering initiative bridging the cultures of Japan and India through education, technology, and cultural exchange.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white px-3 py-2 rounded-full font-semibold hover:bg-red-600">
              <a href="/about">Learn More</a>
            </button>
          </div>
        </div>
            {/* <button className="bg-green-500 text-white px-3 py-2  rounded-full font-semibold hover:bg-green-600">
              Find your skills gaps
            </button> */}
          {/* <p className="text-sm text-gray-500 mt-4">
            Tailor your team training to meet your business goals
          </p> */}


        <div className="relative md:w-3/2 flex justify-center items-center">

          <div className="absolute inset-0 bg-red-500   w-[90%] h-[90%] -z-10"></div>

          {/* Image */}
          <img
            src="/In.png"
            alt="Person with file"
            className="relative  w-[500px] md:w-[600px] rounded-lg "
          />

          {/* In-Person Training Badge */}
          {/* <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full flex justify-center items-center">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </span>
          <span className="text-sm font-semibold text-gray-700">In-Person Training</span>
        </div> */}

          {/* On-Demand Learning Badge */}
          {/* <div className="absolute bottom-10 right-10 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full flex justify-center items-center">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </span>
          <span className="text-sm font-semibold text-gray-700">On-Demand Learning</span>
        </div> */}

          {/* Cards */}
          {/* <div className="absolute top-20 right-16 flex flex-col space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">Fast Track to Digital Marketing</h3>
            <p className="text-sm text-gray-500">Start Course</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">Pricing, Persuasion and Product Content</h3>
            <p className="text-sm text-gray-500">Start Course</p>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
