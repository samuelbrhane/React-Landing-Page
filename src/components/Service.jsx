import React from "react";
import { services } from "../utils/service";
import ServiceCard from "./ServiceCard";
import "../index.css";
import { serviceStat } from "../utils/serviceStat";
import AnimatedCard from "./AnimatedCard";

const Service = () => {
  return (
    <section className="pt-10 px-4 lg:px-20 xl:px-20 pb-4">
      <h1 className="text-center text-[#b22fae] font-semibold text-xl mb-4">
        QUALITY SERVICES
      </h1>
      <p className="text-center font-bold text-xl mb-6">List of Our Services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* animated stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 lg:gap-6">
        {serviceStat.map((stat, index) => (
          <AnimatedCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default Service;
