import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      <div className="mt-20 flex flex-col-reverse lg:flex-row items-center justify-between bg-white py-16 px-4 sm:px-8 md:px-12 lg:py-24 lg:px-16 xl:py-28 xl:px-32 max-w-[1400px] mx-auto">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 md:space-y-8  lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-customBlue font-400 leading-snug  ">
            Welcome to JIITECH
            {/* <div className="opacity-30 mt-3">
              <img
                className="mx-auto lg:mx-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px]"
                src="/underline.png"
                alt="Underline"
              />
            </div> */}
          </h1>
          <p className="text-customBlue text-sm sm:text-base md:text-lg xl:text-xl font-medium md:font-semibold text-justify">
            Japan India Innovation Technology Education Cultural Hub (JIITECH) is a
            pioneering initiative bridging the cultures of Japan and India through
            education, technology, and cultural exchange.
          </p>
          {/* <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4 rounded-full font-medium hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div> */}
        </div>




        {/* duplicate containt  */}
        
        {/* <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-customBlue font-monoton leading-snug">
            Welcome to JIITECH
          </h1>
          <p className="text-customBlue text-sm sm:text-base md:text-lg xl:text-xl font-medium md:font-semibold mx-auto">
            Japan India Innovation Technology Education Cultural Hub (JIITECH) is a
            pioneering initiative bridging the cultures of Japan and India through
            education, technology, and cultural exchange.
          </p>
        </div> */}
{/* duplicate containt end   */}




        {/* Right Content */}
        <div className="relative lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-red-500 w-[80%] h-[80%] sm:w-[85%] sm:h-[85%] lg:w-[90%] lg:h-[90%] xl:w-[85%] xl:h-[85%] 2xl:w-[80%] 2xl:h-[80%] -z-10 rounded-2xl shadow-xl"></div>
          <img
            src="/In.png"
            alt="Person with file"
            className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] rounded-lg"
          />
        </div>





        
      </div>



    </div>
  );
}

export default HeroCarousel;
