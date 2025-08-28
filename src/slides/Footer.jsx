import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  appleblack,
  footerapple,
  footerplay,
  footerfood1,
  footerfood2,
  footerfood3,
  footerfood4,
  playstore,
  logo,
} from "../assets";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-[#474747] text-white px-4 sm:px-6 lg:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Column 1: Logo + tagline + socials */}
        <div className="flex flex-col space-y-4">
          {/* Logo and socials row for mobile */}
          <div className="flex items-center justify-between w-full">
            <div className="bg-white px-4 py-1 rounded-full">
              <a
                href="https://modethrive.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-white px-4 py-1 rounded-full">
                  <span className="font-bold text-[#2c2c2c]">
                    <span className="text-black">MODE</span>
                    <span className="text-green-600">THRIVE</span>
                  </span>
                </div>
              </a>
            </div>
            {/* Socials on right for mobile, below for md+ */}
            <div className="flex space-x-3 md:hidden">
              <div className="p-2 rounded-full bg-red-600 flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 rounded-full bg-red-600 flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Innovative Technology. <br />
            Real-World Impact.
          </p>
          {/* Socials below for md+ */}
          <div className="hidden md:flex space-x-3">
            <div className="p-2 rounded-full bg-red-600 flex items-center justify-center cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-full bg-red-600 flex items-center justify-center cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold">Links</h3>
          {/* <a href="#home" className="text-gray-300 hover:text-white">
            Home
          </a> */}
          <Link
            to="home"
            duration={1000}
            smooth={true}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about-us"
            duration={1000}
            smooth={true}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            About Us
          </Link>

          <div>
            <p className="text-gray-300 hover:text-white cursor-pointer flex items-center">
              Our Products
            </p>
            <ul className="ml-4 list-disc text-gray-400">
              <li>
                <a
                  href="https://foodkart.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Foodkart
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: CTA buttons */}

        <div className="flex flex-col space-y-4">
          <button className="w-fit flex items-center bg-[#0C513F] rounded-lg px-4 py-3 text-white text-sm lg:text-base font-medium">
            <span className="flex items-center mr-3">
              <div className="bg-white p-1 rounded-full mr-2">
                <img src={playstore} alt="Playstore" className="w-4" />
              </div>
              <div className="bg-white p-1 rounded-full">
                <img src={appleblack} alt="Appstore" className="w-4" />
              </div>
            </span>
            BECOME A VENDOR
          </button>

          <button className="w-fit flex items-center bg-[#0C513F] rounded-lg px-4 py-3 text-white text-sm lg:text-base font-medium">
            <span className="flex items-center mr-3">
              <div className="bg-white p-1 rounded-full mr-2">
                <img src={playstore} alt="Playstore" className="w-4" />
              </div>
              <div className="bg-white p-1 rounded-full">
                <img src={appleblack} alt="Appstore" className="w-4" />
              </div>
            </span>
            BECOME A RIDER
          </button>
        </div>

        {/* Column 4: Store buttons + food grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:space-x-3 mb-4 space-y-3 sm:space-y-0">
            <img
              src={footerplay}
              alt="Google Play"
              className="cursor-pointer w-32"
            />
            <img
              src={footerapple}
              alt="App Store"
              className="cursor-pointer w-32"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 w-[90%] sm:w-[80%] lg:w-full mx-auto">
            <img src={footerfood1} alt="Food1" className="rounded" />
            <img src={footerfood2} alt="Food2" className="rounded" />
            <img src={footerfood3} alt="Food3" className="rounded" />
            <img src={footerfood4} alt="Food4" className="rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
