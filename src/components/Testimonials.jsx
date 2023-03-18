import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../utils/testimonials";
import users from "../assets/users.png";
import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Testimonial = () => {
  const categoryRef = useRef(null);

  const handleScroll = (direction) => {
    if (categoryRef.current) {
      const { scrollLeft, clientWidth } = categoryRef.current;

      const scrollDirection =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;

      categoryRef.current.scrollTo({
        left: scrollDirection,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="Testimonials" className="px-4 lg:px-20 xl:px-30 relative py-12">
      <h1 className="text-center text-[#b22fae] font-semibold text-xl">
        TESTIMONIALS
      </h1>
      <h1 className="text-center  font-bold text-xl mt-3">
        Meet Client Satisfaction
      </h1>

      <div
        className="flex items-center gap-4 md:gap-12 xl:gap-4 overflow-x-scroll scrollbar-hide py-6"
        ref={categoryRef}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center gap-4">
        <BsArrowLeft
          className=" cursor-pointer text-gray-500 hover:text-gray-700 hover:scale-[1.1] text-2xl"
          onClick={() => handleScroll("left")}
        />
        <BsArrowRight
          className=" cursor-pointer text-gray-500 hover:text-gray-700 hover:scale-[1.1] text-2xl"
          onClick={() => handleScroll("right")}
        />
      </div>

      {/* Worldwide users */}
      <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-[30px] items-center">
        <motion.div
          initial={{ left: -30, opacity: 0.8 }}
          whileInView={{ left: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0.2,
            delay: 0.5,
          }}
          className="lg:w-[55%] mt-4 relative"
        >
          <img src={users} alt="featureImage" className="w-full" />
        </motion.div>
        <motion.div
          initial={{ right: -30, opacity: 0.8 }}
          whileInView={{ right: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0.2,
            delay: 0.5,
          }}
          className="lg:w-[45%] relative"
        >
          <h1 className="text-xl font-light lg:text-4xl xl:text-[50px] mb-4">
            We have more than thousand of worldwide happy customer.
          </h1>

          <p className="mt-3 lg:mt-5">
            Co-working offers beautifully crafted workspaces where people can
            create, connect, and grow their businesses at prime locations in
            multiple cities.
          </p>

          <p className="mt-1">
            Co-working offers beautifully crafted workspaces where people can
            create, connect, and grow their businesses at prime locations in
            multiple cities.
          </p>

          <div className="flex gap-1 items-center mt-3 lg:mt-5">
            <AiFillCheckCircle className="text-[#23a2ad] text-xl" />
            <p className="text-lg font-semibold">
              Unlimited design possibility
            </p>
          </div>

          <div className="flex gap-1 items-center mt-3 lg:mt-5">
            <AiFillCheckCircle className="text-[#23a2ad] text-xl" />
            <p className="text-lg font-semibold">
              Unlimited design possibility
            </p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer text-[#b22fae] mt-4 hover:scale-95 hover:text-[#23a34f] group">
            <p className="text-lg">Learn More</p>
            <AiOutlineRight className="group-hover:ml-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
