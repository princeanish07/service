import React from "react";
import img from "../images/Plumber.png";
import Card from "./card";

import { useGetAllServicesQuery } from "../Api/cardApi";
import {useGetAllSubCategoryQuery} from "../Api/subCategoryApi";
import CardSection from "../components/cardSection";
const CardAll = () => {
  const id = localStorage.getItem("user");
  const {
    data: subcategories,
    isError,
    isLoading,
    error: subcataegoryError,
  } = useGetAllSubCategoryQuery(); 
  const {
    data: cards,
    isError: serviceIsError,
    isLoading: cardsLoading,
    error: serviceError,
  } = useGetAllServicesQuery();
<<<<<<< HEAD
  
  if (cardsLoading) {
=======

  if (cardsLoading || isLoading) {
>>>>>>> develop
    return <div>loading...</div>;
  }

  return <CardSection subcategories={subcategories} cards={cards}/>;
};

export default CardAll;
