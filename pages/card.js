import React from "react";
import BasketItem from "../components/Basket/BasketItem/BasketItem";
import EmptyBasket from "../components/Basket/EmptyBasket/EmptyBasket";
import { useBasket } from "../contexts/BasketContext";

export default function card() {
  const { items } = useBasket();
  return (
    <>
      <div className="card-header"></div>
      <div className="container my-4">
        <div className="row">
          {items.card.length < 1 && <EmptyBasket />}
          <div className="col-md-8">
            {items.card.length > 0 && <BasketItem />}
          </div>
        </div>
      </div>
    </>
  );
}
