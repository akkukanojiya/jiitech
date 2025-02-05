import Nabbar from "./Nabbar";


import { motion } from "framer-motion"
function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      <div className="mt-20 pb-40 flex flex-col-reverse lg:flex-row items-center justify-between bg-white py-16 px-4 sm:px-8 md:px-12 lg:py-24 lg:px-16 xl:py-28 xl:px-32 max-w-[1400px] mx-auto">
 

        <motion.h1
          className="  text-xl sm:text-4xl md:text-5xl xl:text-3xl 2xl:text-5xl text-[#dc2626] font-train text-center leading-snug overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        >
          IGNITE CURIOSITY <p>EXPLORE THE WORLD</p>
        </motion.h1>


      </div>

      <div className="flex  justify-center mt-0  pb-0">
          <img
            src="/1.png"
            alt="Picture with file"
            className="w-full max-w-[1200px] "
          />
        </div>

    </div>
  );
}

export default HeroCarousel;
