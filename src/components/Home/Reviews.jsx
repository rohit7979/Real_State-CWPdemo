import React from "react";
import { styles } from "../../styles/styles";
import { SiTrustpilot } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const Reviews = () => {
  return (
    <div
      className={`w-full py-6 ${styles.paddingHorizontal} flex flex-col lg:flex-row gap-y-6 items-center justify-between`}
    >
      <div className="flex flex-col items-center lg:items-start gap-y-3">
        <div className="flex items-start justify-start gap-1">
          <SiTrustpilot className="text-2xl text-green-600" />{" "}
          <span className="text-xl font-semibold">Trustpilot</span>
        </div>
        <p className="text-gray-500 text-sm">Excellent 10,000+ reviews</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-base text-yellow-500" />
          <FaStar className="text-base text-yellow-500" />
          <FaStar className="text-base text-yellow-500" />
          <FaStar className="text-base text-yellow-500" />
          <FaStar className="text-base text-yellow-500" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 w-[60%]">
        <p className="text-base text-center font-medium">
          * Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis ipsum optio veritatis dolor illum quisquam minima
          dignissimos *
        </p>
        <p className="text-gray-500 text-sm">John Doe</p>
      </div>
      <div className="flex flex-col items-center lg:items-end justify-start gap-y-4">
        <button className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-100 p-3">
          <TiArrowRight className="w-full h-full" />
        </button>
        <Link to="/reviews" className="text-gray-500 text-sm">
          View all reviews
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
