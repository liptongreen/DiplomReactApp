import React from "react";
import "./bottom.css";
import logo from "../../picturesD/coffee-beans.png";
import logoBl from "../../picturesD/beans_logo-bl.svg";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <section className="bottom">
      <div className="center">
        <div className="flexbox">
          <nav>
            <ul className="navbar">
              <li className="logo">
                <img alt="logo" src={logo} />
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
            </ul>
          </nav>
        </div>
        <img alt="logo" src={logoBl} className="img" />
      </div>
    </section>
  );
};

export default Bottom;
