import React, { Component } from "react";
import ControlButton from "../Header/ControlButton/ControlButton";
export default class ProductCard extends Component {
  state = {
    header: this.props.header,
    innerText: this.props.innerText,
    altText: this.props.altText,
    src: this.props.src,
    area: this.props.area,
    category: this.props.category,
    id: this.props.id,
    count: 0,
    isFullCard: false,
  };

  changeCardStatus = () => {
    this.setState(
      (prevState) => ({
        isFullCard: !prevState.isFullCard,
      }),
      () => {
        //this just outputs state FMI
        //console.log(isFullCard);
      }
    );
  };

  render() {
    const { header, innerText, altText, src, area, category, isFullCard } =
      this.state;
    console.log(header, innerText, altText, src, area, category, isFullCard);
    return (
      <div className="p-5 m-2 flex flex-col rounded-md shadow-lg w-1/2 md:w-1/4">
        <h2 className="text-center font-bold">{header}</h2>
        <div className="flex flex-col justify-center items-center">
          <img src={src} alt={altText}></img>
          <div className="flex flex-col">
            {isFullCard === true ? (
              <>
                <p className="text-center">{innerText}</p>
                <p className="text-center font-bold">Category: {category}</p>
              </>
            ) : (
              <>
                <p>No ratings yet</p>
                <p>{area}</p>
              </>
            )}
          </div>
        </div>

        {/*<button onClick={this.changeCardStatus}>
          {this.state.isFullCard === true ? "View Less" : "View More"}
        </button>*/}

        <ControlButton
          clicker={this.changeCardStatus}
          name={isFullCard === true ? "View Less" : "View More"}
        />
      </div>
    );
  }
}
