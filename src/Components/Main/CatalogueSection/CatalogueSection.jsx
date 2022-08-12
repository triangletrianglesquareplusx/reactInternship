import React, { useEffect, useContext, useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "../../../Utilities/ProductCard";

const CatalogueSection = () => {
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState([]);
  /*state = {
    categories: [],
    filteredResults: [],
    cardInfo: productData,
    inputQuery: "",
    selectQuery: "",
  };*/

  /*useEffect(() => {
    setCategories([...new Set(products.slice().map((card) => card.category))]);
  }, [products]);*/

  /*filterCards = (event) => {
    event.preventDefault();
    console.log(this.state.selectQuery, this.state.inputQuery);
    this.setState((prevState) => ({
      filteredResults: prevState.cardInfo.slice().filter((card) => {
        const re = new RegExp(this.state.inputQuery, "i");
        return (
          card.category === this.state.selectQuery &&
          Object.values(card).some((val) => re.test(val))
        );
      }),
    }));
  };*/

  /*updateSelectQuery = (event) => {
    this.setState({
      selectQuery: event.target.value,
    });
  };

  updateInputQuery = (event) => {
    this.setState({
      inputQuery: event.target.value,
    });
  };*/

  return (
    <div className="flex flex-col items-center justify-center p-5 m-2">
      <SearchBar
        /*submitHandler={this.filterCards}
        inputHandler={this.updateInputQuery}
        selectHandler={this.updateSelectQuery}*/
        categories={categories}
      />
      <div className="flex flex-col items-center justify-center m-2 md:flex-row md:flex-wrap">
        {/*filteredResults.length === 0
          ? cardInfo.map((itemOfData) => (
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
            ))
          : filteredResults.map((itemOfData) => (
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
            ))*/}
        {/*products.map((itemOfData) => (
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
        ))*/}
      </div>
    </div>
  );
};

export default CatalogueSection;
