import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[90vh] relative">
      <div className="footerDivider w-full h-full absolute" />

      {/* Subscribe */}
      <div className="absolute top-0 left-0 w-full z-26 py-20 flex flex-col items-center z-20 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#b22fae] mb-4">
          Subscribe to get notified about event
        </h1>
        <p className="mb-6">
          By subscribing with your mail, you will accept our privacy policy
        </p>
        <div className="flex items-center gap-3 md:gap-5 lg:gap-6 w-full justify-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="px-5 py-3 w-[200px] md:w-[300px] lg:w-[400px] bg-gray-200 rounded"
          />
          <button className="relative my-4 inline-block px-8 py-3 border-2 rounded  bg-[#b22fae] text-white font-bold overflow-hidden transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#b22fae]">
            Subscribe Us
          </button>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
