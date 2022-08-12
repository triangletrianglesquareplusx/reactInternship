import React from "react";
import SelectOption from "./SelectOption/SelectOption";
const SearchBar = ({
  location,
  inputHandler,
  submitHandler,
  categories,
  selectHandler,
}) => {
  return (
    <form onSubmit={submitHandler} className={`flex flex-col md:flex-row`}>
      <label className={`border border-gray-500 p-1 m-2 rounded-md font-bold`}>
        Keyword:
        <input
          type="text"
          value={location}
          onChange={inputHandler}
          className={`outline-none px-1`}
        />
      </label>

      <label className={`border border-gray-500 p-1 m-2 rounded-md font-bold`}>
        Filter By:
        <select className={`outline-none px-2`} onChange={selectHandler}>
          {categories.map((singleCat) => (
            <SelectOption name={singleCat} key={singleCat[1]} />
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
};

export default SearchBar;
