import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import img from "../../images/Plumber.png";
import img1 from "../../images/logo.png";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useViewCategoryQuery } from "./reducer/categorySlice";
import { useGetAllServicesQuery } from "./reducer/serviceSlice";

import { useState } from "react";

const Home = () => {
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
      <div className=" grid bg-gradient-to-tr h-screen  grid-cols-1">
        <div
          className=" flex bg-slate-50"
          onMouseEnter={() => {
            handleCategory({});
            handleSubCategory({});
            handleToggle(false);
            handleCategoryToggle(false);
          }}
        >
          <div className=" w-[14.2Vw] flex place-content-center">
            <img src={img1} alt="" className=" w-[100px] h-[100px]" />
          </div>
          <div className=" flex-1">
            <nav className=" grid   text-[#0118E6] p-2  place-content-end ">
              <ul className=" flex   text-sm font-medium gap-10  px-5">
                <li className=" ">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className=" ">
                  <NavLink to="profile">Profile</NavLink>
                </li>
                <li className=" ">
                  <NavLink to="profile">Category</NavLink>
                </li>
                <li className=" ">
                  <NavLink to="profile">Services</NavLink>
                </li>
                <li className=" ">
                  <NavLink to="profile">Notification</NavLink>
                </li>

                <li className=" ">
                  <NavLink to="/buyer/login">Sign Up</NavLink>
                </li>
              </ul>
            </nav>
            <div className="flex  flex-col gap-2 text-slate-500">
              <div className=" place-content-center grid grid-cols- px-3">
                <div className=" flex   shadow bg-gray-300 w-[60Vw] rounded-sm">
                  <div className=" flex-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="  flex-1 px-2 w-full p-2 text-gray-800  focus:outline-none rounded-sm text-sm"
                      placeholder="Search Your Services"
                    />
                  </div>
                  <div className="  px-5 p-2 grid place-content-center bg-[#0118E6] rounded-sm">
                    <button>
                      <FaSearch className=" text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" grid place-content-center font-sans text-sm">
                <div className="w-[50Vw] grid grid-cols-3 gap-20 text-xs">
                  <div>
                    <select name="" id="" className=" p-1 font-medium">
                      <option value="">Location</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="" className=" p-1 font-medium ">
                      <option value="">Price</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="" className=" p-1 font-medium   ">
                      <option value="">Types</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className=" grid lg:grid-cols-7 ">
          <div className="grid grid-cols-3 col-start-1 row-start-1 col-end-4 text-sm  text-gray-200 font-semibold ">
            <div className="   bg-[#004B8F]  shadow overflow-hidden">
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
              <div className=" grid  bg-[#004B8F] shadow p-2 z-10 ">
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
                className=" bg-[#004B8F]  shadow p-2 z-10 "
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
            className=" grid xl:grid-cols-4 grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 col-start-2 py-2  col-span-6 row-start-1 flex-1 h-[83Vh] z-auto overflow-y-auto hide-scrollbar scrolling-touch pr-1 bg-white  "
            onMouseEnter={() => {
              handleCategory({});
              handleSubCategory({});
              handleToggle(false);
            }}
          >
            {cards.map((card) => {
              return (
                <div
                  key={card.id}
                  className=" bg-white rounded-md shadow  shadow-gray-400 p-2 px-5 hover:cursor-pointer hover:scale-105 transition text-slate-600"
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
          </section>
        </section>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
