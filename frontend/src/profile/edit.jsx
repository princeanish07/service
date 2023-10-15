import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { basicDetails } from "../landing/users/service/redux/profileslice";
import { BsPersonAdd } from "react-icons/bs";
import {
  useUpdateUserMutation,
  useEditUserQuery,
} from "../landing/authentication/redux/userSlice";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
export default function Edit() {
  const dispatch = useDispatch();
  const basic = useSelector((state) => state.profile.basic);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const { data, isLoading, isError, error } = useEditUserQuery(1);

  console.log(basic);
  console.log(data);
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const form = useForm({
    defaultValues: basic,
  });
  const { register, handleSubmit } = form;
  const onSubmit = async (values) => {
    dispatch(basicDetails({ ...values, profile: previewImage }));
    navigate("/profile/category");
  };
  useEffect(() => {
    setPreviewImage(basic.profile);
  }, [basic]);
  const [show, showImage] = useState(false);
  const [image, isImage] = useState(false);
  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className=" text-gray-700 px-44">
      <form
        action=""
        className={` text-[1.1em]   grid gap-8  profile `}
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor=""> Name</label>
          <input
            type="text"
            value={`${data.data.first_name}  ${data.data.last_name}`}
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
            value={`${data.data.email}`}
          />
        </div>
        <div>
          <label htmlFor=""> Phone Number</label>
          <input
            type="text"
            value={`${data.data.phone_number}`}
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
