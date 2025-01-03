import React from "react";
import { Link } from "react-router-dom";

function Zaqas2() {
  return (
    <div className="container">
      <div className="zaqas__number">
        <div className="zaqas__top">
          <div className="lines">
            <div className="zaqas__top-line2"></div>
            <Link to={"/zaqas"}>
              <h3 className="zaqas__all zaqas__one">1</h3>
            </Link>

            <h3 className="zaqas__all zaqas__two1">2</h3>
            <div className="zaqas__top-line3"></div>
            <Link to={"/zaqas3"}>
              <h3 className="zaqas__all zaqas__three">3</h3>
            </Link>
          </div>
        </div>
        <h3 className="asd">Количество персон</h3>
        <div className="zaqas__number-wrap">
          <div className="zaqas__number-item">
            <h3>20</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>30</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>40</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>50</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>60</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>70</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>80</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>90</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>100</h3>
          </div>
          <div className="zaqas__number-item">
            <h3>100 +</h3>
          </div>
        </div>
        <Link to={"/zaqas3"}>
          <button className="global__btn zaqas2__btn">Далее</button>
        </Link>
      </div>
    </div>
  );
}

export default Zaqas2;
