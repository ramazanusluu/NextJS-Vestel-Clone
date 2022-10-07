import React from "react";
import { useRouter } from "next/router";

function EmptyBasket() {
  const router = useRouter()
  return (
    <div>
      <h1 className="empty-basket-title">ALIŞVERİŞ SEPETİNİZ BOŞ</h1>
      <h4 className="empty-basket-info">
        Ürün ve kampanyaları incelemek için{" "}
        <span onClick={() => router.push("/")}>tıklayınız</span>
      </h4>
    </div>
  );
}

export default EmptyBasket;
