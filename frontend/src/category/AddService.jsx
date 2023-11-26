import React from "react";
import {useAddCatServicesMutation} from '../Api/catServiceApi'
import Form from "./Form";
const AddService = () => {
  const [addService, { data, isLoading, isError,error }] =
    useAddCatServicesMutation();

  const submitForm = async ({service}) => {
    console.log(service);
    await addService(service)
      .unwrap()
      .then((response) => {
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isLoading) {
    return <div>Saving</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <Form submitForm={submitForm} name="Service" />

  );
};

export default AddService;
