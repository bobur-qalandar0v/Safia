import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/cardContext";
import { API } from "../../API";
import { urls } from "../../assets/constants/urls";

function Basket() {
  const {
    card,
    setCard,
    incrementItem,
    decrementItem,
    restoreItem,
    deleteItem,
    deleteAllItems,
    restoreAllItems,
  } = useContext(CardContext);

  const handleIncrement = (id) => {
    incrementItem(id);
  };

  const handleDecrement = (id) => {
    decrementItem(id);
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };

  const handleRestore = (id) => {
    restoreItem(id);
  };

  const handleDeleteAllItems = (id) => {
    deleteAllItems(id);
  };

  const handleRestoreAllItems = (id) => {
    restoreAllItems(id);
  };

  const handleChange = () => {
    // const filteredItems = data?.items?.filter((item) => !item.removed);
    // const updatedData = { ...data, items: filteredItems };
    // editSets(updatedData);

    const updateData = card.map((item) => {
      const changedItems = item?.items?.filter((i) => i.removed !== undefined);
      return { id: item.id, items: changedItems };
    });

    updateData.forEach((data) => {
      if (data.items.length > 0) {
        API.patch(`${urls.sets.edit(data.id)}`, { items: data.items })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      localStorage.removeItem("basket");
      setCard([]);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setCard]);

  return (
    <div className="container">
      <div className="basket">
        <div className="basket__warp">
          <div className="basket__top">
            {card.map((item) => (
              <div
                key={item.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h3 className="basket__title">{item.name}</h3>
                {item?.items?.every((i) => i.removed === true) ? (
                  <button
                    className="basket__restore-button"
                    onClick={() => handleRestoreAllItems(item.id)}
                  >
                    Восстановить все
                  </button>
                ) : (
                  <button
                    className="basket__delete-button"
                    onClick={() => handleDeleteAllItems(item.id)}
                  >
                    Удалить весь раздел
                  </button>
                )}
              </div>
            ))}
          </div>
          {card.map((item) => (
            <div key={item.id}>
              {item?.items?.map((i) => (
                <div className="basket__main" key={i.id}>
                  <div className="basket__main-top">
                    <span
                      className="basket__main-title"
                      style={{
                        opacity: i.removed === true ? 0.5 : 1,
                        // pointerEvents: i.removed === true ? "none" : "auto",
                      }}
                    >
                      {i.name}
                    </span>
                    <span
                      className="basket__main-subtitle"
                      style={{
                        opacity: i.removed === true ? 0.5 : 1,
                      }}
                    >
                      {i.count} щт
                    </span>
                  </div>
                  <div className="basket__main-button">
                    <div
                      className="basket__main-btn1"
                      style={{
                        opacity: i.removed === true ? 0.5 : 1,
                        // pointerEvents: i.removed === true ? "none" : "auto",
                      }}
                    >
                      <button
                        className="increment"
                        onClick={() => handleDecrement(i.id)}
                        disabled={i.removed === true}
                        style={{
                          cursor:
                            i.removed === true ? "not-allowed" : "pointer",
                        }}
                      >
                        -
                      </button>
                      <span className="raqam">{i.count}</span>
                      <button
                        className="decrement"
                        onClick={() => handleIncrement(i.id)}
                        disabled={i.removed === true}
                        style={{
                          cursor:
                            i.removed === true ? "not-allowed" : "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      {i.removed === true ? (
                        <button
                          className="Восстановить"
                          onClick={() => handleRestore(i.id)}
                        >
                          Восстановить
                        </button>
                      ) : (
                        <button
                          className="Удалить"
                          onClick={() => handleDelete(i.id)}
                        >
                          Удалить
                        </button>
                      )}
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <div className="basket__btns">
                <button className="basket__cancel-btn">Отменить</button>
                <button className="basket__confirm-btn" onClick={handleChange}>
                  Подтвердить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
