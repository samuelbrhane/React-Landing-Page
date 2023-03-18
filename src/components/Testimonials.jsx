import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../utils/testimonials";
import users from "../assets/users.png";
import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";

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
    <div className="mb-6 px-4 lg:px-20 xl:px-30">
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
        <div className="lg:w-[55%] mt-4">
          <img src={users} alt="featureImage" className="w-full" />
        </div>
        <div className="lg:w-[45%]">
          <h1 className="text-xl font-light lg:text-4xl xl:text-[50px] mb-4">
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

          <div className="flex items-center gap-2 cursor-pointer text-[#b22fae] mt-4 hover:scale-95 hover:text-[#23a34f] group">
            <p className="text-lg">Learn More</p>
            <AiOutlineRight className="group-hover:ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
