import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../redux/categorySlice";
import Category from "../../../services/category";
import SearchBox from "../../../components/searchBox";
import CardSection from "../../../services/cardSection";
import { useViewCategoryQuery } from "../../../Api/categoryApi";
import { useGetSubCategoryQuery } from "../../../Api/subCategoryApi";
import {useGetProviderQuery} from "../../../Api/providerApi"
import Card from "./Card";
const Home = () => {
    const categoryId = useSelector((state) => state.categorySlice.category);
    const subcategoryId = useSelector((state) => state.categorySlice.subcategory);
    const providerId=localStorage.getItem("userId");
    const {
      data: subcategories,
      isError,
      isLoading: subcategoryLoading,
      error: subcataegoryError,
    } = useGetSubCategoryQuery(categoryId );
    const {
      data: services,
      isError: serviceIsError,
      isLoading: serviceLoading,
      error: serviceError,
    } = useGetProviderQuery({categoryId, subcategoryId });
  
    const navigate = useNavigate();
    const {
      data: categories,
      isError: categoryIsError,
      isLoading: categoryLoading,
      error: cataegoryError,
    } = useViewCategoryQuery();
  
  
  
    if (categoryLoading || subcategoryLoading || serviceLoading ) {
      return <div>loading...</div>;
    }
  return (
    <>
    <div className="">
      <section className="m-8">
        <SearchBox />
      </section>
      <section className="shadow ">
        <Category
          categories={categories}
          setCategory={setCategory}
          selected={categoryId}
        />
      </section>
      <section>
        <CardSection subcategories={subcategories}>
          <Card cards={services}/>
          </CardSection>
      </section>
    
    </div>
  </>
  )
}

export default Home


