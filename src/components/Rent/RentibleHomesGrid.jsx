import React from "react";
import { styles } from "../../styles/styles";
import { popularlist } from "../../constants/popularList";
import ListCard from "../Global/ListCard";
import SearchProperty from "../Global/SearchProperty";

const RentibleHomesGrid = () => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <h1 className="text-3xl font-semibold">Search Properties to rent</h1>
      <p className="text-gray-500 mt-4">Beehome's most popular watch lists.</p>
      <SearchProperty />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RentibleHomesGrid;
