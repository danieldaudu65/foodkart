import React, { useState } from "react";
import { fag } from "../constant";
import { FaChevronDown } from "react-icons/fa"; // Importing an arrow icon

const FAGs = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
  };

  return (
    <div
      id="faqs"
      className="bg-white h-fit lg:h-fit lg:min-h-0 lg:py-20 lg:w-[70%] lg:m-auto p-2 flex flex-col items-center"
    >
      <h1 className="text-[16px] mt-4 lg:text-[22px] font-bold mb-6">
        Frequently Asked Questions (FAQs)
      </h1>

      <div className="w-[90%]">
        {fag.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-100 p-2 lg:p-8 rounded-lg"
              onClick={() => handleQuestionClick(index)}
            >
              <p className="font-medium text-[16px] lg:text-[22px] pl-2 pr-6">
                {item.question}
              </p>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  index === selectedQuestionIndex ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer (shown only when selected) */}
            {index === selectedQuestionIndex && (
              <div className="mt-2 p-2 bg-[#FCE4B2] rounded-lg border border-gray-200">
                <p className="lg:text-[20px] text-[14px] lg:px-4 lg:py-2">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAGs;
