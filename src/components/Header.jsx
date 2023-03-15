import React from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <section className="shadow-sm flex justify-between items-center px-4 py-2 md:py-4 lg:py-6">
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

      <button className="border-2 border-[#b22fae] rounded-3xl px-4 py-1 lg:py-2 font-bold">
        Contact Us
      </button>

      {/* menu icon */}
      <AiOutlineMenu className="md:hidden" />
    </section>
  );
};

export default Header;
