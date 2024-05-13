import React from "react";
import { styles } from "../../styles/styles";
import { TiArrowLeft } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Reviews2 = () => {
  return (
    <section
      className={`w-full py-6 lg:py-12 ${styles.paddingHorizontal} flex flex-col items-center justify-start gap-6`}
    >
      <p className="text-gray-500 text-lg text-center lg:w-[70%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam cumque
        quo culpa illum distinctio quidem tenetur ratione, sit rerum eaque
        facilis minima in possimus dolorem veniam aliquam accusamus ullam
        recusandae!
      </p>
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold text-base">Simon Dignite</p>
        <p className="text-gray-500 text-sm font-medium">Web Developer</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="bg-yellow-500 w-11 h-11 rounded-full flex items-center justify-center">
          <MdKeyboardArrowLeft className="text-white text-2xl" />
        </button>
        <button className="bg-yellow-500 w-11 h-11 rounded-full flex items-center justify-center">
          <MdKeyboardArrowRight className="text-white text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Reviews2;
