import React from "react";
import { useRegisterUserMutation } from "../../redux/userSlice";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CreateForm from "./registrationForm";
import Error from "../ErrorHandling/error";
import SubmitButton from "../ErrorHandling/submit";

const Create = ({ role }) => {
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
    navigate("/seller");
    console.log({ ...values, id: role, is_active: true });
    await userRegister({
      ...values,
      id: role,
      is_active: true,
    })
      .unwrap()
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        localStorage.setItem("email", response.email);
        localStorage.removeItem("logged");
        navigate("/seller/home");
      })
      .catch((error) => {
        error?.status === 422
          ? (setFieldError("email", error.data.errors.email),
            setFieldError("phone_number", error.data.errors.phone_number))
          : null;
      });
    l;
  };
  return (
    <>
      {isError && error?.status != 422 ? (
        <Error error={error} />
      ) : (
        <div className=" h-screen text-slate-800 flex flex-col bg-gray-200">
            <div className="     flex bg-[#2A3166] p-3 text-white  ">
              <h2 className=" flex-1 text-center text-lg   ">
                Already Have an Account?
              </h2>
              <span className=""><NavLink to="/signIn">Sign In</NavLink></span>
            </div>
          <div className=" form font-sans flex-1 grid place-content-center">

            <CreateForm
              onSubmit={onSubmit}
              initialValues={initialValues}
              password={true}
            >
              <SubmitButton
                isLoading={isLoading}
                typeButton="Create Account"
                o
                password={true}
              />
            </CreateForm>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Create);
