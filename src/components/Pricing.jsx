import React, { useState } from "react";
import { monthly } from "../utils/monthly";
import { yearly } from "../utils/yearly";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [currentPlan, setCurrentPlan] = useState("monthly");
  return (
    <section className="px-4 lg:px-20 xl:px-30">
      <h1 className="mt-[80px] text-center text-[#b22fae] font-semibold text-xl">
        PRICING PLAN
      </h1>
      <h1 className="text-center  font-bold text-xl mt-3 mb-6 lg:mb-8">
        Choose your pricing policy
      </h1>

      {/* pricing plans */}
      <div className="flex justify-center mb-6 lg:mb-8 ">
        <div className="bg-gray-100 p-3 rounded-md flex items-center gap-4 lg:gap-6">
          <button
            className={`priceBtn ${currentPlan === "monthly" && "!bg-white"}`}
          >
            Monthly Plan
          </button>
          <button
            className={`priceBtn ${currentPlan === "yearly" && "!bg-white"}`}
          >
            Yearly Plan
          </button>
        </div>
      </div>

      {/* pricing card */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 mb-8">
        {monthly.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;