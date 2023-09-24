import React from "react";
import { useNavigate } from "react-router-dom";
import { useViewCategoryQuery } from "../../buyer/reducer/categorySlice";
import { FaChevronRight } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setSubcategory } from "../../../Vendor/redux/profileslice";

export default function Category() {
  const navigate = useNavigate();
  const form = useForm({
 defaultValues:{
  checkbox:[]
 }
  });

  const dispatch=useDispatch()
  const { register, handleSubmit, control,formState } = form;
  const {errors}=formState
  const {
    data: categories,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: cataegoryError,
  } = useViewCategoryQuery();

  const [Category, setCategory] = useState({});
  const [subCategory, setSubCategory] = useState({});

  const handleCategory = (category) => {
    setCategory(category);
  };
  const handleSubCategory = (category) => {
    setSubCategory(category);
  };
  const [toggle, setToggle] = useState(false);
  const [toggleCatg, setToggleCatg] = useState(false);

  const handleToggle = (toggle) => setToggle(toggle);

  const handleCategoryToggle = (toggle) => setToggleCatg(toggle);

  const onSumbit = (value) => {
   dispatch(setSubcategory(value))
   navigate('/profile/service')
  };
  if (categoryLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className=" grid place-content-center h-screen ">
      <form
        action=""
        className="grid grid-cols-1 gap-2 bg-[#004B8F] shadow-xl w-[60Vw] p-6  text-gray-300"
        onSubmit={handleSubmit(onSumbit)}
      >
        <div
          onMouseEnter={() => {
            handleCategory({});
            handleSubCategory({});
            handleToggle(false);
            handleCategoryToggle(false);
          }}
        >
          <div className="">
            <h2 className=" text-2xl">Profile Setup-Category Details</h2>
            <p>Step 2 of 7</p>
          </div>
          <div className="  flex justify-between ">
            <input
              type="search"
              placeholder="search category "
              className=" p-1"
            />
            <button className=" bg-[rgba(0,0,0,.2)] px-5 py-1">Add New</button>
          </div>
        </div>

        <section className=" grid grid-cols-1  shadow">
          <div className="grid grid-cols-3  text-sm  text-gray-200 font-semibold ">
            <div className="   bg-[rgba(0,0,0,.2)] shadow overflow-hidden">
              <ul className="p-2" onMouseLeave={() => handleToggle(true)}>
                <li className="p-2 hover:cursor-pointer flex hover:bg-gray-200  hover:text-gray-700">
                  All
                </li>
                {categories.map((category) => {
                  return (
                    <li
                      onMouseEnter={() => {
                        handleCategory(category);
                        handleCategoryToggle(false);
                        handleToggle(true);
                      }}
                      onMouseLeave={() => {
                        handleToggle(false);
                      }}
                      key={category.id}
                      className="p-2 hover:cursor-pointer flex hover:bg-gray-200  hover:text-gray-700"
                    >
                      <p className="flex-1">{category.name}</p>
                      {category.category &&
                        category.category.length > 0 &&
                        Category.id === category.id && (
                          <span className="text-[#0118E6]">
                            <FaChevronRight />
                          </span>
                        )}
                    </li>
                  );
                })}
              </ul>
            </div>
            {Category.category && Category.category.length > 0 ? (
              <div className=" grid bg-[rgba(0,0,0,.2)] shadow p-2 z-10 ">
                <ul onMouseLeave={() => handleToggle(true)}>
                  {Category.category.map((subcategory) => {
                    return (
                      <li
                        key={subcategory.id}
                        onMouseEnter={() => {
                          handleSubCategory(subcategory);
                          handleToggle(true);
                          handleCategoryToggle(true);
                        }}
                        onMouseLeave={() => {
                          handleToggle(false);
                        }}
                        className="p-2  w-full hover:cursor-pointer flex hover:bg-gray-200  hover:text-gray-700"
                      >
                        <label htmlFor="" className=" flex">
                          <input
                            type="checkbox"
                            className={
                              subcategory.category &&
                              subcategory.category.length > 0
                                ? "hidden"
                                : null
                            }
                          />
                          <p className="flex-1">{subcategory.name}</p>
                          {subcategory.category &&
                            subcategory.category.length > 0 &&
                            toggle &&
                            subCategory.id === subcategory.id && (
                              <span className="text-[#0118E6]">
                                <FaChevronRight />
                              </span>
                            )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {subCategory.category &&
            subCategory.category.length > 0 &&
            toggle &&
            toggleCatg ? (
              <div className=" bg-[rgba(0,0,0,.2)] shadow p-2 z-10 ">
                <ul>
                  {subCategory.category.map((subcategory) => (
                    // <Controller
                    //   key={subcategory.id}
                    //   control={control}
                    //   name={`checkbox-${subcategory.id}}`}
                    //   defaultValue={false}
                    //   render={({ field }) => {
                    //     console.log(field);
                    //     return (
                    //       <>
                    //         <input
                    //           type="checkbox"
                    //           {...field}
                    //           id={`checkbox-${subcategory.id}`}
                    //         />
                    //         <label htmlFor={subcategory.name}>
                    //           {subcategory.name}
                    //         </label>
                    //       </>
                    //     );
                    //   }}
                    // />
                    <div key={subcategory.id}>
                      <label htmlFor="">
                        <input type="checkbox" {...register('checkbox',{
                          required:{
                            value:true,
                            message:"Required"
                          }
                          
                        })} id={subcategory.name} value={subcategory.id} />
                        {
                          subcategory.name
                        }

                      </label>

                    </div>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        

          <div className=" flex justify-between col-span-3">
            <button
              className="  px-14 py-1"
              onClick={() => navigate("/profile/basic")}
            >
              Previous
            </button>

            <button className="  px-14 py-1" type="submit">
              Next
            </button>
          </div>
        </section>
        <div>
            {errors.checkbox && <p className=" text-red-500">{errors.checkbox.message}</p>}
          </div>
      </form>
    </div>
  );
}
