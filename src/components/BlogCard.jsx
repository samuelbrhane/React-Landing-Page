import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const { title, image, comments } = blog;
  return (
    <motion.div
      initial={{ bottom: -30, opacity: 0.8 }}
      whileInView={{ bottom: 0, opacity: 1 }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.2,
        delay: 0.7,
      }}
      className="relative"
    >
      <img src={image} alt="blogImage" className="group-hover:scale-105" />
      <div className="px-2 pt-2 pb-6">
        <p>{title}</p>
        <div className="flex items-center gap-1 mt-2">
          <AiOutlineComment className="text-xl text-[#b22fae]" />
          <p>{comments} Comments</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
