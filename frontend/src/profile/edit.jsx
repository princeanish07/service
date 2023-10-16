import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import logo from "../images/logo.png";

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

  const form = useForm({});
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
    <div className=" text-gray-700 grid place-content-center p-1 text-[1em] ">
      <form
        action=""
        className={`  bg-white w-[65Vw]  grid grid-cols-2 gap-12 p-6  `}
        encType="multipart/form-"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="box-border flex flex-col ">
          <div className="grid place-content-center">
            <div
              onClick={() => {
                document.getElementById("image").click();
              }}
              className=" rounded-full"
            >
              <img
                src={previewImage ? URL.createObjectURL(previewImage) : logo}
                className=" object-cover object-top w-[300px] h-[300px] rounded-full border-2 border-gray-400"
                alt=""
              />
            </div>
            <input
              type="file"
              id="image"
              className=" hidden"
              onChange={(e) => {
                setPreviewImage(e.target.files[0]);
              }}
            />
          </div>

          <div className="flex flex-col profileEdit">
            <div>
              <label htmlFor=""> Name</label>
              <input type="text" />
            </div>

            <div className="grid grid-cols-1">
              <label htmlFor="">Add Bio</label>
              <textarea
                name=""
                id=""
                rows={4}
                {...register("bio")}
                className=" p-2 placeholder:text-[1em] hover:bg-gray-100 focus:outline-none border-2 border-gray-400 rounded-md text-gray-700 "
                placeholder="Describe Yourself"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex profileEdit   box-border flex-col">
          <div>
            <label htmlFor=""> Email</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor=""> Phone Number</label>
            <input type="text" />
          </div>
          <div className="">
            <span className="font-medium">Address</span>
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
          <div className=" text-center flex-1 grid content-end  ">
            <button className="bg-blue-600 p-2 text-white">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
