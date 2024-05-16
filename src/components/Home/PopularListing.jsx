import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import ListCard from "../Global/ListCard";
import { popularlist } from "../../constants/popularList";

const PopularListing = () => {
  return (
    <section
      className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
    >
      <h1 className="text-2xl font-semibold">Popular listings</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <p className="text-gray-500">Beehome's most popular watch lists.</p>
        <div className="flex items-center justify-start gap-2 ">
          <p className="float-left">View All 2,414 listings</p>
          <Link
            to="/listings"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
          >
            <TiArrowRight className="w-full h-full" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-start gap-4">
        <button className="bg-black text-white text-base px-5 py-2 rounded-full border border-black">
          House
        </button>
        <button className="bg-transparent text-black text-base px-5 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-black hover:border-black transition-all duration-300">
          Apartment
        </button>
        <button className="bg-transparent text-black text-base px-5 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-black hover:border-black transition-all duration-300">
          Villa
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
    </section>
  );
};

export default PopularListing;
