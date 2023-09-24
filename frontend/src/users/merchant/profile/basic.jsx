import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { basicDetails } from "../redux/profileslice";
import { BsPersonAdd } from "react-icons/bs";
export default function Basic() {
  const dispatch = useDispatch();
  const basic = useSelector((state) => state.profile.basic);
  console.log(basic);
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

  return (
    <div className=" grid place-content-center basic bg-gray-200  ">
      <form
        action=""
        className={`relative gap-5 grid grid-cols-1 text-[1.1em]  p-5 xs:w-screen sm:w-[90Vw] md:w-[80Vw] lg:w-[60Vw] text-gray-700 `}
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className=" flex">
            <div
              className="bg-white rounded-full"
              onClick={() => {
                document.getElementById("image").click();
                showImage(true);
              }}
            >
              {!image && (
                <button
                  type="button"
                  className={
                    !show
                      ? " text-[100px] text-blue-600 font-light  "
                      : "hidden"
                  }
                >
                  <BsPersonAdd />
                </button>
              )}
              {image && (
                <img
                  src={previewImage && URL.createObjectURL(previewImage)}
                  alt=""
                  className=" w-[100px] h-[100px]  rounded-full object-cover"
                />
              )}
              <div>
                <input
                  type="file"
                  id="image"
                  className=" hidden"
                  accept="image/*"
                  onChange={(e) => {
                    setPreviewImage(e.target.files[0]);
                    isImage(true);
                  }}
                />
              </div>
            </div>
            <div className=" flex-1 grid place-content-center">
              <h2 className=" text-[2em]">BIPIN KUNWAR</h2>
            </div>
            <div>
              <p>Views</p>
            </div>
          </div>
        </div>

        <div className={previewImage ? "  text-gray-600" : "hidden"}>
          <p>Preview Profile Image</p>
          <div className="border-2 w-[400px] h-[200px] ">
            {image && (
              <img
                src={previewImage && URL.createObjectURL(previewImage)}
                alt=""
                className=" w-full h-full object-contain   "
              />
            )}
          </div>

          <div>
            <input
              type="file"
              id="image"
              className=" hidden"
              accept="image/*"
              onChange={(e) => {
                setPreviewImage(e.target.files[0]);
                isImage(true);
              }}
            />
          </div>
          
        </div>

        <div className=" grid grid-cols-1">
          <label htmlFor="">About Yourself</label>
          <textarea
            name=""
            id=""
            rows={2}
            {...register("bio")}
            className=" p-2 placeholder:text-[2em] placeholder:text-center text-gray-700 "
            placeholder="Describe Yourself"
          ></textarea>
        </div>
        <div className="flex gap-2">
          <div className=" flex-1">
            <p> Gender</p>
            <div className=" flex gap-5">
              <label htmlFor="">
                <input type="radio" />
                Male
              </label>
              <label htmlFor="">
                <input type="radio" />
                Female
              </label>
              <label htmlFor="">
                <input type="radio" />
                Others
              </label>
            </div>
          </div>
          <div className=" flex flex-col flex-1">
            <label htmlFor="">Date of Birth</label>
            <input type="date" />
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-2">
          <div className=" grid gap-1">
            <label htmlFor="">District</label>
            <input type="text" name="" id="" />
          </div>
          <div className=" grid gap-1">
            <label htmlFor="">Muncipility</label>
            <input type="text" name="" id="" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="">Ward No</label>
            <input type="text" name="" id="" />
          </div>
          <div className=" grid gap-1">
            <label htmlFor="">Chowk</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        
        <div className=" flex flex-col">
          <div className=" grid grid-cols-2 gap-2 grid-rows-2">
            <div className="flex flex-col">
              <label htmlFor="">Highest Level</label>
              <select name="" id="" className="p-1 focus:outline-none">
                <option value="">Master</option>
                <option value="">Graduation</option>
                <option value="">SLC</option>
                <option value="">SEE</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="">School/College/University</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Address</label>
              <input type="text" className="" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Special Degree</label>
              <input type="text" />
            </div>
            
          </div>
            <div className=" flex flex-col">
              <p>Work Experience</p>
              <div className="grid grid-cols-2 gap-2">

              <div className="flex flex-col">
              <label htmlFor="">Company</label>
              <input type="text" />
              </div>
              <div className="flex flex-col">
              <label htmlFor="">Role/Position</label>
              <input type="text" />
              </div>
              <div className="flex flex-col">
              <label htmlFor="">Duities</label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
              </div>
              </div>

            </div>
        </div>
   

        <div className=" mt-10  text-center ">
          <button>Save Profile</button>
        </div>
      </form>
    </div>
  );
}
