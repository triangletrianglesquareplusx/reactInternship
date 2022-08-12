import React, { Component } from "react";
import { ProductsContext } from "./Components/Main/ProductsContext";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="font-kanit">
        <Header />
        <ProductsContext>
          <Main className={`flex flex-col min-h-screen`} />
        </ProductsContext>

        <Footer
          className={`bg-regalBlue flex flex-col justify-around items-center md:flex-row p-10`}
        />
      </div>
    );
  }
}
