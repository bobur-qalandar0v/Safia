import React from "react";
import { Link } from "react-router-dom";

function Zaqas3Item() {
  return (
    <div className="container">
      <div className="zaqas__paket">
        <div className="zaqas__top">
          <div className="lines">
            <div className="zaqas__top-line2"></div>
            <Link to={"/zaqas"}>
              <h3 className="zaqas__all zaqas__one">1</h3>
            </Link>
            <Link to={"/zaqas2"}>
              <h3 className="zaqas__all zaqas__two1">2</h3>
            </Link>
            <div className="zaqas__top-line4"></div>
            <h3 className="zaqas__all zaqas__three1">3</h3>
          </div>
        </div>
        <div className="zaqas__paket-warp">
          <div className="zaqas__paket-title">
            <h3>Пакеты</h3>
            <div className="all">
              <Link to={"/zaqas3"}>
                <img
                  src="public/right.png"
                  alt=""
                  className="zaqas__paket-right_btn"
                />
              </Link>
              <Link to={"/zaqas3Item"}>
                <img
                  src="public/left.png"
                  alt=""
                  className="zaqas__paket-right_btn"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="zaqas__paket-bottom">
          <div className="zaqas__paket-bottom_title">
            <h3>Фуршет M 20</h3>
            <button className="ekonomniy populyarniy">Популярный</button>
          </div>
          <div className="summa">
            <span>2 500 000 сум</span>
            <span className="opacity">3 000 000 сум</span>
          </div>
          <hr />
          <div className="dhhh">
            <div className="texts__all">
              <img
                src="public/galochka.png"
                alt=""
                className="texts__galochka"
              />
              <span>Дополнительный выбор блюд</span>
            </div>
            <div className="texts__text">
              <span>Стандартное меню</span>
              <span>Эксклюзивные закуски / канапэ</span>
            </div>
            <div className="texts__all">
              <img
                src="public/galochka.png"
                alt=""
                className="texts__galochka"
              />
              <span>Выездной персонал</span>
            </div>
            <div className="texts__text">
              <span>Бармены ( 1 бармен на 20 гостей)</span>
              <span>Официанты ( 1 официант на 3 гостя)</span>
              <span>Повара гриль мастера</span>
              <span>Повара кондитеры</span>
              <span>Менеджер мероприятия</span>
            </div>
            <div className="texts__all">
              <img
                src="public/galochka.png"
                alt=""
                className="texts__galochka"
              />
              <span>Посуда брендов на выбор</span>
            </div>
            <div className="texts__text">
              <span>Essenza</span>
              <span>Asa</span>
              <span>Tognana</span>
              <span>Easy life</span>
            </div>
          </div>
          <hr />
          <button className="global__btn2">Отменить</button>
        </div>
        <button className="global__btn tibi__btn">Применить</button>
      </div>
    </div>
  );
}

export default Zaqas3Item;
