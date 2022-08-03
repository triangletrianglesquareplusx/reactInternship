import React, { Component } from "react";

import HeroElement from "./HeroElement";
import productData from "./productData.js";
import ProductCard from "./ProductCard";
import ControlButton from "../Header/ControlButton/ControlButton";

export default class HeroSection extends Component {
  state = {
    step: 3,
    cards: productData,
  };

  printCards = (arr, step) => {
    //console.log(productData);
    const cards = arr.slice(0, step);

    return cards.map((itemOfData) => {
      //console.log("times");
      return (
        <ProductCard
          header={itemOfData.header}
          innerText={itemOfData.innerText}
          src={itemOfData.src}
          altText={itemOfData.altText}
          category={itemOfData.category}
          key={itemOfData.id}
        />
      );
    });
  };

  updateNumberOfCards = () => {
    if (this.state.step < productData.length) {
      this.setState({ step: this.state.step + 3 });
    }
  };

  render() {
    const { cards, step } = this.state;
    return (
      <>
        <div className="flex justify-center m-2">
          <HeroElement
            className={`w-8/12 h-1/4 rounded-md text-neutralBlack`}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap m-2">
          {this.printCards(cards, step)}
        </div>
        <div className="flex justify-center m-2">
          <ControlButton
            className={`text-simpleWhite bg-regalBlue rounded-md`}
            name="View More"
            clicker={this.updateNumberOfCards}
          />
        </div>
      </>
    );
  }
}
