import React, { useState } from "react";
import Filter from "./Product/Filter/Filter";
import List from "./Product/List/List";

function Products({ data }) {
  const [list, setList] = useState(data.Result.ProductList);
  return (
    <>
      <div className="container my-5">
        <h2>{data.Result.CategoryName}</h2>
        <div className="row">
          <div className="col-lg-3">
            <Filter />
          </div>
          <div className="col-lg-9">
            <List list={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
