import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";

function DesktopNav() {
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
  const toggleLeave = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(null);
  };
  const altToggle = (key) => {
    if (altSelected === key) {
      return setAltSelected(null);
    }
    setAltSelected(key);
  };
  const altToggleLeave = (key) => {
    if (altSelected === key) {
      return setAltSelected(null);
    }
    setAltSelected(null);
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
    <>
      <nav className="bg-danger d-none d-xl-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav justify-content-center">
                {data.Result.TreeList.map((item, key) => (
                  <li
                    key={key}
                    className={
                      selected === key
                        ? "nav-item menu-item menu-item-open"
                        : "nav-item menu-item"
                    }
                    onMouseEnter={() => toggle(key)}
                  >
                    {item.ID < 11 && (
                      <Link href={`/category/${item.ID}`}>
                        <span className="nav-link menu-link">
                          {item.DisplayName}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {data.Result.TreeList.map((item, key) => (
        <div
          key={key}
          onMouseLeave={() => toggleLeave(key)}
          className={
            selected === key ? "dropdown-content show" : "dropdown-content"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-3 sub-menu  mx-0 px-0">
                {item.SubCategoryList.map((subItem, subKey) => (
                  <ul key={subKey} className="nav flex-column">
                    <li className="nav-item">
                      <Link href={`/category/products/${subItem.ID}`}>
                        <span
                          className={
                            altSelected === subKey
                              ? "nav-link dropdown-list dropdown-list-hover "
                              : "nav-link dropdown-list"
                          }
                          onMouseEnter={() => altToggle(subKey)}
                        >
                          <i className="list-item fa-solid fa-chevron-right"></i>{" "}
                          {subItem.DisplayName}
                        </span>
                      </Link>
                      {subItem.SubCategoryList.length > 0 && (
                        <div
                          onMouseLeave={() => altToggleLeave(subKey)}
                          className={
                            altSelected === subKey
                              ? "alt-sub-category-show"
                              : "alt-sub-category"
                          }
                        >
                          {subItem.SubCategoryList &&
                            subItem.SubCategoryList.map((altItem, altKey) => (
                              <ul key={altKey}>
                                <Link href={`/category/products/${altItem.ID}`}>
                                  <li className="alt-sub-list">
                                    {altItem.DisplayName}
                                  </li>
                                </Link>
                              </ul>
                            ))}
                        </div>
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DesktopNav;
