import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { ConsultationImg1, ConsultationImg2 } from "../../assets/export";

const FindBestHomeWithUs = () => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal} relative`}>
      <h1 className="text-3xl font-semibold text-center">
        Find the best home with us
      </h1>
      <div className="w-full lg:w-[80%] mx-auto mt-10 mb-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full lg:w-1/2 rounded-xl p-4 md:p-6 bg-slate-100 relative">
          <p className="text-sm text-gray-400 font-medium uppercase">
            consultation
          </p>
          <h1 className="text-lg font-semibold text-gray-700 my-4">
            We are ready to help,
            <br /> consult your property <br /> options with us.
          </h1>
          <Link
            to="/"
            className="text-base font-medium text-gray-600 flex items-center gap-2"
          >
            Start chat <BsArrowRight className="text-yellow-500 text-xl" />
          </Link>
          <img
            src={ConsultationImg1}
            alt=""
            className="absolute bottom-0 right-3 lg:right-5 h-[200px]"
          />
        </div>
        <div className="w-full lg:w-1/2 rounded-xl p-4 md:p-6 bg-slate-100 relative">
          <p className="text-sm text-gray-400 font-medium uppercase">
            consultation
          </p>
          <h1 className="text-lg font-semibold text-gray-700 my-4">
            Find the best price <br /> for you, calculate <br /> your property
            now.
          </h1>
          <Link
            to="/"
            className="text-base font-medium text-gray-600 flex items-center gap-2"
          >
            Calculate <BsArrowRight className="text-yellow-500 text-xl" />
          </Link>
          <img
            src={ConsultationImg2}
            alt=""
            className="absolute bottom-0 right-3 lg:right-5 h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FindBestHomeWithUs;
