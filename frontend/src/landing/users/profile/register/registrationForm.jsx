import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, date, ref } from "yup";
import TextError from "../ErrorHandling/TextError";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Outlet } from "react-router-dom";

const CreateForm = ({ onSubmit, children, password, initialValues }) => {
  const validation = {
    first_name: string().required("Required"),
    last_name:string().required("Required"),
    email: string().email("Invalid email").required("Required"),
    phone_number: string().matches(/^[0-9]{10}$/, "Phone number is not valid"),
  
  };
  const validationSchema = object(
    password
      ? {
          ...validation,
          password: string()
            .required("Required")
            .min(4, "Reqired minimum 4 characters"),
          password_confirmation: string()
            .required("Required")
            .oneOf([ref("password"), null], "password must match"),
        }
      : validation
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
                <div>
                  <div>
                    <label htmlFor="">First Name <span className="  text-2xl text-red-600">*</span></label>
                    <Field type="text" name="first_name" id="fname" placeholder='Enter First Name'/>
                    <ErrorMessage name="first_name" component={TextError} />
                  </div>
                  <div>
                    <label htmlFor="">Last Name <span className="  text-2xl text-red-600">*</span></label>
                    <Field type="text" name="last_name" id="lname" placeholder='Enter Last Name'/>
                    <ErrorMessage name="last_name" component={TextError} />
                  </div>
                 </div> 
                  {password ? (
                    <div>
                      <div>
                        <label htmlFor="">Password <span className="  text-2xl text-red-600">*</span></label>
                        <Field type="password" name="password" id="password" placeholder='*****' />
                        <ErrorMessage name="password" component={TextError} />
                      </div>
                      <div>
                        <label htmlFor="">Confirm Password <span className="  text-2xl text-red-600">*</span></label>
                        <Field
                          type="password"
                          name="password_confirmation"
                          id=""
                          placeholder='*****'
                        />
                        <ErrorMessage
                          name="password_confirmation"
                          component={TextError}
                        />
                      </div>
                    </div>
                  ) : null}

                

                <div>
                  <div>
                    <label htmlFor="">Email <span className="  text-2xl text-red-600">*</span></label>
                    <Field type="email" name="email" id="email" placeholder='user@gmail.com' />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div>
                    <label htmlFor="">Phone Number <span className="  text-2xl text-red-600">*</span></label>
                    <Field type="text" name="phone_number" id="phone" placeholder='98********'/>
                    <ErrorMessage name="phone_number" component={TextError} />
                  </div>
                </div>

             
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  isValid: formik.isValid,
                  isSubmitting: formik.isSubmitting,
                  isDirty: formik.dirty,
                })
              )}
            </Form>
          );
        }}
      </Formik>
      <Outlet/>
    </>
  );
};

export default React.memo(CreateForm);
