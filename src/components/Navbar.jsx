import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { logo } from "../assets";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const menuRef = useRef(null);

  const navigationItems = [
    { label: "Home", type: "scroll", targetId: "home" },
    { label: "About Us", type: "scroll", targetId: "about-us" },
    // { label: "Home", type: "route", path: "/" },
  ];

  const handleGotoFoodkart = () => {
    window.location.href = "https://foodkart.com.ng";
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav className="relative" ref={menuRef}>
      {/* Navbar Container */}
      <div className="bg-red-700 px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <RouterLink
          to="/"
          className="bg-white rounded-full px-4 py-2 text-green-700 font-bold hover:bg-gray-100 transition"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] lg:w-[120px]"
            // onClick={() => navigate("/")}
          />
        </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 w-3/5 justify-end">
          <Link
            to="home"
            duration={1000}
            smooth={true}
            className="relative text-white font-medium hover:text-yellow-300 transition cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about-us"
            duration={1000}
            smooth={true}
            className="relative text-white font-medium hover:text-yellow-300 transition cursor-pointer"
          >
            About Us
          </Link>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white font-medium hover:text-yellow-300 transition">
              Our Products <ChevronDown size={18} className="ml-1" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-md shadow-md mt-2">
              <button
                onClick={handleGotoFoodkart}
                className="block w-full text-left px-4 py-2 font-semibold text-black hover:bg-gray-100"
              >
                FoodKart
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute right-0 top-full w-64 bg-white rounded-b-lg shadow-lg z-50 md:hidden">
          <div className="flex flex-col divide-y divide-gray-200">
            {navigationItems.map((item) =>
              item.type === "route" ? (
                <RouterLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 font-medium text-gray-800 hover:bg-gray-100 transition"
                >
                  {item.label}
                </RouterLink>
              ) : (
                <Link
                  key={item.label}
                  to={item.targetId}
                  duration={1000}
                  smooth={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile Products Dropdown */}
            <div className="px-6 py-3">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between font-medium text-gray-800"
              >
                Our Products <ChevronDown size={18} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-2 ml-4 border-l-2 border-red-500 pl-4">
                  <button
                    onClick={() => {
                      handleGotoFoodkart();
                      setMobileProductsOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-red-600 font-semibold hover:text-red-700"
                  >
                    FoodKart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { logo } from "../assets";
// import { FaArrowUp, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const handleLinkClick = (section) => {
//     console.log(`${section} link clicked`);
//   };

//   return (
//     <>
//       <div className="flex w-full p-4 lg:px-12 justify-between items-center bg-[#CD101D]">
//         <div className="bg-white py-1.5 px-4 rounded-full">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-[60px] lg:w-[120px]"
//             onClick={() => navigate("/")}
//           />
//         </div>
//         <div className="bg-white lg:py-3 py-1.5 px-4 flex  items-center lg:flex  rounded-full">
//           <Link
//             to="faqs"
//             smooth={true}
//             duration={1000}
//             className="font-[700] text-[10px] lg:text-[16px] text-black cursor-pointer"
//             onClick={() => handleLinkClick("FAQs")}
//           >
//             FAQS
//           </Link>

//           <Link
//             to="contact"
//             smooth={true}
//             duration={1500}
//             className="font-[700] ml-4 text-[10px] lg:text-[18px] text-black cursor-pointer"
//             onClick={() => handleLinkClick("Contact Us")}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
