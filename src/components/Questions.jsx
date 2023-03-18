import React, { useState } from "react";
import { faq } from "../utils/questions";

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };
  return (
    <section className="mt-14">
      <h1 className="text-center text-[#b22fae] font-semibold text-xl">
        Frequently Ask Question
      </h1>
      <h1 className="text-center  font-bold text-xl mt-3 mb-6 lg:mb-8">
        Ask your question and meet
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-[60px] mt-7 mb-14">
        <div className="lg:w-[50%]">
          <h1 className="font-bold text-xl md:text-xl lg:text-4xl">
            Do you have any questions? Please ask here we ready to support
          </h1>
          <p className="mt-3 mb-5">
            If your question is not list here, please feel free to make a manual
            support.
          </p>
          <button className="relative my-4 inline-block px-8 py-3 border-2 rounded-full  bg-[#b22fae] text-white font-bold overflow-hidden transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#b22fae]">
            Ask Your Question
          </button>
        </div>
        <div className="lg:w-[50%]">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 ${
                index === activeQuestion ? "bg-gray-100" : ""
              }`}
            >
              <button
                className="flex justify-between w-full py-4 px-6 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-150"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{item.question}</span>
                <svg
                  className={`h-5 w-5 transform ${
                    index === activeQuestion ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-4 ${
                  index === activeQuestion ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
