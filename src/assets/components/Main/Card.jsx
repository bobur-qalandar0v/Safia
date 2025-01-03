import React, { useEffect, useState } from "react";
import Stakan from "../../icon/stakan";
import { urls } from "../../constants/urls";
import { API } from "../../../API";
import { Link } from "react-router-dom";

function Card() {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const { data } = await API.get(urls.card.get);
    setProduct(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h3>Сеты</h3>
        {product.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__top">
              <div className="card__top-left">
                <img className="card__top-left_image" src={item.image} alt="" />
              </div>
              <div className="card__top-right">
                <span className="card__top-right_text">{item.title}</span>
                <div className="card__top-right_image">
                  <img className="img" src="public/Star.png" alt="" />
                  <img className="img" src="public/Star.png" alt="" />
                  <img className="img" src="public/Star.png" alt="" />
                  <img className="img" src="public/Star.png" alt="" />
                  <img className="img" src="public/Star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="card__bottom">
              <h4 className="card__bottom-title">{item.name}</h4>
              <div className="card__bottom_all">
                <span className="card__bottom_price">
                  {item.price.toLocaleString()} сум
                </span>
                <Link to={`/zaqasItempage/${item.id}`}>
                  <button className="card__bottom_button">Подробнее</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="div">
          <Link to={"/zaqas"} className="global__btn">
            Заказать кейтеринг
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
