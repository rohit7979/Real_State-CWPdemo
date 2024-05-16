import React from "react";
import { styles } from "../../styles/styles";

const List = () => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <h1 className="text-3xl font-semibold">Popular listings</h1>
      <p className="text-gray-500 mt-4">Beehome's most popular watch lists.</p>
      <div className="w-full border mt-6"></div>
    </div>
  );
};

export default List;
