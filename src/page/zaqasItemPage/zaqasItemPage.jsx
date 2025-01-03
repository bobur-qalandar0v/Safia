import React, { useContext, useEffect, useState } from "react";
import { Link, data, useParams } from "react-router-dom";
import { API } from "../../API";
import { urls } from "../../assets/constants/urls";
import { Collapse } from "antd";
import EditIcon from "../../assets/icon/EditIcon";
import Basket from "./Basket";
import { CardContext } from "../../context/cardContext";
import LoadingAnimate from "../../assets/icon/LoadingAnimate";

const { Panel } = Collapse;

function ZaqasItemPage() {
  const { food, getFood, addItemToCart } = useContext(CardContext);
  const [zaqas, setZaqas] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getProduct = () => {
    API.get(`${urls.card.get}/${id}`).then((res) => {
      setZaqas(res.data);
      setLoading(false);
    });
  };

  const handleEdit = (data, categoryId) => {
    addItemToCart(data, categoryId);
  };

  useEffect(() => {
    getProduct();
    getFood();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div
          className="wrap"
          style={{
            width: "100%",
            height: "97vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingAnimate />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="zaqas__item">
        <img src={zaqas.image} alt="" className="zaqas__item-img" />
        <span className="zaqas__item-position">{zaqas.title}</span>
        <div className="zaqas__item-bottom">
          <h3>{zaqas.name}</h3>
          <br />
          <div className="qwerty">
            <span className="zaqas__item-title">
              {zaqas.price ? zaqas.price.toLocaleString() : "Null"} сум
            </span>
            <div>
              <img className="img" src="/public/Star.png" alt="" />
              <img className="img" src="/public/Star.png" alt="" />
              <img className="img" src="/public/Star.png" alt="" />
              <img className="img" src="/public/Star.png" alt="" />
              <img className="img" src="/public/Star.png" alt="" />
            </div>
          </div>
        </div>
        <div className="select">
          <Collapse accordion>
            {food.map((category) => (
              <Panel header={category.name} key={category.id}>
                <Link
                  className="collapse__link"
                  to="/basket"
                  onClick={() => handleEdit(category, category.id)}
                >
                  <EditIcon />
                  Изменить
                </Link>
                {category?.items
                  ?.filter((item) => !item.removed)
                  .map((item) => (
                    <div className="bottom" key={item.id}>
                      <div className="allq">
                        <span>{item.name}</span>
                        <span>{item.count}</span>
                      </div>
                    </div>
                  ))}
              </Panel>
            ))}
          </Collapse>
        </div>
        {/* <div className="bottom">
            <div className="bottom__item">
              <span className="bottom__item-text">Перерасчет</span>
              <span className="bottom__item-summa">-200 000 сум</span>
            </div>
            <div className="bottom__item">
              <span className="bottom__item-text">Стоимость сета</span>
              <span className="bottom__item-summa">2 500 000 сум</span>
            </div>
            <div className="bottom__item">
              <span className="bottom__item-text">Итоговая цена</span>
              <span className="bottom__item-summa">2 300 000 сум</span>
            </div>
            <Link to="/basket">
              <button className="global__btn">В корзину</button>
            </Link>
          </div> */}
      </div>
    </div>
  );
  <Basket />;
}

export default ZaqasItemPage;
