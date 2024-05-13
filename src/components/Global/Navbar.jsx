import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import { FaForumbee } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div
      className={`py-6 ${styles.paddingHorizontal} flex items-center justify-between relative overflow-x-hidden`}
    >
      <h1 className="font-semibold text-2xl flex items-center gap-2">
        <FaForumbee className="text-yellow-500 text-3xl" />
        Beehome
      </h1>
      <div className="hidden lg:flex items-center gap-x-10">
        <Link to="/" className="text-base font-medium">
          Sell
        </Link>
        <Link to="/" className="text-base font-medium">
          Buy
        </Link>
        <Link to="/" className="text-base font-medium">
          Rent
        </Link>
        <Link to="/" className="text-base font-medium">
          Find agent
        </Link>
        <Link to="/" className="text-base font-medium">
          Advertise
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-x-8">
        <Link to="/" className="text-base font-medium">
          Login
        </Link>
        <Link
          to="/"
          className={`text-base font-medium ${styles.bgYellow} text-white px-5 py-2 rounded-full`}
        >
          List your property
        </Link>
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <Link
          to="/login"
          className="text-sm font-medium bg-yellow-500 px-4 py-2 text-white rounded-full"
        >
          Login
        </Link>
        <button className="" onClick={handleShowNav}>
          <CgMenuRight className="text-black text-2xl" />
        </button>
      </div>
      <div
        className={`fixed bg-transparent top-0 right-0 bottom-0 left-0 z-50 transition-all duration-500 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white w-1/2 h-full float-end p-2 shadow-2xl">
          <button className="p-0" onClick={handleShowNav}>
            <IoClose className="text-black text-2xl" />
          </button>
          <div className="flex flex-col items-start gap-y-4 pt-6 px-6">
            <Link to="/" className="text-base font-medium">
              Sell
            </Link>
            <Link to="/" className="text-base font-medium">
              Buy
            </Link>
            <Link to="/" className="text-base font-medium">
              Rent
            </Link>
            <Link to="/" className="text-base font-medium">
              Find agent
            </Link>
            <Link to="/" className="text-base font-medium">
              Advertise
            </Link>
            <Link to="/" className={`text-base font-medium`}>
              List your property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
