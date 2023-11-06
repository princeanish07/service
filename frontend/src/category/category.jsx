import React, { useEffect, useState } from "react";
import { useViewCategoryQuery } from "./categoryApi";
import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Outlet, useParams , useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory, setPath} from "./categorySlice";
export default function Category() {
  const navigate = useNavigate();
const location=useLocation();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.categorySlice.selectedCategory);
  const {
    data:categories,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: cataegoryError,
  } = useViewCategoryQuery();
  // console.log(categories);

  if (categoryLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className="w-[20Vw] text-sm bg-white">
      <p className="p-2 text-red-500 ">CATEGORIES</p>
      <ul className=" box-border grid grid-cols-1 gap-1 p-1 ">
        {categories.map((category) => {
          return (
            <li key={category.id} className="">
              <p
                className={`p-2  hover:cursor-pointer flex  rounded-sm  shadow    ${
                  selected?.parent?.id === category.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200  hover:text-gray-700"
                }`}
                onClick={() => {
                  dispatch(
                    setSelectedCategory(
                      selected?.parent && selected?.parent?.id != category.id
                        ? { parent: category, subparent: {},child:{} }
                        : { parent: {}, subparent: {}, child:{} }
                    )
                    
                  );
                  // dispatch(setPath(location.pathname))
                  navigate(`${category.name}`)
                }}
              >
                {category.name}
              </p>

              <ul className="flex flex-col  gap-1 ml-5">
                {category.category.length > 0 &&
                  category.category.map((subcategory) => {
                    
                    return (
                      selected?.parent?.id === subcategory.parent_id &&
                          <li key={subcategory.id} className=" ">
                            <p
                              className={`p-2  hover:cursor-pointer flex shadow m-1  ${
                                selected?.subparent?.id === subcategory.id
                                  ? "bg-orange-600 text-white"
                                  : "hover:bg-gray-200  hover:text-gray-700"
                              }`}
                              onClick={() => {
                                dispatch(
                                  setSelectedCategory(
                                    selected?.subparent && selected?.subparent?.id != subcategory.id
                                      ? { ...selected, subparent: subcategory, child: {} }
                                      : { ...selected, subparent: {}, child: {} }
                                  )
                                );
                             Object.keys( selected?.subparent).length===0? navigate(`${selected?.parent?.name}/${subcategory.name}`,{state:{
                                  path:location.pathname
                                }}):navigate(`${selected?.parent.name}`)
                              }}
                            >
                              {subcategory.name}
                            </p>

                            <ul className="flex flex-col gap-1 ml-10">
                              {subcategory.category.length > 0 &&
                                subcategory.category.map((childCategory,index) => {
                                  return (
                                    
                                      selected?.subparent?.id ===
                                        childCategory.parent_id && 
                                        <li key={childCategory.id}>
                                          <p
                                            className={`p-2  hover:cursor-pointer flex rounded-sm shadow m-1 ${
                                              selected?.child?.id ===
                                              childCategory.id
                                                ? "bg-green-600 text-white"
                                                : "hover:bg-gray-200  hover:text-gray-700"
                                            }`}
                                            onClick={() => {
                                              dispatch(
                                                setSelectedCategory({
                                                  ...selected,
                                                  child: childCategory,
                                                })
                                              );
                                navigate(`${selected?.parent?.name}/${selected?.subparent?.name}/${childCategory.name}`)

                                            }}
                                          >
                                            {childCategory.name}
                                          </p>
                                        </li>
                                      
                                    
                                  );
                                })}
                            </ul>
                          </li>
                       
                    )
                    
                  })}
              </ul>
            </li>
          );
        })
      }
      </ul>

      {/* <div className="  bg-white    shadow overflow-hidden">
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
                  setSelectedCategory({ ...categoryId, parent: category.id });
                }}
                onMouseLeave={() => {
                  handleToggle(false);
                }}
                key={category.id}
                className={`p-2  hover:cursor-pointer flex   ${
                  selected && selected.parent && selected.parent === category.id
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
            <li>{""}</li>
            {Category.category.map((subcategory) => {
              return (
                <li
                  key={subcategory.id}
                  onMouseEnter={() => {
                    handleSubCategory(subcategory);
                    handleToggle(true);
                    handleCategoryToggle(true);
                    setSelectedCategory({
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
                      setSelectedCategory({
                        ...categoryId,
                        child: subcategory.id,
                      })
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
      ) : null} */}
    </div>
  );
}
