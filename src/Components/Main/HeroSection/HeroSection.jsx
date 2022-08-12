import React, { useState, useContext } from "react";
import HeroElement from "./HeroElement";
import ProductCard from "../../../Utilities/ProductCard";
import ControlButton from "../../../Utilities/ControlButton";
import { Products } from "../ProductsContext";

const HeroSection = () => {
  const [steps, setSteps] = useState(3);

  const { products, dispatch } = useContext(Products);
  console.log(products, "this is products");
  //previously voteForSpecificCard was here - new option? :)

  const printCards = (arr, step) => {
    const cards = arr.slice(0, step);

    return cards.map((itemOfData) => (
      <ProductCard
        header={itemOfData.header}
        innerText={itemOfData.innerText}
        src={itemOfData.src}
        altText={itemOfData.altText}
        category={itemOfData.category}
        price={itemOfData.price}
        area={itemOfData.area}
        key={itemOfData.id}
        id={itemOfData.id}
        votes={itemOfData.votes}
      />
    ));
  };

  const updateNumberOfCards = () => {
    if (steps < products.length) {
      setSteps(steps + 3);
    }
  };

  return (
    <>
      <div className="flex justify-center m-2">
        <HeroElement className={`w-8/12 h-1/4 rounded-md text-neutralBlack`} />
      </div>
      <div className="flex flex-col items-center justify-center m-2 md:flex-row md:flex-wrap">
        {printCards(products, steps)}
      </div>
      <div className="flex flex-col items-center justify-center m-2">
        <ControlButton
          className={`text-simpleWhite bg-regalBlue rounded-md shadow-md overflow-hidden`}
          name="View More"
          clicker={() => updateNumberOfCards()}
        />
      </div>
    </>
  );
};

export default HeroSection;
