import React, { Component } from "react";
import SelectOption from "./SelectOption/SelectOption";
export default class SearchBar extends Component {
  //experiments with lifting state

  /*state = {
    location: this.props.location,
    changeHandler: this.props.changeHandler,
    submitHandler: this.props.submitHandler,
  };*/

  //attempting to use cdm

  render() {
    const { location, changeHandler, submitHandler, categories } = this.props;

    return (
      <form onSubmit={submitHandler} className={`flex flex-col md:flex-row`}>
        <label
          className={`border border-gray-500 p-1 m-2 rounded-md font-bold`}
        >
          Location:
          <input
            type="text"
            value={location}
            onChange={changeHandler}
            className={`outline-none px-1`}
          />
        </label>

        <label
          className={`border border-gray-500 p-1 m-2 rounded-md font-bold`}
        >
          Filter By:
          <select name="Category" className={`outline-none px-2`}>
            {categories.map((singleCat) => (
              <SelectOption name={singleCat} />
            ))}
          </select>
        </label>

        <input
          type="submit"
          value="Search now"
          className={`bg-neutralBlack text-simpleWhite border border-black rounded-md py-1 px-4 m-2`}
        />
      </form>
    );
  }
}
