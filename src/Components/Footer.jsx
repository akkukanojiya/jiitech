import React from "react";
import { FaFacebookSquare, FaLocationArrow, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
// import { FaSquarePinterest } from "react-icons/fa6";
import { IoCallOutline, IoCallSharp, IoLogoLinkedin, IoMailOpenSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
// import { FaPinterestSquare } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <div className="bg-gray-200 text-black py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-4 lg:grid-cols-5 gap-8">

          <div>
            <img
              src="JIITECH.png"
              alt="Company Logo"
              className="w-56 mb-2 "
            />
            {/* <div className="shadow-md h-56 w-36  bg-white rounded">
               <p className="text-black px-4 py-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, molestiae qui exercitationem, odio atque nemo,  </p>
             </div> */}
          </div>


          <div>
            <h3 className="text-xl w-40 font-semibold mb-4  bg-customBlue text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-red-600">
              Useful Links
            </h3>

            <ul className="space-y-3 text-black text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "We Offer", link: "/weoffer" },
                { name: "How to Apply", link: "/howtoapply" },
                { name: "Gallery", link: "/gallery" },
                { name: "Contact Us", link: "/contactus" },
                {/* { name: "Privacy Policy", link: "/privacy" }, */}
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-black-700 hover:text-red-500 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-xl w-40 font-semibold mb-4   bg-customBlue text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-red-600">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Student Immersion Program",
                
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="/weoffer"
                    className="text-black-700 hover:text-red-500 transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl w-40 font-semibold mb-4   bg-customBlue text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-red-600">
              Contact
            </h3>
            <p className="text-sm leading-relaxed text-black-700  flex items-center">
              <FaMapMarkerAlt className="text-black mr-1" />
              <strong className="text-black">Address Japan :</strong>
            </p>
            <p className="text-sm leading-relaxed text-black-700 ">JIITECH Headquarters, Tokyo, Japan</p>

            <p className="text-sm leading-relaxed text-black-700  flex items-center">
              <FaMapMarkerAlt className="text-black mr-1" />
              <strong className="text-black">Address India :</strong>
            </p>
            <p className="text-sm leading-relaxed text-black-700 ">
              JIITECH Headquarters, Ahmedabad, India
            </p>

            <p className="text-sm leading-relaxed text-black-700  flex items-center">
              <IoCallSharp className="text-black mr-1" />
              <strong className="text-black">Phone:</strong>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-black-700 ">
              +91-9327123451(India) <br />+91-9033211100(India)

              <br />+81-8064262379(Japan)
              <br />
              <p className="text-sm leading-relaxed text-black-700  flex items-center">
                <IoMailOpenSharp className="text-black mr-1" />

                <strong className="text-black">Email:</strong> info@jiitech.jp
              </p>
            </p>
          </div>


          <div>
            <h3 className="text-xl w-40 font-semibold mb-4   bg-customBlue text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-red-600">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/contactus"
                  className="text-black-700  hover:text-red-500 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black-700 hover:text-red-500 transition duration-300"
                >
                  Item Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black-700 hover:text-red-500 transition duration-300"
                >
                  Get in Touch
                </a>
              </li>
            </ul>

            <div className="mt-6 flex space-x-4">
              {[
                { Icon: FaFacebookSquare, link: "http://fb.com/61561338693343" },
                {
                  Icon: FaInstagram,
                  link: "#",
                },
                { Icon: FaYoutube, link: "#" },
                { Icon: SiGooglemaps, link: "#" },

                { Icon: FaXTwitter, link: "#" },
                {
                  Icon: IoLogoLinkedin,
                  link: "#",
                },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-black-700 hover:text-red-800 transition duration-300"
                >
                  <Icon size={25} />
                </a>
              ))}
            </div>
          </div>
        </div>


        <div className="border-t border-black my-3"></div>
        <div className="text-center">
          <p className="text-black-700 text-sm">
            © 2024 Tech Creature Solution 
            All Rights Reserved.
          </p>
        </div>
      </div>


      {/* <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12">
  <div className="container mx-auto px-6 lg:px-16">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Connected</h2>
      <p className="text-gray-400 mb-6">Subscribe for updates on our latest offers and products.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-3 w-full max-w-md rounded-l-lg focus:outline-none text-gray-800 shadow-md"
        />
        <button className="bg-red-500 px-8 py-3 text-white font-semibold rounded-r-lg hover:bg-red-600 shadow-md">
          Subscribe
        </button>
      </div>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
     
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="text-gray-400">
          <span className="block">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@wokculture.com.au" className="text-red-400 hover:underline">
             info@jiitech.com
            </a>
          </span>
          <span className="block mt-2">
            <strong>Phone:</strong>{" "}
            <a href=" +91-9327123451 (India) | +81-8064262379 (Japan)" className="text-red-400 hover:underline">
            +91-9327123451 (India) <br/> +81-8064262379 (Japan)
            </a>
          </span>
        </p>
      </div>

      
      <div>
        <h3 className="text-xl font-bold mb-4"> Address</h3>
        <p className="text-gray-400"><br />JIITECH Headquarters, Tokyo, Japan <br /> Ahmedabad, India
</p>
      </div>

       
      <div>
        <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
        <p className="text-gray-400">Mon - Fri: 10am - 4pm</p>
      </div>
    </div>

     
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-gray-400">
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Product Categories</h3>
        <ul className="space-y-2">
          <li className="hover:text-red-400 cursor-pointer">High Pressure Burners</li>
          <li className="hover:text-red-400 cursor-pointer">Low Pressure Burners</li>
          <li className="hover:text-red-400 cursor-pointer">Accessories</li>
          <li className="hover:text-red-400 cursor-pointer">Bench Burner Set</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
        <ul className="space-y-2">
          <li className="hover:text-red-400 cursor-pointer">Warranty Policy</li>
          <li className="hover:text-red-400 cursor-pointer">Shipping and Returns Policy</li>
          <li className="hover:text-red-400 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-red-400 cursor-pointer">Blogs</li>
          <li className="hover:text-red-400 cursor-pointer">Sitemap</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
        <ul className="space-y-2">
          <li className="hover:text-red-400 cursor-pointer">Facebook</li>
          <li className="hover:text-red-400 cursor-pointer">Instagram</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Accepted Payments</h3>
        <div className="flex gap-4">
          <img src="/visa.png" alt="Visa" className="w-10" />
          <img src="/mastercard.png" alt="MasterCard" className="w-10" />
          <img src="/paypal.png" alt="PayPal" className="w-10" />
        </div>
      </div>
    </div>

     
    <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
      <p>&copy; 2023 Wok Culture. All rights reserved.</p>
      <p className="text-sm mt-2">eCommerce Website Design by Designpluz</p>
    </div>
  </div>
</footer> */}

    </>
  );
}

export default Footer;
