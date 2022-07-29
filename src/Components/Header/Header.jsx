//import React from 'react'
import { Link } from "react-router-dom";
import ControlButton from "./ControlButton"
export default function Header() {
  return (
    <div className="p-7 flex flex-col items-center md:flex-row justify-center md:justify-between font-bold text-lg">
        <div><ControlButton className={`font-bold`}name="LOGO"/></div>
        

        <div className="flex flex-col md:flex-row">
        <Link to="/"><ControlButton className={`text-neutralBlack`} name="Go Home"/></Link>
          
        <Link to="/catalogue"><ControlButton className={`text-neutralBlack`} name="Catalogue"/></Link>
          <div className="flex flex-row">
          <Link to="/login"><ControlButton className={`text-regalBlue border border-regalBlue rounded-md shadow-md`} name="Login"/></Link>
          <Link to="/memberarea"><ControlButton className={`text-simpleWhite bg-regalBlue rounded-md shadow-md hover:text-regalBlue hover:bg-simpleWhite hover:transition hover:duration-500`} name="Become a member"/></Link>
          </div>
          
        </div>
      
    </div>
  )
}
