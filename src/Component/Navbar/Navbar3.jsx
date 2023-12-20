import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

import Whitelogo from "../../assets/white logo.png";
const Navbar3 = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMobileMenuOpen(false); // Close the mobile menu on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full p-4 z-50 ${
        isScrolled ? "bg-black p-4 duration-700" : "bg-transparent duration-700"
      }`}
    >
      <div className="flex justify-between items-center relative px-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              // src="https://www.erthpot.com/wp-content/uploads/2022/10/retina-01.png"
              src={Whitelogo}
              alt="Logo"
              className="w-[170px]   mr-4 cursor-pointer"
            />
            {/* <span className="text-">Earthpot</span> */}
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center ml-auto">
            <button
              className="text-black font-extrabold focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              {/* ☰ */}
              <FaBars className="text-2xl text-white" />
            </button>
            {isMobileMenuOpen && (
              <div className="fixed top-0 left-0 h-full w-full bg-white p-4 space-y-6 shadow-lg flex flex-col items-center">
                <button
                  className=" focus:outline-none self-end"
                  onClick={handleMobileMenuToggle}
                >
                  <FiX className="text-2xl" />
                </button>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/"
                  className={`cursor-pointer hover:text-gray-100 hover:duration-700  p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
                    isScrolled ? "text-black" : ""
                  }`}
                >
                  Home
                </Link>

                <Link
                  onClick={handleMobileMenuToggle}
                  to="/products"
                  className={`cursor-pointer  hover:text-gray-100 hover:duration-700  p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                    isScrolled ? "text-black" : ""
                  }`}
                >
                  Products
                </Link>

                <div className="relative group">
                  <div
                    className={`cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                      isScrolled ? "text-black" : ""
                    }`}
                  >
                    Support
                  </div>
                  <div className="absolute top-8 hidden bg-white   z-50 group-hover:block shadow-lg rounded-lg transition-all duration-300 ease-in-out w-[300px] ">
                    <div className="w-full flex flex-col">
                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/registration-warranty-form"
                        className="cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                      >
                        Registration & Warranty Form
                      </Link>

                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/partner-with-us"
                        className="cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                      >
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div
                    to="/support"
                    className={`cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                      isScrolled ? "text-black" : ""
                    }`}
                  >
                    Case-Studies
                  </div>
                  <div className="absolute top-8 hidden bg-white   z-50 group-hover:block shadow-lg rounded-lg transition-all duration-300 ease-in-out w-[200px] ">
                    <div className="w-full flex flex-col">
                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/blogs"
                        className="cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                      >
                        Blogs
                      </Link>

                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/news-events"
                        className="cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                      >
                        News & Events{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  onClick={handleMobileMenuToggle}
                  className={` cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                    isScrolled ? "text-black" : ""
                  }`}
                >
                  Contact
                </Link>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/about"
                  className={`cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
                    isScrolled ? "text-black" : ""
                  }`}
                >
                  About
                </Link>
                <div className="flex items-center mt-4">
                  <div className="transition-transform duration-300 transform hover:scale-110">
                    <IoSearch
                      title="Search"
                      className="text-2xl text-[#00AFAC] cursor-pointer mr-4"
                    />
                  </div>
                  <div className="transition-transform duration-300 transform hover:scale-110">
                    <Link
                      onClick={handleMobileMenuToggle}
                      title="Whatsapp"
                      to="https://api.whatsapp.com/send?phone=918460351801&text=I%20want%20to%20know%20more%20about%20Erthpot.%20"
                    >
                      <FaWhatsapp className="text-2xl text-[#00AFAC] cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`z-50 flex items-center justify-center space-x-12  rounded-full p-2  text-black  bg-cyan-800${
              isScrolled
                ? "justify-center  z-50 w-1/2 bg-banner-background rounded-full p-2 space-x-12"
                : "space-x-4"
            }`}
          >
            <Link
              to="/"
              className={`text-gray-100  text-[13px]  cursor-pointer hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
                isScrolled ? "text-black" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/products"
              className={`text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700  p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                isScrolled ? "text-white" : ""
              }`}
            >
              Products
            </Link>

            <div className="relative group">
              <div
                className={`text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                  isScrolled ? "text-white" : ""
                }`}
              >
                Support
              </div>
              <div className="absolute top-7 hidden bg-transparent   z-50 group-hover:block shadow-lg rounded-lg transition-all duration-300 ease-in-out w-[200px] ">
                <div className="w-full flex flex-col">
                  <Link
                    to="/registration-warranty-form"
                    // className="text-xl cursor-pointer  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                    className=" cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md hover:bg-slate-800  transition-transform duration-700 transform hover:scale-110"
                  >
                    Registration & Warranty Form
                  </Link>

                  <Link
                    to="/partner-with-us"
                    // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                    className="text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  hover:bg-slate-800 transition-transform duration-700 transform hover:scale-110"
                  >
                    Partner With Us
                  </Link>
                  <Link
                    to="/design-solution"
                    // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                    className="text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  hover:bg-slate-800 transition-transform duration-700 transform hover:scale-110"
                  >
                    design-solution
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div
                to="/support"
                className={`text-gray-100  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                  isScrolled ? "text-white" : ""
                }`}
              >
                Studies
              </div>
              <div className="absolute top-7 hidden bg-transparent text-[13px]  z-50 group-hover:block group-hover:duration-1000 duration-1000 shadow-lg rounded-lg transition-all ease-in-out w-[150px] ">
                <div className="w-full flex flex-col">
                  <Link
                    to="/blogs"
                    className=" cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md hover:bg-slate-800 transition-transform duration-700 transform hover:scale-110 "

                    // className="text-gray-100 text-xl text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                  >
                    Blogs
                  </Link>

                  <Link
                    to="/news-events"
                    className=" cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md hover:bg-slate-800  transition-transform duration-700 transform hover:scale-110"

                    // className="text-gray-100 text-xl text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
                  >
                    News & Events{" "}
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className={`text-gray-100   text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
                isScrolled ? "text-white" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className={`text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
                isScrolled ? "text-white" : ""
              }`}
            >
              About
            </Link>
          </div>
        )}

        {isMobileMenuOpen && isMobile && (
          <div className="flex items-center ml-auto">
            <div className="mr-4">
              {/* <FiSearch className={`text-black size={24}`} /> */}
            </div>
            <div>
              {/* <FiShoppingCart className={`text-black size={24}`} /> */}
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="flex items-center space-x-5">
            <div className="flex gap-2 items-center transition-transform duration-300 transform hover:scale-110 mr-3">
              <IoSearch
                title="Whatsapp"
                className="text-2xl text-[#00b0ea] cursor-pointer"
              />
              <span className="text-gray-100 text-[13px]">Search</span>
            </div>
            <div className="transition-transform duration-300 transform hover:scale-110">
              <Link
                title="Whatsapp"
                to="https://api.whatsapp.com/send?phone=918460351801&text=I%20want%20to%20know%20more%20about%20Erthpot.%20"
              >
                <FaWhatsapp className="text-2xl text-[#00b0ea] cursor-pointer" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar3;
