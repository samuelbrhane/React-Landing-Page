import React from "react";
import { blogs } from "../utils/blogPosts";
import BlogCard from "./BlogCard";

const About = () => {
  return (
    <section className="mt-16 px-4 lg:px-20 xl:px-30">
      <h1 className="text-center text-[#b22fae] font-semibold text-xl">
        ABOUT US
      </h1>
      <h1 className="text-center  font-bold text-xl mt-3 mb-6 lg:mb-8">
        Popular blog post
      </h1>

      {/* blog posts */}
      <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default About;
