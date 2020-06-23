import React from "react";
import beansLogo from "../../picturesD/beans_logo.svg";
import "./main.css";

const Main = () => {
  const href = "bottom";
  return (
    <section className="main">
      <div className="img">
        <div className="center">
          <p className="text1">Everything You Love About Coffee</p>
          <img alt="beanslogo" src={beansLogo} />
          <p className="text2">We makes every day full of energy and taste.</p>
          <p className="text2 t2">Want to try our beans?</p>
          <a className="btn" href="#12">
            More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
