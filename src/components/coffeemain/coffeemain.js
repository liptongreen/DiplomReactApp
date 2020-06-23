import React from "react";
import girl from "../../picturesD/girl-865304_1920.jpg";
import logo from "../../picturesD/beans_logo-bl.svg";
import "./coffeemain.css";

const CoffeeMain = () => {
  const href = "bottom";
  return (
    <>
      <section className="ourCoffee">
        <p className="text1">Our Coffee</p>
      </section>
      <section className="aboutOurBeans">
        <div className="centerflex">
          <img alt="aboutOurBeans" src={girl} className="img" />
          <div className="text">
            <p className="text1">About our beans</p>
            <img alt="logo" src={logo} />
            <p className="text2">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p className="text2a">a</p>
            <p className="text2">
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoffeeMain;
