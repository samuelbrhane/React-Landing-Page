import React, { useState } from "react";
import { blogs } from "../utils/blogPosts";
import BlogCard from "./BlogCard";
import { AiFillCheckCircle } from "react-icons/ai";
import play from "../assets/play.gif";
import blob from "../assets/blob1.svg";
import blob1 from "../assets/blob2.svg";
import blob2 from "../assets/blob3.svg";
import ReactPlayer from "react-player";
import { FaTimes } from "react-icons/fa";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

      {/* How it works */}
      <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-[60px] mt-7 mb-14">
        <div className="relative shadow-md lg:w-[50%] h-[470px]">
          <img
            src="https://images.pexels.com/photos/7441079/pexels-photo-7441079.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="videoImage"
            className="h-[470px] rounded-md z-20"
          />
          <img
            onClick={() => setIsVideoOpen(true)}
            src={play}
            alt="playImage"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[120px] h-[120px] rounded-full cursor-pointer"
          />
          <div className="absolute -bottom-14 -left-20 -z-30">
            <img
              src={blob}
              alt="playImage"
              className="w-[300px] h-[330px] z-0"
            />
          </div>
          <div className="absolute -bottom-32 -left-10 -z-10 ">
            <img
              src={blob1}
              alt="playImage"
              className="w-[400px] h-[330px] z-0"
            />
          </div>
          <div className="absolute -bottom-28 -left-20 -z-20 rotate-180">
            <img
              src={blob2}
              alt="playImage"
              className="w-[400px] h-[330px] z-0"
            />
          </div>
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-[#b22fae] font-semibold text-xl">
            WHATS THE FUNCTION
          </h1>
          <h1 className=" font-bold text-xl mt-3 mb-6 lg:mb-8">
            Let&#39;s see how it works
          </h1>
          <h1 className="text-xl font-light lg:text-4xl xl:text-[50px]">
            We help you to boost your business profitable with our talent
            marketer
          </h1>

          <p className="mt-3 lg:mt-5">
            Get your tests delivered at let home collect sample sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>

          <div className="flex gap-1 items-center mt-3 lg:mt-5">
            <AiFillCheckCircle className="text-[#23a2ad] text-xl" />
            <p className="text-lg font-semibold">
              Unlimited design possibility
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <AiFillCheckCircle className="text-[#23a2ad] text-xl" />
            <p className="text-lg font-semibold">
              Completely responsive features
            </p>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {isVideoOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="w-full h-full px-4 md:px-12 lg:px-24 xl:px-30 pb-4 md:pb-8 py-[100px]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=T5oS5DHtCt0"
              width="100%"
              height="100%"
              playing
              style={{ borderRadius: 20 }}
            />
          </div>
          <FaTimes
            className="absolute top-[100px] right-2 md:right-10 lg:right-22 z-20 text-4xl text-white cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          />
        </div>
      )}
    </section>
  );
};

export default About;
