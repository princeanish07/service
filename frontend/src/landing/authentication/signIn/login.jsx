import React, { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { useLoginUserMutation } from "../redux/userSlice";
import LoginForm from "./loginForm";
import { ColorRing } from "react-loader-spinner";
import Error from ".././../../ErrorHandling/error";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Login = ({role,roleId}) => {
 
 
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({ email: true, password: true });

  const onSubmit = async (values, { setFieldError, resetForm }) => {

    const result = await loginUser({...values,roleId})
      .unwrap()
      .then((response) => {
        response?.status === 200
          ? (localStorage.setItem("logged", "1"),
            localStorage .setItem("userId", response.id),
            localStorage.setItem("role",response.role),
            console.log(response),
         response.role===1? (navigate("/buyer", { replace: true })):(navigate("/seller"))
            
            )
          : null;
      })
      .catch((error) => {
        error?.status === 422
          ? (setState({ ...state, password: false }),
            setFieldError("email", error.data.errors.email),
            setFieldError("password", error.data.errors.password))
           : null; 
      });
      
  };
  // bg-gradient-to-tr from-[#004B8F] to-[#02215B]
  return (
    <>
      {isError && error?.status != 422 ? (
        <Error error={error} />
      ) : (
        <div  className=" grid bg-gray-200 place-content-center  h-screen ">

          <div className="flex w-[35Vw]  font-sans">
           

          <div className=" login font-sans flex-1   ">

            <div className="  text-gray-600 text-3xl  py-2 font-sans font-medium  text-center">
              <span>Sign In User</span>
            </div>

            <LoginForm onSubmit={onSubmit} state={state}>
              <div className="grid  ">
                {isLoading ? (
                  <div className=" text-center">
                    <button>
                      <ColorRing height="40" width="40" />
                    </button>
                  </div>
                ) : (
                  <div className=" bg-[#02215B] text-white rounded-sm text-center">
                    <button
                      type="submit"
                      className="p-2 tracking-wider font-medium"
                    >
                      LOGIN
                    </button>
                  </div>
                )}
                <div className=" my-5 text-sm text-gray-800">
                  <span>Don't have an account ?</span>
                  <button
                    className="underline font-medium text-red-500 p-1"
                    type="button"
                    onClick={() => {
                      navigate('/signUp', {
                        state: {
                          path: location.pathname,
                        },
                      });
                    }}
                  >Sign Up
                  </button>
                </div>
              </div>
            </LoginForm>
          </div>
          </div>

        </div>

      )}
    </>
  );
};

export default Login;
