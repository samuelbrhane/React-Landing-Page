import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "../utils/links";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import "../index.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <section className="fixed top-0 left-0 w-full shadow flex justify-between items-center px-4 lg:px-20 xl:px-30 h-[75px] z-50 bg-white">
        {/* log */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logoImage" className="w-8 h-8 md:w-12 md:h:12" />
          <p className="inline font-semibold text-xl">eSafe Solutions</p>
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

        {/* get started */}
        <button className="relative hidden lg:inline-block px-8 py-3 border-2 rounded-full border-[#b22fae] text-[#b22fae] font-bold bg-transparent overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#b22fae] hover:text-white">
          Get Started
          <span className="absolute inset-y-0 left-0 border-[#b22fae] text-white w-0 transition-all duration-500 ease-in-out hover:w-full"></span>
        </button>

        {/* menu icon */}
        <AiOutlineMenu
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setIsSideMenuOpen((prev) => !prev)}
        />
      </section>

      {/* Side menu */}
      <div
        className={`lg:hidden fixed top-[70px] z-30 pb-8 bottom-0 w-[200px] bg-gray-100 duration-1000 ease-in-out flex flex-col gap-8 items-center justify-between ${
          isSideMenuOpen ? "left-0" : "left-[-999px]"
        }`}
      >
        {/* links */}
        <nav>
          <Scrollspy
            items={links}
            offset={-80}
            currentClassName="active"
            onUpdate={(item) => setActiveSection(item)}
            className="flex flex-col gap-5 items-center mt-10"
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

        {/* get started */}
        <button className="relative inline-block px-8 py-3 border-2 rounded-full border-[#b22fae] text-[#b22fae] font-bold bg-transparent overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#b22fae] hover:text-white">
          Get Started
          <span className="absolute inset-y-0 left-0 border-[#b22fae] text-white w-0 transition-all duration-500 ease-in-out hover:w-full"></span>
        </button>
      </div>
    </>
  );
};

export default Header;
