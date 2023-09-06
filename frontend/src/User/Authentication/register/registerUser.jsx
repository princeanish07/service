import React from "react";
import { useRegisterUserMutation } from "../redux/userSlice";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import CreateForm from "./registrationForm";
import Error from "../ErrorHandling/error";
import SubmitButton from "../ErrorHandling/submit";

const CreateUser = ({role}) => {
  const [userRegister, { isLoading, error, isError }] =
    useRegisterUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
 
  };
console.log(role);

  const onSubmit = async (values, { resetForm, setFieldError }) => {
    navigate('/seller')
    console.log({...values,id:role,is_active:true});
    await userRegister({
      ...values,
      id:role,
      is_active:true
    })
      .unwrap()
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        localStorage.setItem("email", response.email);
        localStorage.removeItem("logged");
        navigate('/seller/home');
      })
      .catch((error) => {
        error?.status === 422
          ? (setFieldError("email", error.data.errors.email),
            setFieldError("phone_number", error.data.errors.phone_number))
          : null;
      });
  l};
  return (
    <>
      {isError && error?.status != 422 ? (
        <Error error={error} />
      ) : (
        <div className="bg-gradient-to-tr from-[#004B8F] to-[#02215B] grid place-content-center   h-screen text-slate-400">

        <div className=" form font-sans bg-[rgba(0,0,0,.2)] w-[50Vw] p-5 grid grid-cols-1 gap-10 shadow-3xl shadow-[rgba(0,0,0,.4)]">
          <div className="   text-2xl font-medium text-center p-2 ">
            Create Your Account
          </div>

          <CreateForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            password={true}
          >
            <SubmitButton
              isLoading={isLoading}
              typeButton="Register Account"
   o           password={true}
            />
          </CreateForm>
        </div>
        </div>

      )}
    </>
  );
};

export default React.memo(CreateUser)