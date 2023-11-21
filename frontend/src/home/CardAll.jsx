import React from "react";
import img from "../images/Plumber.png";
import Card from "./card";

import { useGetAllServicesQuery } from "./cardApi";

const CardAll = () => {
  const id = localStorage.getItem("user");

  const {
    data: cards,
    isError: serviceIsError,
    isLoading: cardsLoading,
    error: serviceError,
  } = useGetAllServicesQuery();

  if (cardsLoading) {
    return <div>loading...</div>;
  }

  return <Card cards={cards} />;
};

export default CardAll;
