import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useDeactivateUserMutation , useValidateUserMutation} from "../../User/Authentication/redux/userSlice";

import LoginForm from "../login/loginForm";

const Delete = () => {
  const [searchUser, { isLoading }] = useValidateUserMutation();

  const [deleteUser, { isLoading: isDeleting }] = useDeactivateUserMutation();

  const navigate = useNavigate();

  const [state, setState] = useState({ email: true, password: true });

  const onSubmit = async (values) => {
    const id = localStorage.getItem("user");

    console.log(id);
    const result = await searchUser(values).unwrap();
    if (!result) {
      setState({ ...state, email: false });
    } else {
      if (values.password !== result.password) {
        setState({ ...state, password: false });
      }
      else {
    const response = await deleteUser(id);
    console.log("response", response);
    if (response) {
      localStorage.removeItem("user");
      localStorage.removeItem("fname");
      localStorage.removeItem("email");
      localStorage.removeItem("logged");
      navigate("/login", { replace: true });
    }
  }
}
  };
  return (
    <div className=" form">
    <div className="  text-slate-600 text-3xl py-2 font-serif font-medium border-b-2 ">
      Deactivate User
    </div>
    <LoginForm onSubmit={onSubmit} state={state} >
    <div className=" flex">
    <div className=" bg-orange-600 text-slate-50  ">
        <button type="submit" className="px-3">
          {isDeleting ? "Deactivating" : "Deactivate"}
        </button>
      </div>
    </div>
    </LoginForm>
    </div>
  );
};

export default Delete;
