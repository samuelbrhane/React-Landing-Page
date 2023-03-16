import React from "react";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-75px)] mt-[75px] px-4"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2016/11/22/19/20/abstract-1853254_1280.jpg")',
      }}
    >
      <div className="flex items-start justify-center w-full pt-[50px]">
        <div className="flex items-center  flex-col justify-center lg:w-[50%] xl:w-[45%]">
          <h1 className="text-2xl tracking-tight text-center font-bold text-gray-900 sm:text-6xl md:text-7xl mb-4">
            Get More Done With eSafe
          </h1>
          <p className="text-xl text-gray-800 mb-8 text-center">
            Streamline your online safety and security with our web-based
            platform.
          </p>

          <button class="relative inline-block px-12 py-3 border-2 rounded-full border-[#b22fae] text-[#b22fae] font-bold bg-transparent overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#b22fae] hover:text-white">
            Get Started
            <span class="absolute inset-y-0 left-0 border-[#b22fae] text-white w-0 transition-all duration-500 ease-in-out hover:w-full"></span>
          </button>
        </div>

        <div className="lg:w-[55%] hidden lg:inline">
          <img src={heroImage} alt="Project management" className="w-full" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 220">
          <path
            fill="#33BEFF"
            fillOpacity="1"
            d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,128C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
