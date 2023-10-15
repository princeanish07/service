import React from "react";
import img from "../images/Plumber.png";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useViewCategoryQuery } from "../landing/users/service/redux/categorySlice";
import { useGetAllServicesQuery } from "../landing/users/service/redux/serviceSlice";

import { useState } from "react";

const Card = () => {
  const id = localStorage.getItem("user");

  const {
    data: categories,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: cataegoryError,
  } = useViewCategoryQuery();
  const {
    data: cards,
    isError: serviceIsError,
    isLoading: cardsLoading,
    error: serviceError,
  } = useGetAllServicesQuery();

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
  console.log(Category);

  const handleCategoryToggle = (toggle) => setToggleCatg(toggle);
  if (categoryLoading || cardsLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
        {/* <div
          className=" flex   text-white"
          onMouseEnter={() => {
            handleCategory({});
            handleSubCategory({});
            handleToggle(false);
            handleCategoryToggle(false);
          }}
        > */}
         

        <section className=" grid lg:grid-cols-7 pt-5 box-border ">
          <div className="grid grid-cols-3 col-start-1 row-start-1 col-end-4 text-sm   font-semibold ">
            <div className="  shadow overflow-hidden">
              <ul className="p-2 bg-gray-100" onMouseLeave={() => handleToggle(true)}>
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
              <div className=" grid  bg-gray-100 shadow  p-2 z-10 ">
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
                        <p className="flex-1">{subcategory.name}</p>
                        {subcategory.category &&
                          subcategory.category.length > 0 &&
                          toggle &&
                          subCategory.id === subcategory.id && (
                            <span className="text-[#0118E6]">
                              <FaChevronRight />
                            </span>
                          )}
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
              <div
                className=" bg-gray-100  shadow p-2 z-10 "
                onMouseLeave={() => handleSubCategory({})}
              >
                <ul>
                  {subCategory.category.map((subcategory) => {
                    return (
                      <li
                        key={subcategory.id}
                        className="p-2 hover:cursor-pointer hover:bg-gray-200  hover:text-gray-700 "
                      >
                        {subcategory.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
          <section
            className="  col-start-2 p-1 grid gap-2  col-span-6 row-start-1  z-auto overflow-y-auto hide-scrollbar scrolling-touch pr-1 "
            onMouseEnter={() => {
              handleCategory({});
              handleSubCategory({});
              handleToggle(false);
            }}
          >
            <div className="flex gap-2 px-1 text-slate-800">
                <div className="w-[40Vw] grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <select name="" id="" className=" p-2 w-full font-medium">
                      <option value="">Location</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="" className=" p-2 w-full font-medium ">
                      <option value="">Price</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="" className=" p-2 w-full font-medium   ">
                      <option value="">Types</option>
                    </select>
                  </div>
                </div>

              
            </div>

            <div className="grid grid-cols-4 h-[84.75Vh] grid-rows-2 gap-1 p-1">
              { cards && cards.map((card) => {
                return (
                  <div
                    key={card.id}
                    className=" bg-white rounded-md shadow-lg p-2 px-5 hover:cursor-pointer hover:scale-105 transition text-slate-600"
                  >
                    <div>
                      <h3 className=" text-center p-3 font-medium text-[1.1em] ">
                        {card.category.name}
                      </h3>
                    </div>
                    <div>
                      <img
                        src={img}
                        alt=""
                        className=" w-full h-[100px] object-contain"
                      />
                    </div>
                    <div className=" flex mt-2 place-content-center">
                      {Array(card.rating)
                        .fill()
                        .map((_, index) => (
                          <div key={index} className=" ">
                            <FaStar className=" text-[#FA130C]" />
                          </div>
                        ))}
                    </div>
                    <div className="grid place-content-center  p-3">
                      <ul className=" text-center">
                        <li className=" ">
                          {" "}
                          <ul className=" flex gap-2 place-content-center">
                            <li className=" grid place-content-center">
                              <i>
                                <FaUser />
                              </i>
                            </li>
                            <li className=" text-[1em] font-medium">
                              <span>{card.first_name}</span>{" "}
                              <span>{card.last_name}</span>
                            </li>
                          </ul>
                        </li>

                        <li className=" text-[0.8em]">
                          {" "}
                          <ul className=" flex gap-2 place-content-center">
                            <li className=" grid place-content-center">
                              <i>
                                <FaPhoneAlt />
                              </i>
                            </li>
                            <li>{card.phone_number}</li>
                          </ul>
                        </li>
                        <li className=" text-[0.8em]">
                          {" "}
                          <ul className=" flex gap-2 place-content-center">
                            <li className=" grid place-content-center">
                              <i>
                                <FaEnvelope />
                              </i>
                            </li>
                            <li className=" italic">{card.email}</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
        <footer></footer>
    </>
  );
};

export default Card;
