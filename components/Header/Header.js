import React, { useState } from "react";
import headerLogo from "../../public/images/header-logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../Navbar/MobileNav/MobileNav";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, user, logout } = useAuth();
  console.log("AuthContext user", user);

  const handleLogout = async () => {
    logout();
    if (logout) {
      toast.info(`Çıkış işlemi başarılı.`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-xl fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand header-image me-auto">
              <Image
                src={headerLogo}
                alt="vestel-logo"
                height={35}
                width={140}
              />
            </a>
          </Link>
          {/* Mobil ekranlarda görünen ara butonu */}
          <button
            id="btn-search"
            className="btn d-xl-none d-block buton input-group-text"
            onClick={() => setIsOpen(false)}
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
            {!loggedIn && (
              <>
                <ul className="nav justify-content-center mx-4 d-none d-xl-block">
                  <Link href="/auth/register">
                    <li className="nav-item header-item">
                      <a className="nav-link header-link first-element">
                        YENİ ÜYE
                      </a>
                    </li>
                  </Link>
                  <Link href="/auth/login">
                    <li className="nav-item header-item">
                      <a className="nav-link header-link">ÜYE GİRİŞİ</a>
                    </li>
                  </Link>
                </ul>
              </>
            )}
            {loggedIn && (
              <>
                <div className="mx-4 d-none d-xl-block user-info">
                  <i className="fa-regular fa-user me-2"></i>
                  <button className="btn btn-link btn-profile">
                    {user && user.Result.FullName}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="btn btn-link btn-logout"
                  >
                    Çıkış Yap
                  </button>
                </div>
              </>
            )}
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
      <div className="desktop-menu">
        {isOpen && <MobileNav open={setIsOpen} />}
      </div>
    </div>
  );
}

export default Header;
