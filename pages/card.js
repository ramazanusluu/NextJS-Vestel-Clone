import React from "react";
import BasketItem from "../components/Basket/BasketItem/BasketItem";
import EmptyBasket from "../components/Basket/EmptyBasket/EmptyBasket";
import SubTotal from "../components/Basket/SubTotal/SubTotal";
import { useBasket } from "../contexts/BasketContext";

export default function card() {
  const { items } = useBasket();
  return (
    <>
      <div className="card-header"></div>
      <div className="container my-4">
        <div className="row">
          {items.card.length < 1 && <EmptyBasket />}
          <div className="col-lg-8">
            {items.card.length > 0 && <BasketItem />}
          </div>
          <div className="col-lg-4">
            {items.card.length > 0 && <SubTotal />}
          </div>
        </div>
      </div>
    </>
  );
}
