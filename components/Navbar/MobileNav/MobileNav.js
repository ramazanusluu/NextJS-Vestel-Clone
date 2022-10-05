import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";

function MobileNav() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
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
        <div className="wrapper">
          <div className="accordion">
            {data.Result.TreeList.map((item, key) => (
              <div key={key} className="item">
                <div className="title" onClick={() => toggle(key)}>
                  <h2>{item.DisplayName}</h2>
                  <span>{selected === key ? "-" : " +"}</span>
                </div>
                {item.SubCategoryList.map((subItem, subKey) => (
                  <div
                    key={subKey}
                    className={selected === key ? "content show" : "content"}
                  >
                    {subItem.DisplayName}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
