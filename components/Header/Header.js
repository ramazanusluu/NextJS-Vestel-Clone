import React, { useState } from "react";
import headerLogo from "../../public/images/header-logo.png";
import Image from "next/image";
import MobileNav from "../Navbar/MobileNav/MobileNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <span className="navbar-brand header-image me-auto img-fluid">
            <Image src={headerLogo} alt="vestel-logo" height={35} width={140} />
          </span>
          {/* Mobil ekranlarda görünen ara butonu */}
          <button
            id="btn-search"
            className="btn d-xl-none d-block buton input-group-text"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {!isOpen && (
            <button
              id="btn-hamburger"
              className="btn btn-bars d-xl-none d-block"
              onClick={() => setIsOpen(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          {isOpen && (
            <button
              id="btn-hamburger"
              className="btn btn-closed d-xl-none d-block"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
          <div className="navbar-collapse">
            {/* Kampanyalar ve vstel.com.tr farkı yazısı */}
            <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0 d-none d-xl-flex">
              <li className="nav-item">
                <a className="nav-link header-text" href="/">
                  Kampanyalar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-text" href="/">
                  Vestel.com.tr Farkı
                </a>
              </li>
            </ul>
            {/* Search için input group */}
            <div>
              <div className="input-group d-none d-xl-flex">
                <input
                  type="text"
                  className="form-control search"
                  placeholder="Ürün, kategori, servis, mağaza ara"
                />
                <button className="btn btn-desktop-search input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <ul className="nav justify-content-center mx-4 d-none d-xl-block">
              <li className="nav-item header-item">
                <a className="nav-link header-link first-element" href="/">
                  YENİ ÜYE
                </a>
              </li>
              <li className="nav-item header-item">
                <a className="nav-link header-link" href="/">
                  ÜYE GİRİŞİ
                </a>
              </li>
            </ul>
            <div className="d-none d-xl-block">
              <div className="position-relative">
                <i className="fa-solid fa-basket-shopping"></i>
                <span className="basket-items position-absolute top-100 start-100 translate-middle badge rounded-pill rounded-circle">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <MobileNav />}
    </div>
  );
}

export default Header;
