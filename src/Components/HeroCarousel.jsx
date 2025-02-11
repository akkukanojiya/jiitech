import Nabbar from "./Nabbar";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

import { motion } from "framer-motion"
function HeroCarousel() {



// text changing animation 

  // const texts = ["IGNITE CURIOSITY", "EXPLORE THE WORLD", "DISCOVER NEW HORIZONS"];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 2000); // Change text every 2 seconds

  //   return () => clearInterval(interval);
  // }, []);
  // text changing animation end





  // text draw aniamtion 
  // const texts = ["IGNITE CURIOSITY", "EXPLORE THE WORLD", "DISCOVER NEW HORIZONS"];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 600000); // Change text every 10 minutes (600,000ms)

  //   return () => clearInterval(interval);
  // }, []);
  // text draw aniamtion end
  return (
    <div className="relative w-full">
      <Nabbar />

      <div className="mt-40 pb-40 flex flex-col-reverse  items-center justify-between bg-white py-16 px-4 sm:px-8 md:px-12 lg:py-24 lg:px-16 xl:py-28 xl:px-32 max-w-[1400px] mx-auto flex justify-center items-center text-center">


        <motion.h1
          className="text-xl  sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-5xl text-[#dc2626] font-train text-center leading-snug overflow-hidden whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.16, ease: "easeOut" }}
        >
          IGNITE CURIOSITY <p>EXPLORE THE WORLD</p>
        </motion.h1>


      </div>




{/* text changing animation  */}
      {/* <div className="mt-40 pb-40 flex flex-col-reverse items-center justify-center bg-white py-16 px-4 sm:px-8 md:px-12 lg:py-24 lg:px-16 xl:py-28 xl:px-32 max-w-[1400px] mx-auto text-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]} // Key changes on every text update
          className="text-xl sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-5xl text-[#dc2626] font-train text-center leading-snug overflow-hidden whitespace-nowrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div> */}
{/* text changing animation end */}



  {/* text draw animation  */}
  {/* <div className="mt-40 pb-40 flex flex-col-reverse items-center justify-center bg-white py-16 px-4 sm:px-8 md:px-12 lg:py-24 lg:px-16 xl:py-28 xl:px-32 max-w-[1400px] mx-auto text-center">
      <motion.h1
        key={texts[index]}
        className="text-xl sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-5xl text-[#dc2626] font-train text-center leading-snug overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {texts[index].split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.6 }}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div> */}
  {/* text draw animation end */}
      <div className="flex  justify-center mt-0  pb-0">
        <img
          src="/1.png"
          alt="Picture with file"
          className="w-full max-w-full"
        />
      </div>

    </div>
  );
}

export default HeroCarousel;
