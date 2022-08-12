import React, { useState } from "react";
import ControlButton from "./ControlButton";

const ProductCard = ({
  header,
  innerText,
  altText,
  src,
  area,
  price,
  category,
  id,
  votes,
  voting,
}) => {
  const [fullCard, setFullCard] = useState(false);

  const changeCardStatus = () => {
    setFullCard((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col w-1/2 p-5 m-2 rounded-md shadow-lg md:w-1/4">
      <h2 className="font-bold text-center">{header}</h2>
      <div className="flex flex-col items-center justify-center">
        <img src={src} alt={altText}></img>
        <div className="flex flex-col">
          {fullCard ? (
            <>
              <p className="text-center">{innerText}</p>
              <p className="font-bold text-center">${price}</p>
              <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center">
                <p className="font-bold text-center">
                  Category: <span className="font-normal">{category}</span>
                </p>
                <p className="font-bold text-center">
                  Area: <span className="font-normal">{area} m2</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p>Votes: {votes}</p>
                <ControlButton name={"Vote"} clicker={voting} />
              </div>
            </>
          ) : (
            <>
              <p>No ratings yet</p>
            </>
          )}
        </div>
      </div>

      {/*<button onClick={this.changeCardStatus}>
          {this.state.isFullCard === true ? "View Less" : "View More"}
        </button>*/}

      <ControlButton
        clicker={() => changeCardStatus()}
        name={fullCard ? "View Less" : "View More"}
      />
    </div>
  );
};

export default ProductCard;
