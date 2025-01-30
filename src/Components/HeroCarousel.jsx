import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      <div className="flex flex-col md:flex-row items-center justify-between bg-white py-32 px-5">
        
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
              <a href="#">Learn More</a>
            </button>
          </div>
        </div>
             

        <div className="relative md:w-3/2 flex justify-center items-center">

          <div className="absolute inset-0 bg-red-500   w-[90%] h-[90%] -z-10"></div>

         
          <img
            src="/In.png"
            alt="Person with file"
            className="relative  w-[500px] md:w-[600px] rounded-lg "
          />

           
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
