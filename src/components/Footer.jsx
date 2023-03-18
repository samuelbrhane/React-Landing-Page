import React from "react";
import { footer } from "../utils/footer";
import FooterCard from "./FooterCard";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 220">
          <path
            fill="#33BEFF"
            fillOpacity="1"
            d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,128C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-full  pt-6 pb-5  z-30 px-4 lg:px-20 xl:px-30 ">
        {/* Subscribe */}
        <div className="flex flex-col items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#b22fae] mb-4 text-center">
            Subscribe to get notified about event
          </h1>
          <p className="mb-6 text-center text-gray-400">
            By subscribing with your mail, you will accept our privacy policy
          </p>
          <div className="flex items-center gap-3 md:gap-5 lg:gap-6 w-full justify-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-5 py-3 w-[200px] md:w-[300px] lg:w-[400px] bg-gray-200 rounded"
            />
            <button className="relative my-2 inline-block px-5 py-3 border-2 rounded  bg-[#b22fae] text-white font-bold overflow-hidden transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#b22fae]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="w-full mt-20 lg:mt-30 xl:mt-40 grid grid-cols-2 lg:grid-cols-4 border-b-2 border-gray-400 pb-3">
          {footer.map((item, index) => (
            <FooterCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-5 flex flex-col lg:flex-row lg:justify-between lg:items-center ">
          <div className="flex items-center justify-between lg:justify-start gap-8 ">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logoImage"
                className="w-8 h-8 md:w-12 md:h:12"
              />
              <p className="hidden md:inline font-semibold text-xl">
                eSafe Solutions
              </p>
            </div>
            <p>Copyright by 2023 Samuel Brhane</p>
          </div>

          <ul className="hidden lg:flex items-center gap-4 lg:gap-6">
            <li>Home</li>
            <li>Service</li>
            <li>Features</li>
            <li>Testimonial</li>
            <li>Pricing</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
