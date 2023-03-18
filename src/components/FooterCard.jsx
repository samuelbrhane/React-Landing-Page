import React from "react";
import { motion } from "framer-motion";

const FooterCard = ({ item }) => {
  const { title, texts } = item;
  return (
    <motion.div
      initial={{ bottom: -80, opacity: 0.8 }}
      whileInView={{ bottom: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.7,
        delay: 0.2,
      }}
      className="mb-4 relative flex justify-center lg:justify-start"
    >
      <div>
        <p className="font-semibold text-xl mb-3">{title}</p>
        {texts.map((text, index) => (
          <p
            key={index}
            className="mb-1 text-gray-500 cursor-pointer hover:text-[#b22fae]"
          >
            {text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default FooterCard;
