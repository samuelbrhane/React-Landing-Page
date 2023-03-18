import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const { name, text, image } = service;
  return (
    <motion.div
      initial={{ bottom: -20, opacity: 0.8 }}
      whileInView={{ bottom: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        type: "spring",
        bounce: 0.2,
        delay: 0.3,
      }}
      className="px-3 relative py-2 mb-3 hover:shadow-md hover:scale-[1.02] border-[0.1px] border-gray-100"
    >
      <img src={image} alt="serviceImage" className="w-20 h-20 rounded-full" />
      <h1 className="font-bold my-1">{name}</h1>
      <p>{text}</p>
    </motion.div>
  );
};

export default ServiceCard;
