import React, { useEffect } from "react";
import HeroCarousel from "./HeroCarousel";
import OurProduct from "./OurProduct";
import WhyArisezen from "./WhyArisezen";
// import Services from "./Services";
import Contact from "./Contact";
import BusinessCentric from "./BusinessCentric";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
// import Faq from "./Faq";
 
import FaqAccordion from "./FaqAccordion";
import HowToApply from "./HowToApply";
import Gallery from "./Gallery";
import Weoffer from "./WeOffer";
import OurMission from "./OurMission";
const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <HeroCarousel />
      <OurMission/>
      <BusinessCentric />
      <OurProduct />
      <Contact />
      {/* <Services /> */}
      <WhyArisezen />
      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default Home;
