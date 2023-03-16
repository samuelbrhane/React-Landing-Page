import React from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <section className="absolute top-0 left-0 w-full shadow flex justify-between items-center px-4 h-[75px]">
      {/* log */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logoImage" className="w-8 h-8 md:w-12 md:h:12" />
        <p className="hidden md:inline font-semibold text-xl">
          eSafe Solutions
        </p>
      </div>

      {/* links */}

      <ul className="hidden md:flex items-center gap-4 lg:gap-6">
        <li>Home</li>
        <li>Service</li>
        <li>Features</li>
        <li>Testimonial</li>
        <li>News</li>
      </ul>

      {/* contact us */}
      <button class="relative inline-block px-6 py-1 lg:px-8 lg:py-2 border-2 rounded-full border-[#b22fae] text-[#b22fae] font-bold bg-transparent overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#b22fae] hover:text-white">
        Contact Us
        <span class="absolute inset-y-0 left-0 border-[#b22fae] text-white w-0 transition-all duration-500 ease-in-out hover:w-full"></span>
      </button>

      {/* menu icon */}
      <AiOutlineMenu className="md:hidden" />
    </section>
  );
};

export default Header;
