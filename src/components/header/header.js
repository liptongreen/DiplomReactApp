import React from "react";
import "./header.css";
import logo from "../../picturesD/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="center">
        <nav>
          <ul className="navbar">
            <li className="logo">
              <Link to="/">
                <img alt="logo" src={logo} />
              </Link>
            </li>
            <li className="text">
              <Link to="/" className="text">
                Coffee house
              </Link>
            </li>
            <li className="text">
              <Link to="/coffee" className="text">
                Our coffee
              </Link>
            </li>
            <li className="text">
              <Link to="/pleasure" className="text">
                For your pleasure
              </Link>
            </li>
            <li className="text">
              <Link to="/contact" className="text">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
