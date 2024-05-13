import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import CategoryCard from "./CategoryCard";
import { categories } from "../../constants/categories";

const ListingCategory = () => {
  return (
    <section
      className={`w-full py-6 lg:py-12 ${styles.paddingHorizontal} flex flex-col items-start gap-y-3`}
    >
      <h1 className="text-2xl font-semibold">Listing category</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <p className="text-gray-500">Type of our property</p>
        <div className="flex items-center justify-start gap-2 ">
          <p className="float-left">View All 2,414 listings</p>
          <Link
            to="/"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
          >
            <TiArrowRight className="w-full h-full" />
          </Link>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
        {categories.map((category, index) => {
          return <CategoryCard category={category} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ListingCategory;
