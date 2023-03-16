import React from "react";

const colors = ["to-[#BC1F92]", "to-[#F0EA7A]", "to-[#BC1F1F]", "to-[#BC951F]"];
const FeatureCard = ({ feature }) => {
  const { icon, title, desc, id } = feature;
  return (
    <div className="flex justify-center mb-3">
      <div className="flex gap-3">
        <div
          className={`bg-gradient-to-r from-green-300 via-[#2343a3] ${colors[id]} w-[70px] h-[70px] rounded-xl flex justify-center items-center text-3xl text-white`}
        >
          {icon}
        </div>

        <div className="w-[80%]">
          <h1 className="text-xl font-bold xl:text-2xl">{title}</h1>
          <p className="text-sm font-light">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
