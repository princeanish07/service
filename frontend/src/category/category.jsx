import React, { useState } from "react";
import { useViewCategoryQuery } from "../landing/users/service/redux/categorySlice";
import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveCategory } from "../landing/users/service/redux/profileslice";
export default function Category() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.profile.saveCategory);

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
     

      <section className="grid md:grid-cols-5 sm:grid-cols-3 text-slate-600 text-[0.9em] gap-5 p-1">
        <div className="grid grid-cols-3  col-start-1 row-start-1 col-end-4 col-span-4 text-sm font-semibold ">
          <div className="  bg-white    shadow overflow-hidden">
            <ul
              className=" box-border grid grid-cols-1 gap-1 p-3"
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
                    className={`p-2  hover:cursor-pointer flex   ${
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
            <div className="   bg-white shadow z-10 ">
              <ul onMouseLeave={() => handleToggle(true)} className="p-3">
                <li className="p-3 text-red-500">SUB CATEGORIES</li>
                <li>{''}</li>
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
                        selected.Subparent &&
                        selected.Subparent === subcategory.id
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
          className=" col-start-2  flex flex-col p-3 box-border bg-white  col-span-5 row-start-1  z-auto  hide-scrollbar scrolling-touch pr-1  "
          onMouseEnter={() => {
            handleCategory({});
            handleSubCategory({});
            handleToggle(false);
          }}
        >
            <div className="flex place-content-end">
              <button className="bg-blue-600 p-2 text-white">Add Category</button>
            </div>
            {" "}
            <Outlet />
          </div>
      </section>
  );
}
