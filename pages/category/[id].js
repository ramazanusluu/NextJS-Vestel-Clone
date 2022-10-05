import React from "react";
import Head from "next/head";
import SubCategoryCard from "../../components/SubCategoryCard/SubCategoryCard";

export default function SubCategory({ subCategory }) {
  console.log("subCategory", subCategory);
  return (
    <>
      <Head>
        <title>{subCategory.Result.Category.PageTitle}</title>
        <meta
          name="description"
          content={subCategory.Result.Category.MetaDescription}
        />
        <meta name="keywords" content={subCategory.Result.Category.MetaKeywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-5">
        <div className="row">
          <h5 className="display-6 text-center">
            {subCategory.Result.CategoryName}
          </h5>
          {subCategory.Result.TopCategory.SubCategoryList.map((item, key) => (
            <SubCategoryCard key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${context.params.id}`
  );
  const subCategory = await res.json();
  return {
    props: {
      subCategory,
    },
  };
};
