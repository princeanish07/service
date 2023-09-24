import React from "react";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { object, string } from "yup";
import TextError from "../ErrorHandling/TextError";
const LoginForm = ({ onSubmit, children, state }) => {
  const email = localStorage.getItem("email");
  const initialValues = {
    email: email ? email : "",
    password: "",
  };
  const validationSchema = object({
    email: string().email("Enter valid email").required("Required"),

    password: string().required("Required"),
  });

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email<span className="  text-2xl text-red-600">*</span></label> 
          <Field type="email" name="email" id="email" className="input" placeholder='user@gmail.com' /> 
        <ErrorMessage name="email" component={TextError}  />
        {!state.email ? (
          <div className=" text-red-600">Email Does not Match</div>
        ) : null}
        </div>

        <div>
          <label htmlFor="password">Password <span className="  text-2xl text-red-600">*</span></label>
          <Field
            type="password"
            name="password"
            id="password"
            className="input"
            placeholder='*****'
          />
        <ErrorMessage name="password" component={TextError} />
        </div>
       

        {children}
      </Form>
    </Formik>
    </>

  );
};

export default LoginForm;
