import React from "react";
import Head from "next/head";
import Products from "../../../components/Products/Products";

export default function products({ products }) {
  console.log("products", products);
  return (
    <>
      <Head>
        <title>
          {products.Result.Category.PageTitle
            ? products.Result.Category.PageTitle
            : "Vestel'le Olur Neden Olmasın | Vestel"}
        </title>
        <meta
          name="description"
          content={
            products.Result.Category.MetaDescription
              ? products.Result.Category.MetaDescription
              : "Vestel"
          }
        />
        <meta
          name="keywords"
          content={
            products.Result.Category.MetaKeywords
              ? products.Result.Category.MetaKeywords
              : "Vestel"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products data={products} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${context.params.id}`
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
