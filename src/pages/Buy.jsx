import React, { useEffect } from "react";
import HomesGrid from "../components/Buy/HomesGrid";

const Buy = () => {
  useEffect(() => {
    document.title = "Beehome - Buy Homes";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomesGrid />
    </div>
  );
};

export default Buy;
