import React from "react";

const FooterCard = ({ item }) => {
  const { title, texts } = item;
  return (
    <div className="mb-4 flex justify-center lg:justify-start">
      <div>
        <p className="font-semibold text-xl mb-3">{title}</p>
        {texts.map((text, index) => (
          <p key={index} className="mb-1 text-gray-500">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
