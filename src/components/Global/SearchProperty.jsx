import React from "react";
import { styles } from "../../styles/styles";

const SearchProperty = () => {
  return (
    <div className={`w-full py-12 ${styles.paddingHorizontal}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 custom-shadow gap-6 lg:gap-3 py-6 px-4 rounded-xl">
        <div className="lg:border-r px-3 flex flex-col gap-1.5 border-b pb-2 lg:border-b-0 lg:pb-0">
          <label
            htmlFor="location"
            className="font-medium text-sm text-gray-400"
          >
            Location
          </label>
          <input
            type="text"
            className="w-full text-sm outline-none placeholder:text-black"
            placeholder="Karachi, Sindh"
          />
        </div>
        <div className="lg:border-r px-3 flex flex-col gap-1.5 border-b pb-2 lg:border-b-0 lg:pb-0">
          <label htmlFor="price" className="font-medium text-sm text-gray-400">
            Price
          </label>
          <input
            type="text"
            className="w-full text-sm outline-none placeholder:text-black"
            placeholder="$500 - $2,500"
          />
        </div>
        <div className="lg:border-r px-3 flex flex-col gap-1.5 border-b pb-2 lg:border-b-0 lg:pb-0">
          <label
            htmlFor="property-type"
            className="font-medium text-sm text-gray-400"
          >
            Type
          </label>
          <select
            name=""
            id=""
            className="w-full text-sm outline-none px-0 bg-transparent"
          >
            <option value="">House</option>
            <option value="">Apartment</option>
            <option value="">Villa</option>
          </select>
        </div>
        <div className="flex items-center justify-center px-3">
          <button className="text-sm font-medium bg-yellow-500 w-full h-full rounded-lg text-white py-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
