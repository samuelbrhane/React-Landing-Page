import React from "react";
import FeatureCard from "./FeatureCard";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiUserSharedFill } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

const features = [
  {
    id: 0,
    icon: <AiFillThunderbolt />,
    title: "Fast Performance",
    desc: "Users can easily manage their projects and tasks without experiencing any delays or lags. The software's quick response time enables users to navigate through the interface and access critical information in real-time, making it easier to manage project timelines and deadlines. Additionally, the fast performance of the software ensures that project updates and changes are promptly reflected, keeping all team members up-to-date and informed.",
  },
  {
    id: 1,
    icon: <BsFillBriefcaseFill />,
    title: "Pro Subscription",
    desc: "Provides users with additional features and benefits to enhance their project management experience. With a Pro subscription, users gain access to advanced project management tools and functionalities, such as team collaboration features, project budget tracking, and custom reporting options. The Pro subscription also enables users to customize their workflows, assign tasks to team members, and set project deadlines, making it easier to manage complex projects with multiple stakeholders.",
  },
  {
    id: 2,
    icon: <RiUserSharedFill />,
    title: "Partnership Deal",
    desc: "Through the partnership, users can now access a wider range of project management tools and integrations that streamline their workflow and enhance their productivity. The software's new partnership deal includes collaborations with leading project management software providers, as well as integrations with popular third-party applications such as Google Drive, Dropbox, and Trello. ",
  },
  {
    id: 3,
    icon: <MdContactPhone />,
    title: "Customer Support",
    desc: "Dedicated to providing users with exceptional customer support to ensure their success in project management. The software's customer support team is available 24/7 to address any issues or concerns that users may encounter during their project management journey. The customer support team consists of experienced professionals who are knowledgeable about the software's features and capabilities and are trained to assist users with any questions they may have.",
  },
];

const Features = () => {
  return (
    <div className="featureBg w-full min-h-[70vh] px-4 lg:px-12 xl:px-18">
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
    </div>
  );
};

export default Features;
