import React from "react";

const HeroElement = ({ text, className }) => {
  return (
    <div className={className}>
      <h2 className={`font-bold text-lg`}>This is an inspiring title</h2>
      <div className={`flex flex-col xl:flex-row xl:items-start shadow-lg`}>
        <img
          /*this used to have className={`object-fit`}*/ src={`https://thumbs.dreamstime.com/b/yellow-luxury-house-27819255.jpg`}
          alt="a spacious and colourful home"
          className={`rounded-tl-md rounded-bl-md`}
        ></img>
        <p className={`m-3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptas quibusdam nisi autem quam excepturi maxime nemo fugit?
          Facere, temporibus ea. Est, magni aperiam! Consequatur cum assumenda
          dolorem velit. Eligendi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus voluptas quibusdam nisi autem quam
          excepturi maxime nemo fugit? Facere, temporibus ea. Est, magni
          aperiam! Consequatur cum assumenda dolorem velit. Eligendi.
        </p>
      </div>
    </div>
  );
};

export default HeroElement;
