import React from "react";
import { styles } from "../styles/styles";

const FindAgent = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12`}>
      <h1 className="text-3xl font-semibold">Find agent</h1>
      <p className="text-gray-500 mt-4">Beehome's most popular watch lists.</p>
    </div>
  );
};

export default FindAgent;
