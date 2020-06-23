import React from "react";
import cap from "../../picturesD/coffee-pic.png";
import logo from "../../picturesD/beans_logo-bl.svg";
import "./pleasuremain.css";

const PleasureMain = () => {
  const href = "bottom";
  return (
    <>
      <section className="forYourPleasure">
        <p className="text1">For your pleasure</p>
      </section>
      <section className="aboutOurGoods">
        <div className="centerflex">
          <img alt="aboutOurBeans" src={cap} className="img" />
          <div className="text">
            <p className="text1">About our goods</p>
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
        <hr class="line" />
      </section>
    </>
  );
};

export default PleasureMain;
