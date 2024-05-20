import React from "react";
import { styles } from "../../styles/styles";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      className={`w-full py-8 lg:py-20 ${styles.paddingHorizontal} text-center flex flex-col items-center gap-y-6 lg:gap-y-16`}
    >
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
        Find your home
      </h1>
      <div className="h-20 w-full md:w-[70%] bg-slate-100 rounded-full p-2 mx-auto flex items-center justify-between">
        <input
          type="text"
          className="h-full px-3 lg:px-6 text-base outline-none bg-transparent w-[80%]"
          placeholder="Search address, city..."
        />
        <button className="text-base bg-black text-white px-4 h-full rounded-full flex items-center justify-center flex-row gap-2 w-[20%]">
          <IoSearch className="text-xl hidden md:block" />
          <span>Find out</span>
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-auto lg:h-[90vh] rounded-3xl brightness-90 -z-10"
      />
    </div>
  );
};

export default Hero;
