import React from "react";
import EmptyBasket from "../components/Basket/EmptyBasket/EmptyBasket";
import { useBasket } from "../contexts/BasketContext";

export default function card() {
  const { items } = useBasket();
  return (
    <>
      <div className="card-header"></div>
      <div className="container my-5">
        <div className="row">
          {items.card.length < 1 && <EmptyBasket />}
        </div>
      </div>
    </>
  );
}
