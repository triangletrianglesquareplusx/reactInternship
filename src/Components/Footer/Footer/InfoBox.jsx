import React, { Component } from "react";

export default class InfoBox extends Component {
  state = {
    key: this.props.index,
    value: this.props.value,
  };

  render() {
    const { value } = this.state;
    return (
      <div
        className={`font-bold hover:border-b-2 hover:border-b-simpleWhite  p-5 m-3`}
      >
        <p>{value}</p>
      </div>
    );
  }
}
