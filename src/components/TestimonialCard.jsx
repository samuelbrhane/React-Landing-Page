import React from "react";
import "../index.css";
import { Rating } from "@mui/material";

const TestimonialCard = ({ testimonial }) => {
  const { name, username, text, title, image, rating } = testimonial;
  return (
    <div className="relative flex flex-col justify-between h-[370px] min-w-[315px] bg-white testimonial hover:scale-[1.01] cursor-pointer shadow hover:shadow-md px-4 py-7">
      <div>
        <Rating name="rating" value={rating} style={{ color: "#23a2ad" }} />
        <p className="text-lg font-bold mt-4 mb-3">{title}</p>
        <p>{text}</p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="userImage"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div>
          <p>{name}</p>
          <p className="text-[#b22fae]">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
