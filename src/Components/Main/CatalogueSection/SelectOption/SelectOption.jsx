import React, { Component } from "react";

export default class SelectOption extends Component {
  render() {
    return <option>{this.props.name}</option>;
  }
}
