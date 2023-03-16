import React from "react";
import { services } from "../utils/service";
import ServiceCard from "./ServiceCard";
import "../index.css";
import { serviceStat } from "../utils/serviceStat";
import AnimatedCard from "./AnimatedCard";

const Service = () => {
  return (
    <section className="pt-10 px-4 lg:px-12 xl:px-18 pb-4">
      <p className="text-center font-bold text-xl mb-3">List of Our Services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-12">
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
