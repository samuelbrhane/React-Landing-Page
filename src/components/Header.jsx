import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "../utils/links";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import "../index.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section className="fixed top-0 left-0 w-full shadow flex justify-between items-center px-4 lg:px-20 xl:px-30 h-[75px] z-50 bg-white">
      {/* log */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logoImage" className="w-8 h-8 md:w-12 md:h:12" />
        <p className="hidden md:inline font-semibold text-xl">
          eSafe Solutions
        </p>
      </div>

      {/* links */}
      <nav>
        <Scrollspy
          items={links}
          offset={-80}
          currentClassName="active"
          onUpdate={(item) => setActiveSection(item)}
          className="hidden lg:flex items-center gap-4 lg:gap-6"
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link}
                offset={-75}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                {link}
              </Link>
            </li>
          ))}
        </Scrollspy>
      </nav>

      {/* contact us */}
      <button className="relative inline-block px-6 py-1 lg:px-8 lg:py-2 border-2 rounded-full border-[#b22fae] text-[#b22fae] font-bold bg-transparent overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#b22fae] hover:text-white">
        Get Started
        <span className="absolute inset-y-0 left-0 border-[#b22fae] text-white w-0 transition-all duration-500 ease-in-out hover:w-full"></span>
      </button>

      {/* menu icon */}
      <AiOutlineMenu className="md:hidden text-2xl" />
    </section>
  );
};

export default Header;
