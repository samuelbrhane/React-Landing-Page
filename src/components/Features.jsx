import React from "react";
import FeatureCard from "./FeatureCard";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiUserSharedFill } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import feature from "../assets/feature4.png";
import feature1 from "../assets/feature5.png";
import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

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
    <div
      id="Features"
      className="featureBg w-full px-4 lg:px-20 xl:px-30 relative py-12"
    >
      <h1 className="text-center text-[#b22fae] font-semibold text-xl pt-8">
        QUALITY FEATURES
      </h1>
      <h1 className="text-center  font-bold text-xl mt-3 mb-6 lg:mb-8">
        Amazing Useful Features
      </h1>
      <motion.div
        initial={{ right: -80, opacity: 0.8 }}
        whileInView={{ right: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          type: "spring",
          bounce: 0.6,
          delay: 0.1,
        }}
        className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 xl:gap-8 relative"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </motion.div>

      {/* Feature content */}
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
          className="lg:w-[55%] relative"
        >
          <img src={feature} alt="featureImage" className="w-full" />
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
          <h1 className="text-xl font-light lg:text-4xl xl:text-[50px]">
            Designed to help individuals and teams manage tasks efficiently.
          </h1>

          <p className="mt-3 lg:mt-5">
            helps users to manage resources such as people, equipment, and
            materials. It provides a platform for users to allocate resources,
            track their usage, and monitor costs.
          </p>
          <p className="mt-1">
            provides a visual representation of a project timeline, allowing
            users to see tasks, dependencies, and deadlines.
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
        </motion.div>
      </div>

      {/* Feature content */}
      <div className="flex flex-col-reverse lg:flex-row mb-10  lg:gap-5 xl:gap-[30px] items-center">
        <motion.div
          initial={{ left: -30, opacity: 0.8 }}
          whileInView={{ left: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0.2,
            delay: 0.5,
          }}
          className="lg:w-[45%] relative"
        >
          <h1 className="text-xl font-light lg:text-4xl xl:text-[50px]">
            A powerful tool that provides a comprehensive platform.
          </h1>
          <p className="mt-3 lg:mt-5">
            Provides users with real-time data and insights about project
            progress, resource utilization, and costs.
          </p>
          <p className="mt-1">
            helps users to identify potential risks and develop strategies for
            mitigating them. It allows users to track risks, assign
            responsibility for managing them, and develop contingency plans.
          </p>

          <div className="flex gap-1 items-center mt-3 lg:mt-5">
            <AiFillCheckCircle className="text-[#23a2ad] text-xl" />
            <p className="text-lg font-semibold">
              Unlimited design possibility
            </p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer text-[#b22fae] mt-4 hover:scale-95 hover:text-[#23a34f] group">
            <p className="text-lg">Explore Details</p>
            <AiOutlineRight className="group-hover:ml-4" />
          </div>
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
          className="lg:w-[55%] relative"
        >
          <img src={feature1} alt="featureImage" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
