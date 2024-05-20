import React from "react";
import { styles } from "../styles/styles";

const Sell = () => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <h1 className="text-3xl font-semibold">Sell your property</h1>
      <p className="text-gray-500 mt-4">
        We take care of the sale from start to finish.
      </p>
    </div>
  );
};

export default Sell;
