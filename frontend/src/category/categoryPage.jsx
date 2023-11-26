import React, { useEffect, useState } from "react";
import { useViewCategoryQuery } from "../Api/categoryApi";
import { useNavigate, Outlet, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice";
import Category from "./category";
import SearchBox from "../components/searchBox";
import Button from "../components/button";
import CardAll from "./AllCards";
import { CardId } from "./CardById";
import AllForm from "./AllForm";

import { AddCategory } from "./AddCategory";
export const CategoryPage = () => {
  const selected = useSelector((state) => state.categorySlice.category);
  const create = useSelector((state) => state.categorySlice.action);
console.log('category',selected);
const navigate=useNavigate();
  const {
    data: categories,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: cataegoryError,
  } = useViewCategoryQuery();
  // console.log(categories);

  if (categoryLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
    <div className="relative">
      <section className="m-8">
        <SearchBox />
      </section>
      <section className="shadow ">
        <Category
          categories={categories}
          setCategory={setCategory}
          selected={selected}
       />
        
        
      </section>
      <section>
      {
        Object.keys(selected).length===0 ? <CardAll/> : <CardId/>
      }
      </section>
      <section>
        <AllForm/>
      </section>
   
    </div>
    </>

  );
};
