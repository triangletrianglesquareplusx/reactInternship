import InfoBox from "../Footer/InfoBox";
//import ErrorBox from "../Footer/ErrorBox";

import values from "../dataStuff/data.js";
import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    className: this.props.className,
  };

  render() {
    const { className } = this.state;
    return (
      <div className={className}>
        {values.map((itemOfData) => (
          <InfoBox key={itemOfData.key} value={itemOfData.name} />
        ))}
      </div>
    );
  }
}
