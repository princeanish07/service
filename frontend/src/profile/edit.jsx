import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { BsPersonAdd } from "react-icons/bs";
import {
  useUpdateUserMutation,
  useEditUserQuery,
} from "../authentication/AuthSlice";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
export default function Edit() {
  // const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  // const { , isLoading, isError, error } = useEditUserQuery(1);

  console.log();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const form = useForm({

  });
  const { register, handleSubmit } = form;
  const onSubmit = async (values) => {
    navigate("/profile/category");
  };

  const [show, showImage] = useState(false);
  const [image, isImage] = useState(false);
  // if (isLoading) {
  //   return <div>Loading</div>;
  // }

  return (
    <div className=" text-gray-700 grid place-content-center p-1 ">
      <form
        action=""
        className={` text-[1.1em]  bg-white w-[60Vw] grid gap-8  profile `}
        encType="multipart/form-"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor=""> Name</label>
          <input
            type="text"
          />
        </div>

        <div className="">
          <label htmlFor="">Add Bio</label>
          <textarea
            name=""
            id=""
            rows={3}
            {...register("bio")}
            className=" p-2 placeholder:text-[1em]  bg-gray-200 s text-gray-700 "
            placeholder="Describe Yourself"
          ></textarea>
        </div>
        <div>
          <label htmlFor=""> Email</label>
          <input
            type="text"
          />
        </div>
        <div>
          <label htmlFor=""> Phone Number</label>
          <input
            type="text"
          />
        </div>

        <div className="">
        <div>
          <label htmlFor="">Location</label>
        </div>
          <div className="">
            <label htmlFor="">District</label>
            <input type="text" name="" id="" />
          </div>
          <div className="">
            <label htmlFor="">Muncipility</label>
            <input type="text" name="" id="" />
          </div>
          <div className="">
            <label htmlFor="">Ward No</label>
            <input type="text" name="" id="" />
          </div>
          <div className="">
            <label htmlFor="">Chowk</label>
            <input type="text" name="" id="" />
          </div>
        </div>


        <div className=" text-center ">
          <button className="bg-blue-600 p-2 text-white">Update Profile</button>
        </div>
      </form>
    </div>
  );
}
