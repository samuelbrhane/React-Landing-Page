import React from "react";
import FeatureCard from "./FeatureCard";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiUserSharedFill } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import feature from "../assets/feature4.png";
import feature1 from "../assets/feature5.png";
import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";

const features = [
  {
    id: 0,
    icon: <AiFillThunderbolt />,
    title: "Fast Performance",
    desc: "Users can easily manage their projects and tasks without experiencing any delays or lags. The software's quick response time enables users to navigate through the interface and access critical information in real-time, making it easier to manage project timelines and deadlines.",
  },
  {
    id: 1,
    icon: <BsFillBriefcaseFill />,
    title: "Pro Subscription",
    desc: "Provides users with additional features and benefits to enhance their project management experience. With a Pro subscription, users gain access to advanced project management tools and functionalities, such as team collaboration features, project budget tracking, and custom reporting options",
  },
  {
    id: 2,
    icon: <RiUserSharedFill />,
    title: "Partnership Deal",
    desc: "Through the partnership, users can now access a wider range of project management tools and integrations that streamline their workflow and enhance their productivity. The software's new partnership deal includes collaborations with leading project management software providers.",
  },
  {
    id: 3,
    icon: <MdContactPhone />,
    title: "Customer Support",
    desc: "Dedicated to providing users with exceptional customer support to ensure their success in project management. The software's customer support team is available 24/7 to address any issues or concerns that users may encounter during their project management journey.",
  },
];

const Features = () => {
  return (
    <div className="featureBg w-full min-h-[70vh] px-4 lg:px-20 xl:px-30">
      <h1 className="mt-[80px] text-center text-[#b22fae] font-semibold text-xl">
        QUALITY FEATURES
      </h1>
      <h1 className="text-center  font-bold text-xl mt-3 mb-6 lg:mb-8">
        Amazing Useful Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 xl:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>

      {/* Feature content */}
      <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-[30px] items-center">
        <div className="lg:w-[55%]">
          <img src={feature} alt="featureImage" className="w-full" />
        </div>
        <div className="lg:w-[45%]">
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
          <div className="flex items-center gap-2 cursor-pointer text-[#b22fae] mt-4 hover:scale-95 hover:text-[#23a34f] group">
            <p className="text-lg">Explore Details</p>
            <AiOutlineRight className="group-hover:ml-4" />
          </div>
        </div>
      </div>

      {/* Feature content */}
      <div className="flex flex-col-reverse lg:flex-row my-20 lg:gap-5 xl:gap-[30px] items-center">
        <div className="lg:w-[45%]">
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
          <div className="flex items-center gap-2 cursor-pointer text-[#b22fae] mt-4 hover:scale-95 hover:text-[#23a34f] group">
            <p className="text-lg">Explore Details</p>
            <AiOutlineRight className="group-hover:ml-4" />
          </div>
        </div>

        <div className="lg:w-[55%]">
          <img src={feature1} alt="featureImage" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Features;
