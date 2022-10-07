import React from "react";
import Link from "next/link";
import { useBasket } from "../../../contexts/BasketContext";

function SubTotal() {
  const { items } = useBasket();

  const totalCardAmount = items.card.reduce(
    (total, item) =>
      (total = total + item.ActualPriceToShowOnScreen * item.cardQuantity),
    0
  );
  const totalCardCount = items.card.reduce(
    (total, item) => (total = total + item.cardQuantity),
    0
  );

  console.log("totalCardAmount", totalCardAmount);
  return (
    <div className="sub-total">
      <h5 className="basket-item-title">SİPARİŞ ÖZETİ</h5>
      <div>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="fs-6"> Toplam {totalCardCount} ürün</span>
      </div>
      <div className="total-price mt-3">
        <span className="label">Ödenecek Tutar</span>
        <span className="label-price">
          {totalCardAmount > 1000 ? totalCardAmount / 1000 : totalCardAmount} TL
        </span>
      </div>
      <div className="total-price mt-3">
        <span className="label">Ürünler</span>
        <span className="label-price">
          {totalCardAmount > 1000 ? totalCardAmount / 1000 : totalCardAmount} TL
        </span>
      </div>
      <div className="total-price mt-3">
        <span className="label">Kargo Ücreti</span>
        <span className="label-price">Ücretsiz</span>
      </div>
      <div className="mt-3">
        <h6 className="discount">
          İndirim kodunuzu girin{" "}
          <i className="fa-solid fa-angles-right discount-icon"></i>
        </h6>
      </div>
      <Link href="/">
        <button className="btn-pay w-100 mt-3">Ödeme Sayfasına Devam Et</button>
      </Link>
      <Link href="/">
        <button className="btn-shop w-100 mt-3">ALIŞVERİŞE DEVAM ET</button>
      </Link>
    </div>
  );
}

export default SubTotal;
