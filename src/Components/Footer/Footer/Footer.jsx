import InfoBox from "../Footer/InfoBox";
import values from "../dataStuff/data.js";
import React from "react";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      {values.map((itemOfData) => (
        <InfoBox key={itemOfData.key} value={itemOfData.name} />
      ))}
    </div>
  );
};

export default Footer;
