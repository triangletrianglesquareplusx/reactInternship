import React, { Component } from "react";
//fix this if needed!!!!!
export default class UserActivityLog extends Component {
  render() {
    const { value } = this.props;
    return (
      <p className={`p-3 shadow-md bg-green-500 text-simpleWhite`}>{value}</p>
    );
  }
}
