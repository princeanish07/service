import React, { useEffect, useState } from "react";
import { useUpdateUserMutation, useEditUserQuery } from "../../redux/userSlice";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import CreateForm from "../../profile/register/registrationForm";
import SubmitButton from "../ErrorHandling/submit";
import { ColorRing } from "react-loader-spinner";
import Error from "../ErrorHandling/error";
const Edit = () => {
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const id = localStorage.getItem("userId");
  const { data, isLoading ,isError,error} = useEditUserQuery(id);
 

  const [state, setState] = useState({ email: true, password: true });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className=" w-full text-center mt-10">
        <button>
          <ColorRing width="50" height="50" />
        </button>
      </div>
    );
  }
if(isError && error?.status != 422){
  return <Error error={error} />
} 
  const initialValues = {
    ...data.data,
    date_of_birth: new Date(Date.parse(data.data.date_of_birth)),
  };
  const onSubmit = async (values, { setFieldError }) => {
    await updateUser({
      ...values,
      date_of_birth: values.date_of_birth.toISOString().slice(0, 10), //Transforming date to yyy-mm-dd format//
    })
      .unwrap()
      .then((response) => {
        response?.status === 200
          ? (localStorage.setItem("email", response.email),
            localStorage.setItem("token", response.token),
            localStorage.removeItem("logged"),
            navigate("/login", { replace: true }))
          : null;
      })
      .catch((error) => {
        error?.status === 422
          ? (setFieldError("email", error.data.errors.email),
            setFieldError("phone_number", error.data.errors.phone_number))
          : null;
      });
  };

  return (
    <>
    
    <div className=" form edit  h-full grid grid-cols-1">

      <CreateForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        password={false}
      >
        <SubmitButton typeButton="Save" isLoading={isUpdating} password={false}/>
      </CreateForm>
    </div>
      

    </>
  );
};

export default Edit;
