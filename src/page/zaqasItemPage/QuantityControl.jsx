import React, { useContext } from "react";
import { CardContext } from "../../context/cardContext";

function QuantityControl() {
  const {
    card,
    setCard,
    incrementItem,
    decrementItem,
    restoreItem,
    deleteItem,
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

  return (
    <div className="container">
      <div className="basket__wrap">
        {card.map((i) =>
          i?.items?.map((item) => (
            <div className="basket__main">
              <div className="basket__main-top">
                <span
                  className="basket__main-title"
                  style={{
                    opacity: item.removed === true ? 0.5 : 1,
                    // pointerEvents: item.removed === true ? "none" : "auto",
                  }}
                >
                  {item.name}
                </span>
                <span
                  className="basket__main-subtitle"
                  style={{
                    opacity: item.removed === true ? 0.5 : 1,
                  }}
                >
                  {item.count} щт
                </span>
              </div>
              <div className="basket__main-button">
                <div
                  className="basket__main-btn1"
                  style={{
                    opacity: item.removed === true ? 0.5 : 1,
                    // pointerEvents: item.removed === true ? "none" : "auto",
                  }}
                >
                  <button
                    className="increment"
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.removed === true}
                    style={{
                      cursor: item.removed === true ? "not-allowed" : "pointer",
                    }}
                  >
                    -
                  </button>
                  <span className="raqam">{item.count}</span>
                  <button
                    className="decrement"
                    onClick={() => handleIncrement(item.id)}
                    disabled={item.removed === true}
                    style={{
                      cursor: item.removed === true ? "not-allowed" : "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  {item.removed === true ? (
                    <button
                      className="Восстановить"
                      onClick={() => handleRestore(item.id)}
                    >
                      Восстановить
                    </button>
                  ) : (
                    <button
                      className="Удалить"
                      onClick={() => handleDelete(item.id)}
                    >
                      Удалить
                    </button>
                  )}
                </div>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default QuantityControl;
