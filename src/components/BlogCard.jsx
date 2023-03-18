import React from "react";
import { AiOutlineComment } from "react-icons/ai";

const BlogCard = ({ blog }) => {
  const { title, image, comments } = blog;
  return (
    <div className="mb-3 hover:shadow-sm group overflow-hidden rounded-md">
      <img src={image} alt="blogImage" className="group-hover:scale-105" />
      <div className="px-2 pt-2 pb-6">
        <p>{title}</p>
        <div className="flex items-center gap-1 mt-2">
          <AiOutlineComment className="text-xl text-[#b22fae]" />
          <p>{comments} Comments</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
