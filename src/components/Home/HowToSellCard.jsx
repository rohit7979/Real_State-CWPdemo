import React from "react";

const HowToSellCard = ({ heading, image }) => {
  return (
    <div className="w-72 rounded-xl bg-white">
      <div className="p-6">
        <p className="text-base font-medium">{heading}</p>
      </div>
      <img src={image} alt="" className="rounded-xl" />
    </div>
  );
};

export default HowToSellCard;
