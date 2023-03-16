import React, { useState, useEffect } from "react";
import "../index.css";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ stat }) => {
  const { title, time, value, suffix } = stat;
  const [values, setValues] = useState(0);
  const { inView, ref } = useInView({
    threshold: 0,
  });

  //set value 0 when not in view
  useEffect(() => {
    if (!inView) setValues(0);
  }, [inView]);

  // increase value
  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (values < value) {
        setValues(values + 1);
      } else {
        clearInterval(animationInterval);
      }
    }, time);

    return () => clearInterval(animationInterval);
  }, [values]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md"
      ref={ref}
    >
      <div className="lg:text-lg font-semibold text-gray-700 mb-4">{title}</div>
      <div className="text-4xl font-bold text-green-500 animate-grow">
        {values}
        {suffix && suffix}
      </div>
    </div>
  );
};

export default AnimatedCard;
