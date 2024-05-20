import React, { useEffect } from "react";
import RentibleHomesGrid from "../components/Rent/RentibleHomesGrid";

const Rent = () => {
  useEffect(() => {
    document.title = "Behoome - Rent";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RentibleHomesGrid />
    </div>
  );
};

export default Rent;
