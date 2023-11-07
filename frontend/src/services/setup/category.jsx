import React, { useState } from "react";
import { useViewCategoryQuery } from "../../category/categoryApi";
import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import {setSelectedCategory} from '../../category/categorySlice'
import { useSelector, useDispatch } from "react-redux";
// import { saveCategory } from "../redux/profileslice";
export default function Category() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.category.selectedCategory);

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
  const [categoryId, setCategoryId] = useState({
    parent: null,
    Subparent: null,
    child: null,
  });
  if (categoryLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className=" bg-gray-100 text-slate-600  gap-5 grid grid-cols-1 p-3 text-[0.9em]">
      <div>
        <form action="" className=" grid grid-cols-7 gap-3">
          <div className=" shadow bg-white">
            <input
              type="search"
              className="   p-2  focus:outline-none text-black font-normal w-full"
              placeholder="Search Category"
            />
          </div>

          <div className=" flex  h col-span-6  bg-gray-300 w-[70Vw]  rounded-sm">
            <div className=" flex-1">
              <input
                type="search"
                name=""
                id=""
                className="  flex-1  w-full p-2 text-gray-800  focus:outline-none rounded-sm text-sm"
                placeholder="Search Your Services"
              />
            </div>
            <div className="  px-5 p-2 grid place-content-center bg-[#0118E6] rounded-sm">
              <button>
                <FaSearch className=" text-gray-300" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <section className="grid md:grid-cols-7 sm:grid-cols-3 ">
        <div className="grid grid-cols-3  col-start-1 row-start-1 col-end-4 col-span-4 text-sm font-semibold ">
          <div className="  bg-white shadow overflow-hidden">
            <ul
              className=" box-border grid grid-cols-1 gap-1 p-1"
              onMouseLeave={() => handleToggle(true)}
            >
              <li className="p-2 text-red-500 ">CATEGORIES</li>
              {categories.map((category) => {
                return (
                  <li
                    onMouseEnter={() => {
                      handleCategory(category);
                      handleCategoryToggle(false);
                      handleToggle(true);
                      setCategoryId({ ...categoryId, parent: category.id });
                    }}
                    onMouseLeave={() => {
                      handleToggle(false);
                    }}
                    key={category.id}
                    className={`p-2  hover:cursor-pointer flex  ${
                      selected &&
                      selected.parent &&
                      selected.parent === category.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-200  hover:text-gray-700"
                    }`}
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
            <div className=" grid  bg-white shadow p-2 z-10 ">
              <ul onMouseLeave={() => handleToggle(true)} className="">
                <li className="p-2 text-red-500">SUB CATEGORIES</li>
                {Category.category.map((subcategory) => {
                  return (
                    <li
                      key={subcategory.id}
                      onMouseEnter={() => {
                        handleSubCategory(subcategory);
                        handleToggle(true);
                        handleCategoryToggle(true);
                        setCategoryId({
                          ...categoryId,
                          Subparent: subcategory.id,
                        });
                      }}
                      onMouseLeave={() => {
                        handleToggle(false);
                      }}
                      className={`p-2 w-full hover:cursor-pointer flex ${
                        selected &&
                        selected.subparent &&
                        selected.subparent === subcategory.id
                          ? "bg-blue-600 text-white"
                          : "  hover:bg-gray-200  hover:text-gray-700"
                      }`}
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
              className=" bg-white  shadow p-2 z-10 "
              onMouseLeave={() => handleSubCategory({})}
            >
              <ul className="">
                <li className="p-2 text-red-500">SUB CATEGORIES</li>
                {subCategory.category.map((subcategory) => {
                  return (
                    <li
                      key={subcategory.id}
                      className={`p-2  ${
                        selected &&
                        selected.child &&
                        selected.child === subcategory.id
                          ? "hover:cursor-pointer bg-blue-600 text-gray-100"
                          : " hover:bg-gray-200  hover:text-gray-700"
                      }`}
                      onClick={() => {
                        handleToggle(false);
                        handleCategoryToggle(false);
                        dispatch(
                          saveCategory({ ...categoryId, child: subcategory.id })
                        );

                        navigate(`${subcategory.id}`);
                      }}
                    >
                      {subcategory.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>

        <div
          className=" col-start-2  flex flex-col p-10 box-border  col-span-5 row-start-1 flex-1 h-[80Vh] z-auto overflow-y-auto hide-scrollbar scrolling-touch pr-1  "
          onMouseEnter={() => {
            handleCategory({});
            handleSubCategory({});
            handleToggle(false);
          }}
        >
          <div className=" flex-1 flex flex-col">
            {" "}
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}
