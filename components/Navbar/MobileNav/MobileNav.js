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
    <div>
      <h1>MobileNav component</h1>
    </div>
  );
}

export default MobileNav;
