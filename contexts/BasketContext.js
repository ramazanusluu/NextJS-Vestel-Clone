import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-toastify";

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

  const addToBasket = (data) => {
    const itemIndex = items.card.findIndex((item) => item.ID === data.ID);
    if (itemIndex >= 0) {
      items.card[itemIndex].cardQuantity += 1;
      toast.info(
        `${items.card[itemIndex]?.DisplayName}, miktarı 1 arttırıldı.`,
        {
          position: "bottom-right",
        }
      );
    } else {
      const tempProduct = { ...data, cardQuantity: 1 };
      items.card.push(tempProduct);
      toast.success(`${data?.DisplayName}, sepete eklendi.`, {
        position: "bottom-right",
      });
    }
    localStorage.setItem("basket", JSON.stringify(items));
  };

  const removeFromBasket = (id) =>
    setItems({
      ...items,
      card: items.card.filter((cardItem) => cardItem.ID !== id),
    });

  const increase = (id) => {
    setItems({
      ...items,
      card: items.card.map((cardItem) =>
        cardItem.ID === id &&
        cardItem.count < cardItem.SelectionList[0].OptionList[0].Quantity
          ? { ...cardItem, count: cardItem.count + 1 }
          : cardItem
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
