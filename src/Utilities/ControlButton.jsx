import React from "react";

const ControlButton = ({ name, className, clicker }) => {
  return (
    <button className={`${className}, m-2 p-3`} onClick={clicker}>
      {name ? name : "Click Me"}
    </button>
  );
};

export default ControlButton;
