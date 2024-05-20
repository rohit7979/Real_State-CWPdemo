import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Reviews from "../components/Home/Reviews";
import PopularListing from "../components/Home/PopularListing";
import HowToSell from "../components/Home/HowToSell";
import ListingCategory from "../components/Home/ListingCategory";
import LatestListing from "../components/Home/LatestListing";
import Count from "../components/Home/Count";
import Reviews2 from "../components/Home/Reviews2";
import FindBestHomeWithUs from "../components/Home/FindBestHomeWithUs";

const Home = () => {
  useEffect(() => {
    document.title = "Beehome - Home";
    window.scrollTo(0, 0);
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
      <Reviews2 />
      <FindBestHomeWithUs />
    </div>
  );
};

export default Home;
