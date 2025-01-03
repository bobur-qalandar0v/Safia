import { createContext, useState } from "react";
import { API } from "../API";
import { urls } from "../assets/constants/urls";

export const CardContext = createContext(null);

export function CartProvider({ children }) {
  let localeInitatial = localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [];

  const [food, setFood] = useState([]);
  const [card, setCard] = useState(localeInitatial);
  // const [currentPanel, setCurrentPanel] = useState(null);
  // card.map((item) => console.log(item.items));

  // let basketData = card.map((i) => i.items);

  const getFood = () => {
    API.get(urls.sets.get).then((res) => setFood(res.data));
  };

  function setLocaleCart(data) {
    localStorage.setItem("basket", JSON.stringify(data));
    setCard(data);
  }

  const addItemToCart = (data) => {
    const existingItem = card.find((item) => item.id === data.id);

    if (existingItem) {
      setLocaleCart(
        card.map((item) =>
          item.id === data.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setLocaleCart([...card, { ...data }]);
    }
  };

  function incrementItem(id) {
    setLocaleCart(
      card.map((item) => {
        return {
          ...item,
          items: item?.items.map((i) =>
            i.id === id ? { ...i, count: i.count + 1 } : i
          ),
        };
      })
    );
  }

  function decrementItem(id) {
    setLocaleCart(
      card.map((item) => {
        return {
          ...item,
          items: item?.items.map((i) =>
            i.id === id ? { ...i, count: i.count > 1 ? i.count - 1 : 1 } : i
          ),
        };
      })
    );
  }

  function deleteItem(id) {
    setLocaleCart(
      card.map((item) => {
        return {
          ...item,
          items: item?.items.map((i) =>
            i.id === id ? { ...i, removed: true } : i
          ),
        };
      })
    );
  }

  function restoreItem(id) {
    setLocaleCart(
      card.map((item) => {
        return {
          ...item,
          items: item?.items.map((i) =>
            i.id === id ? { ...i, removed: false } : i
          ),
        };
      })
    );
  }

  function deleteAllItems(id) {
    setLocaleCart(
      card.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            items: item?.items?.map((i) => ({
              ...i,
              removed: true,
            })),
          };
        }
      })
    );
  }

  function restoreAllItems(id) {
    setLocaleCart(
      card.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            items: item?.items?.map((i) => ({
              ...i,
              removed: false,
            })),
          };
        }
        return item;
      })
    );
  }

  return (
    <CardContext.Provider
      value={{
        food,
        setFood,
        card,
        setCard,
        getFood,
        incrementItem,
        decrementItem,
        addItemToCart,
        deleteItem,
        restoreItem,
        deleteAllItems,
        restoreAllItems,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
