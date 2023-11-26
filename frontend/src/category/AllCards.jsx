import React from "react";
import img from "../images/Plumber.png";
import CardSection from "./cardSection";
import {useGetAllSubCategoryQuery} from "../Api/subCategoryApi";
const CardAll = () => {
  const id = localStorage.getItem("user");
  const {
    data: subcategories,
    isError,
    isLoading,
    error: subcataegoryError,
  } = useGetAllSubCategoryQuery(); 
 

  if (  isLoading) {
    return <div>loading...</div>;
  }

  return <CardSection subcategories={subcategories} />;
};

export default CardAll;
