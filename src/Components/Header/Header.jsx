//import React from 'react'
import { Component } from "react";
import { Link } from "react-router-dom";
import ControlButton from "../../Utilities/ControlButton";

export default class Header extends Component {
  render() {
    return (
      <div className="p-7 flex flex-col items-center justify-center md:flex-row md:justify-between font-bold text-lg">
        <div>
          <ControlButton
            className={`font-bold text-2xl md:text-base`}
            name="LOGO"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex">
            <Link to="/">
              <ControlButton className={`text-neutralBlack`} name="Go Home" />
            </Link>

            <Link to="/catalogue">
              <ControlButton className={`text-neutralBlack`} name="Catalogue" />
            </Link>
            <Link to="/about">
              <ControlButton className={`text-neutralBlack`} name="About Us" />
            </Link>
          </div>
          <div className="flex flex-row justify-center">
            <Link to="/login">
              <ControlButton
                className={`text-regalBlue border border-regalBlue rounded-md shadow-md`}
                name="Login"
              />
            </Link>
            <Link to="/memberarea">
              <ControlButton
                className={`text-simpleWhite bg-regalBlue rounded-md shadow-md hover:text-regalBlue hover:bg-simpleWhite hover:transition hover:duration-500`}
                name="Become a member"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
