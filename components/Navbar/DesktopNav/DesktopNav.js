import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";

function DesktopNav() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
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

  console.log(data);
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
                    className="nav-item menu-item"
                    onMouseEnter={() => toggle(key)}
                  >
                    {item.ID < 11 && (
                      <span className="nav-link menu-link">
                        {item.DisplayName}
                      </span>
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
              <div className="col-sm-3">
                {item.SubCategoryList.map((subItem, subKey) => (
                  <ul key={subKey} className="nav flex-column">
                    <li className="nav-item">
                      <span className="nav-link dropdown-list">
                        <i className="list-item fa-solid fa-chevron-right"></i>{" "}
                        {subItem.DisplayName}
                      </span>
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
