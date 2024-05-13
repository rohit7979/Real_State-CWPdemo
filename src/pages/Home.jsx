import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Reviews from "../components/Home/Reviews";
import PopularListing from "../components/Home/PopularListing";
import HowToSell from "../components/Home/HowToSell";
import ListingCategory from "../components/Home/ListingCategory";
import LatestListing from "../components/Home/LatestListing";
import Count from "../components/Home/Count";

const Home = () => {
  useEffect(() => {
    document.title = "Beehome - Home";
  }, []);
  return (
    <div>
      <Hero />
      <Reviews />
      <PopularListing />
      <HowToSell />
      <ListingCategory />
      <LatestListing />
      <Count />
    </div>
  );
};

export default Home;
