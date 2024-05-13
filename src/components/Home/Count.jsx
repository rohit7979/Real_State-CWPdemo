import React from "react";
import { styles } from "../../styles/styles";

const Count = () => {
  return (
    <section
      className={`py-6 lg:py-12 ${styles.paddingHorizontal} flex flex-col items-center gap-6`}
    >
      <h1 className="text-3xl font-semibold text-center">
        What's happening in Beehome
      </h1>
      <div className="w-full flex items-center lg:justify-around justify-center flex-wrap gap-6 pt-4">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">500M+</h1>
          <p className="text-gray-500 text-sm">In proprty sales</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">43,652</h1>
          <p className="text-gray-500 text-sm">Homes for sale</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">12,579</h1>
          <p className="text-gray-500 text-sm">Recently sold</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">5,892</h1>
          <p className="text-gray-500 text-sm">Home for rent</p>
        </div>
      </div>
    </section>
  );
};

export default Count;
