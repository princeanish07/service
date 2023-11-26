import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryAciton } from "../redux/categorySlice";

const Form = ({ name, submitForm }) => {
  const dispatch = useDispatch();
  const { register, control, handleSubmit } = useForm();
  return (
    <form
      action=""
      className={`border border-gray-300 shadow-xl shadow-gray-400 rounded-md sticky top-[14Vh] m-auto`}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="flex gap-5 ">
        <div className=" grid place-content-end">
        <button
            className=" text-white text-3xl bg-red-600 rounded-full p-1 px-3"
            type="button"
            onClick={() => {
              dispatch(setCategoryAciton(""));
            }}
          >
            X
          </button>
        </div>
          <h2 className="  text-center p-2 text-2xl font-semibold">{`Add ${name} `}</h2>
      </div>
      <div>
        <label htmlFor=""> {`${name} Name`}</label>
        <input type="text" {...register("name")} />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <textarea {...register("description")} id="" rows={5}></textarea>
      </div>
      <div>
        <label htmlFor="">Key Words</label>
        <input type="text" {...register("keywords")} />
      </div>
      <div>
        <button
          className="bg-blue-600 text-white p-2"
          type="submit"
        >{` Save ${name}`}</button>
      </div>
    </form>
  );
};

export default Form;
