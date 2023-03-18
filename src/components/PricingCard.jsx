import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingCard = ({ plan, type }) => {
  const { name, price, features, recommended, suitable } = plan;
  return (
    <div className="flex justify-center mb-4 md:px-4 xl:px-8">
      <div className="flex flex-col justify-between shadow hover:shadow-md h-[570px] w-full hover:scale-[1.02] py-6 px-4 rounded-lg">
        <div>
          <h1 className="mb-1 font-bold text-xl md:text-2xl">{name}</h1>
          <p className="mb-4 font-semibold">{suitable}</p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <AiFillCheckCircle className="text-[#23a2ad] text-xl" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">
            ${price}
            <span className="font-light text-lg">
              {type === "monthly" ? "/Month" : "/Year"}
            </span>
          </p>
          <button className="relative my-4 inline-block px-8 py-3 border-2 rounded-full  bg-[#b22fae] text-white font-bold overflow-hidden transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#b22fae]">
            Create account
          </button>
          <div className="flex items-center gap-2">
            <div className="line" />
            <p>Or</p>
            <div className="line" />
          </div>

          <p className="cursor-pointe text-[#b22fae]">Start 14 Days Trial</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
