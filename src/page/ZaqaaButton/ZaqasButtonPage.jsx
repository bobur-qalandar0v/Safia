import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../API";
import { urls } from "../../assets/constants/urls";

function ZaqasButtonPage() {
  const [modal, setModal] = useState([]);

  const getProducts = async () => {
    const { data } = await API.get(urls.card_icons.get);
    setModal(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="zaqas">
        <div className="container">
          <div className="zaqas__wrap">
            <div className="zaqas__top">
              <div className="zaqas__top-line"></div>
              <div className="lines">
                <h3 className="zaqas__all zaqas__one">1</h3>
                <Link to={"/zaqas2"}>
                  <h3 className="zaqas__all zaqas__two">2</h3>
                </Link>
                <Link to={"/zaqas3"}>
                  <h3 className="zaqas__all zaqas__three">3</h3>
                </Link>
              </div>
            </div>
            <div className="zaqas__cards">
              <h3>Выберите услугу</h3>
              <div className="zaqas__card">
                {modal.map(item => (
                  <div className="zaqas__card-item">
                    <img src={item.icon} alt="" className="zaqas__card-img" />
                    <span className="zaqas__card-text">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to={"/zaqas2"}>
              <button className="global__btn sss">Далее</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZaqasButtonPage;
