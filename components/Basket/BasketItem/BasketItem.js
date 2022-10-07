import React from "react";
import Link from "next/link";
import { useBasket } from "../../../contexts/BasketContext";
import Image from "next/image";

function BasketItem() {
  const { items } = useBasket();
  return (
    <>
      <h4 className="basket-item-title">SEPETİM</h4>
      <h5 className="basket-item-info">
        Sepetiniz hazır ise <span>Ödeme Sayfasına Devam Et</span> butonuna
        tıklayarak işleminizi tamamlayabilirsiniz.
      </h5>
      <div className="row mt-5 mb-4">
        <div className="col-lg-7 d-none d-lg-block basket-table-title">
          Sepetteki Ürünlerim
        </div>
        <div className="col-lg-2 text-center d-none d-lg-block basket-table-title">
          Adet
        </div>
        <div className="col-lg-2 text-center d-none d-lg-block basket-table-title">
          Toplam
        </div>
      </div>
      {items.card.map((item) => (
        <div key={item.ID} className="row">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <Image
              src={item.FirstProductImageURL}
              alt="ProductType"
              width={130}
              height={130}
              className="img-top-fluid"
            />
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <Link href={`/category/products/product-detail/${item.ID}`}>
              <h5 className="card-item-name">{item.DisplayName}</h5>
            </Link>
          </div>
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <div className="btn-group">
              <button className="btn btn-piece" onClick={() => {}}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <button className="btn btn-item-quantity">
                {item.cardQuantity}
              </button>
              <button className="btn btn-piece" onClick={() => {}}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <h6 className="item-price">
              {item.ActualPriceToShowOnScreen * item.cardQuantity > 1000
                ? (item.ActualPriceToShowOnScreen * item.cardQuantity) / 1000
                : item.ActualPriceToShowOnScreen * item.cardQuantity}{" "}
              TL
            </h6>
          </div>
          <div className="col-lg-1 text-center text-xl-start">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default BasketItem;
