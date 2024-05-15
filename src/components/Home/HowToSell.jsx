import React from "react";
import { styles } from "../../styles/styles";
import HowToSellCard from "./HowToSellCard";
import { howToSell } from "../../constants/howToSell";

const HowToSell = () => {
  return (
    <section
      className={`w-full py-6 lg:py-20 ${styles.paddingHorizontal} flex flex-col items-center bg-blue-50`}
    >
      <h1 className="text-5xl font-semibold text-center lg:leading-[60px]">
        How to sell your home in <br />
        Beehome in easy way
      </h1>
      <div className="w-full flex items-center justify-center gap-6 flex-wrap pt-12 pb-6">
        {howToSell.map((sale, index) => {
          return (
            <HowToSellCard
              heading={sale.heading}
              image={sale.image}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowToSell;
