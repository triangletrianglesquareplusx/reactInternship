import React, { Component } from "react";

import Header from "./Components/Header/Header/Header";
import Main from "./Components/Main/MainSection/Main";
import Footer from "./Components/Footer/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="font-kanit">
        <Header />
        <Main className={`flex flex-col min-h-screen`} />

        <Footer
          className={`bg-regalBlue flex flex-col justify-around items-center md:flex-row p-10`}
        />
      </div>
    );
  }
}
