import React from "react";
import Head from "next/head";

export default function Products({ products }) {
  console.log("products", products);
  return (
    <>
      <Head>
        <title>{products.Result.Category.PageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
