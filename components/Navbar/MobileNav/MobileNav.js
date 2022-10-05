import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";

function MobileNav() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [altSelected, setAltSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };
  const subToggle = (i) => {
    if (altSelected === i) {
      return setAltSelected(null);
    }
    setAltSelected(i);
  };
  useEffect(() => {
    setLoading(true);
    fetch("https://store.vrunibex.com/mobile2/mbProduct/CategoryList")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="d-xl-none d-block">
      <div className="mobil-menubar">
        <div className="mobil-auth">
          <ul className="nav justify-content-center mx-4">
            <li className="nav-item header-item">
              <span className="nav-link mobil-header-link first-element">
                YENİ ÜYE
              </span>
            </li>
            <li className="nav-item header-item">
              <span className="nav-link mobil-header-link">ÜYE GİRİŞİ</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="accordion">
            {data.Result.TreeList.map((item, key) => (
              <div key={key}>
                {item.ID < 11 && (
                  <div className={selected === key ? "item show" : "item"}>
                    <div className="title">
                      <Link href={`/category/${item.ID}`}>
                        <h2 className="mobil-menu-title">{item.DisplayName}</h2>
                      </Link>
                      <span onClick={() => toggle(key)}>
                        {selected === key ? "-" : " +"}
                      </span>
                    </div>
                    {item.SubCategoryList.map((subItem, subKey) => (
                      <div
                        key={subKey}
                        className={
                          selected === key ? "content show" : "content"
                        }
                      >
                        <Link href={`/category/products/${subItem.ID}`}>
                          <span className="mobil-sub-category">
                            {subItem.DisplayName}
                          </span>
                        </Link>

                        {subItem.SubCategoryList.length > 0 && (
                          <>
                            <span
                              onClick={() => subToggle(subKey)}
                              className="float-end sub-info"
                            >
                              {altSelected === subKey ? "-" : " +"}
                            </span>
                            <div
                              className={
                                altSelected === subKey
                                  ? "sub-content-show"
                                  : "sub-content"
                              }
                            >
                              {subItem.SubCategoryList &&
                                subItem.SubCategoryList.map(
                                  (altItem, altKey) => (
                                    <ul key={altKey}>
                                      <Link
                                        href={`/category/products/${altItem.ID}`}
                                      >
                                        <li className="mobil-alt-category">
                                          {altItem.DisplayName}
                                        </li>
                                      </Link>
                                    </ul>
                                  )
                                )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="ms-3">
          <h6 className="header-text">Kampanyalar</h6>
          <h6 className="header-text">Vestel.com.tr Farkı</h6>
        </div>
        <button className="btn btn-cart position-relative ms-3 mb-3">
          <i className=" fa-solid fa-basket-shopping"></i>
          <span className="basket-items position-absolute top-100 start-100 translate-middle bg-warning border border-light badge rounded-pill rounded-circle">
            1
          </span>
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
