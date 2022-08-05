import { Component } from "react";

export default class ControlButton extends Component {
  render() {
    //put your destructuring in the render!!!!

    const { name, className, clicker } = this.props;
    return (
      <button className={`${className}, m-2 p-3`} onClick={clicker}>
        {name}
      </button>
    );
  }
}
