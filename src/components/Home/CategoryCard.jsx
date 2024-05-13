import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="w-full bg-blue-50 rounded-xl flex items-center h-32 gap-6">
      <img
        src={category?.image}
        alt=""
        className="block h-full rounded-xl w-[40%]"
      />
      <div className="flex flex-col justify-center items-start gap-2 lg:px-6">
        <h1 className="font-semibold text-lg">{category?.name}</h1>
        <p className="text-sm">{category?.listing}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
