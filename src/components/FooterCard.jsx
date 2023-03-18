import React from "react";

const FooterCard = ({ item }) => {
  const { title, texts } = item;
  return (
    <div>
      <p className="font-semibold text-xl mb-3">{title}</p>
      {texts.map((text, index) => (
        <p key={index} className="mb-1">
          {text}
        </p>
      ))}
    </div>
  );
};

export default FooterCard;
