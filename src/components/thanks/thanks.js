import React from "react";
import logobl from "../../picturesD/beans_logo-bl.svg";
import vector from "../../picturesD/vector.png";
import back from "../../picturesD/back-arrow.png";
import { Link } from "react-router-dom";
import "./thanks.css";

const Thanks = () => {
  return (
    <section class="thanks">
      <p class="text1">Tell us about your tastes</p>
      <img alt="logobl" src={logobl} class="img" />
      <p class="text2">
        Thank you so much
        <br />
        We contact you as soon as posible
      </p>
      <img alt="vector" src={vector} class="img2" />

      <Link to="/contact">
        <p class="btn">
          Another? <img src={back} />{" "}
        </p>
      </Link>
    </section>
  );
};

export default Thanks;
