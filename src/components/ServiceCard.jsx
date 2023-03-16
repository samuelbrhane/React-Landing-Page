import React from "react";

const ServiceCard = ({ service }) => {
  const { name, text, image } = service;
  return (
    <div className="px-3 py-2 mb-3 hover:shadow-md hover:scale-105">
      <img src={image} alt="serviceImage" className="w-20 h-20 rounded-full" />
      <h1 className="font-bold my-1">{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
