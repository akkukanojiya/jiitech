import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp, IoMailOpenSharp } from "react-icons/io5";

const Footer = () => {
  const usefulLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "https://jiitech.netlify.app/about" },
    { name: "We Offer", link: "https://jiitech.netlify.app/weoffer" },
    { name: "How to Apply", link: "https://jiitech.netlify.app/howtoapply" },
    { name: "Contact Us", link: "https://jiitech.netlify.app/contactus" },
  ];

  const services = ["Web Development", "App Development", "AI Solutions", "Cloud Services"];

  const handleClick = (service) => {
    console.log(`Service selected: ${service}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 bg-gray-100">
      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start">
        <img src="JIITECH.png" alt="Company Logo" className="w-56 mb-4" />
      </div>

      {/* Useful Links */}
      <div className="w-64">
        <h3 className="text-xl font-semibold mb-4 bg-customBlue text-white py-2 px-4 rounded-lg">Useful Links</h3>
        <ul className="space-y-3 text-black text-sm">
          {usefulLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-customBlue transition duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Services */}
      <div className="w-64">
        <h3 className="text-xl font-semibold mb-4 bg-customBlue text-white py-2 px-4 rounded-lg">Our Services</h3>
        <ul className="space-y-3 text-sm">
          {services.map((service, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(service)}
                className="hover:text-red-500 transition duration-300"
              >
                {service}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="w-80">
        <h3 className="text-xl font-semibold mb-4 bg-customBlue text-white py-2 px-4 rounded-lg">Contact</h3>
        <div className="text-sm text-black flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-12">
          <div>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> <strong>Japan:</strong>
            </p>
            <p>JIITECH Headquarters, 3-37-7-210 Yoyogi, Shibuya, Tokyo, Japan</p>
            <p className="flex items-center">
              <IoCallSharp className="mr-2" /> +81-8064262379
            </p>
            <p className="flex items-center">
              <IoMailOpenSharp className="mr-2" /> info@jiitech.jp
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> <strong>India:</strong>
            </p>
            <p>JIITECH Headquarters, A 615 - 617 Sanskrit Galleria, Ahmedabad - 380015</p>
            <p className="flex items-center">
              <IoCallSharp className="mr-2" /> +91-9327123451 / +91-9033211100
            </p>
            <p className="flex items-center">
              <IoMailOpenSharp className="mr-2" /> info@jiitech.jp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;