import React, { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { useLoginUserMutation } from "../../redux/userSlice";
import LoginForm from "./loginForm";
import { ColorRing } from "react-loader-spinner";
import Error from "../ErrorHandling/error";
import { motion } from "framer-motion";

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

  return (
    <>
      {isError && error?.status != 422 ? (
        <Error error={error} />
      ) : (
        <div  className=" bg-gradient-to-tr from-[#004B8F] to-[#02215B] grid place-content-center  h-screen ">

          <div className="flex w-[60Vw]  font-sans">
            <div className=" flex-1 p-10 bg-[rgba(0,0,0,.1)] text-gray-300 text-[2em]  ">
              <h2 className=" text-center">Welcome Back</h2>
              <p className="p-5 text-[1rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias facilis est adipisci velit provident exercitationem! Libero dolorem omnis sit commodi atque, odit, consectetur totam obcaecati reprehenderit, repudiandae nesciunt iste fugiat?
              </p>

            </div>

          <motion.div className=" login font-sans flex-1   "
          initial={{
            y:0
          }}
          animate={{
            y:0
          }}
          >

            <div className="  text-gray-400 text-3xl  py-2 font-sans font-medium  text-center">
              <span>Login</span>
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
                <div className=" my-5 text-sm text-gray-300">
                  <span>Already have an account ?</span>
                  <button
                    className="underline font-medium text-red-500 p-1"
                    type="button"
                    onClick={() => {
                      navigate(`/${role}/create`, {
                        state: {
                          path: location.pathname,
                        },
                      });
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </LoginForm>
          </motion.div>
          </div>

        </div>

      )}
    </>
  );
};

export default Login;
