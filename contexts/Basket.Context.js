import { useState, useEffect, createContext, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  //items => sepete atılmış ürün olarak düşünülebilir, varsayılan olarak sepette bir eleman yok
  const [items, setItems] = useState({
    card: [],
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket"));
    if (data) {
      setItems({
        ...items,
        ...data,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBasket = (data) =>
    setItems({
      ...items,
      card: items.card.find((cardItem) => cardItem.ID === data.ID)
        ? items.card.map((cardItem) =>
            cardItem.ID === data.ID
              ? { ...cardItem, count: cardItem.count + 1 }
              : cardItem
          )
        : [...items.card, { ...data, count: 1 }],
    });

  const removeFromBasket = (id) =>
    setItems({
      ...items,
      card: items.card.filter((cardItem) => cardItem.ID !== id),
    });

  const increase = (id) => {
    setItems({
      ...items,
      card: items.card.map(
        (cardItem) =>
          cardItem.ID === id &&
          cardItem.count < cardItem.SelectionList[0].OptionList[0].Quantity
            ? { ...cardItem, count: cardItem.count + 1 }
            : cardItem,
      ),
    });
  };

  const decrease = (id) => {
    setItems({
      ...items,
      card: items.card.map((cardItem) =>
        cardItem.ID === id
          ? { ...cardItem, count: cardItem.count > 1 ? cardItem.count - 1 : 1 }
          : cardItem
      ),
    });
  };

  const values = {
    items,
    setItems,
    addToBasket,
    increase,
    decrease,
    removeFromBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
