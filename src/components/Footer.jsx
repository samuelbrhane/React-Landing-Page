import React from "react";
import { footer } from "../utils/footer";
import FooterCard from "./FooterCard";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="min-h-[90vh] relative">
      <div className="footerDivider w-full h-full absolute" />

      <div className="absolute top-0 left-0 w-full  pt-20 pb-5  z-20 px-4 lg:px-20 xl:px-30 ">
        {/* Subscribe */}
        <div className="flex flex-col items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#b22fae] mb-4">
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

        <div className="mt-5 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="flex gap-4 items-center lg:gap-8">
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

          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
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
