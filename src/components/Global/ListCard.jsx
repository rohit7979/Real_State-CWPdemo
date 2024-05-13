import React from "react";
import { FiHeart } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { PiDotsNineBold } from "react-icons/pi";

const ListCard = () => {
  return (
    <div className="w-full rounded-xl shadow-lg hover:shadow-none hover:bg-blue-50 transition-all duration-300 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-xl"
      />
      <div className="w-full p-4 flex flex-col items-start gap-3">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-semibold text-xl">$549,000</h1>
          <button className="w-8 h-8 rounded-full flex items-center justify-center p-2 border border-gray-400">
            <FiHeart className="w-full h-full text-gray-400" />
          </button>
        </div>
        <p className="text-gray-500 text-base font-medium">
          Single Family House
        </p>
        <p className="text-sm">
          54 School Street Unit 211H, Westbury, NY 11590
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <IoBedOutline className="text-gray-500 text-base" />
            <span className="text-sm">4 bds</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <PiBathtub className="text-gray-500 text-base" />
            <span className="text-sm">4 ba</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <PiDotsNineBold className="text-gray-500 text-base" />
            <span className="text-sm">1209 sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
