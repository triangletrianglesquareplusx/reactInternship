import React, { Component } from "react";
import SearchBar from "./SearchBar";
import productData from "../productData.js";
import ProductCard from "../ProductCard";
export default class CatalogueSection extends Component {
  state = {
    location: this.props.location,
    changeHandler: this.props.changeHandler,
    submitHandler: this.props.submitHandler,
    cardInfo: productData,
  };

  /*state = {
    cardInfo: productData,
    value: "hey",
  };*/

  filterCards = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState((prevState) => ({
      cardInfo: prevState.cardInfo
        .slice()
        .sort((cardA, cardB) => cardA.area - cardB.area),
    }));
  };

  /*work = (event) => {
    this.setState({
      location: event.target.value,
    });
  };*/

  render() {
    const { location, cardInfo } = this.state;

    return (
      <div className="flex flex-col justify-center items-center m-2 p-5">
        <SearchBar
          location={location}
          submitHandler={this.filterCards}
          changeHandler={this.work}
          categories={[...new Set(cardInfo.map((card) => card.category))]}
        />
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap m-2">
          {cardInfo.map((itemOfData) => (
            <ProductCard
              header={itemOfData.header}
              innerText={itemOfData.innerText}
              src={itemOfData.src}
              altText={itemOfData.altText}
              category={itemOfData.category}
              price={itemOfData.price}
              area={itemOfData.area}
              key={itemOfData.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
