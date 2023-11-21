import React, { useEffect, useState } from "react";
import { useViewCategoryQuery } from "../../category/categoryApi";
import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import {setSelectedCategory} from '../../category/categorySlice'
import {setSelectedOnClick} from './catServiceSlice'
import { useSelector, useDispatch } from "react-redux";
// import { saveCategory } from "../redux/profileslice";
export default function Category() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.categorySlice.selectedCategory);
  const clicked=useSelector((state)=>state.catServiceSlice.selectedOnClick)
  console.log(clicked);

  const {
    data: categories,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: cataegoryError,
  } = useViewCategoryQuery();

  const [Category, setCategory] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const handleCategory = (category) => {
   dispatch(setSelectedCategory({...selected,parent:category}));
  };
  const handleSubCategory = (category) => {
   dispatch(setSelectedCategory({...selected,subparent:category}));
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

  useEffect(()=>{
    Object.keys(clicked?.parent).length !== 0 &&
                    Object.keys(clicked?.parent?.category).length === 0  ?(
                      navigate(`${clicked?.parent.name}`)
                    )
                    :(
                      Object.keys(clicked?.subparent).length !== 0 &&
                      Object.keys(clicked?.subparent?.category).length === 0  ?
                      (
                    navigate(` ${clicked?.parent?.name} /${clicked?.subparent?.name}`)

                      )
                      :(
                        Object.keys(clicked?.child).length!==0? 
                    navigate(` ${clicked?.parent?.name} /${clicked?.subparent?.name}/${clicked?.child?.name}`):
                    navigate('/user/service/category')
                      )
                    )
  },[clicked])
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

      <section className="grid md:grid-cols-6 sm:grid-cols-3 ">
        <div className="grid grid-cols-3  col-start-1 row-start-1 col-end-4 col-span-4 text-sm font-semibold ">
          <div className="  bg-white shadow overflow-hidden">
            <ul
              className=" box-border grid grid-cols-1 gap-1 p-1"
              onMouseLeave={() => handleToggle(true)}
            >
              <li className="p-2 text-red-500 ">CATEGORIES</li>
              <li className={`p-2  hover:cursor-pointer ${clicked?.parent?.name==='all'?'bg-blue-600 text-white':' hover:bg-gray-200  hover:text-gray-700'}`}
              onClick={()=>{
                dispatch(setSelectedOnClick({...clicked,parent:{name:"all",category:[]},subparent:{},child:{}}))
              }}
              onMouseEnter={()=>{
                handleCategoryToggle(false);
                handleToggle(false);
                handleCategory({name:"all",category:[]})
              }}
              >All</li>
              {categories.map((category) => {
                return (
                  <li
                    onMouseEnter={() => {
                      handleCategory(category);
                      handleCategoryToggle(false);
                      handleToggle(true);
                      // setCategoryId({ ...categoryId, parent: category.id });
                      // dispatch(setSelectedOnClick({...clicked,parent:category,subparent:{},child:{}}));

                    }}
                    onMouseLeave={() => {
                      handleToggle(false);
                    }}

                    onClick={()=>{
                console.log(category.id);
                      Object.keys(category?.category).length===0 && (
                     dispatch(setSelectedOnClick({...clicked,parent:category,subparent:{},child:{}})),
                     handleToggle(false),
                     handleCategoryToggle(false)

                     
                     )
                  
                    }}
                    key={category.id}
                    className={`p-2  hover:cursor-pointer flex  ${
                      clicked &&
                      clicked.parent &&
                      clicked.parent?.id === category.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-200  hover:text-gray-700"
                    }`}
                  >
                    <p className="flex-1">{category.name}</p>
                    {category.category &&
                      category.category.length > 0 &&
                      selected?.parent?.id === category.id && (
                        <span className="text-[#0118E6]">
                          <FaChevronRight />
                        </span>
                      )}
                  </li>
                );
              })}
            </ul>
          </div>
          { Object.keys(selected?.parent).length>0  && Object.keys(selected?.parent?.category).length>0 ? (
            <div className=" grid  bg-white shadow p-2 z-10 ">
              <ul onMouseLeave={() => handleToggle(true)} className="">
                <li className="p-2 text-red-500">SUB CATEGORIES</li>
                {selected?.parent?.category.map((subcategory) => {
                  return (
                    <li
                      key={subcategory.id}
                      onMouseEnter={() => {
                        handleSubCategory(subcategory);
                        handleToggle(true);
                        handleCategoryToggle(true);
                        // setCategoryId({
                        //   ...categoryId,
                        //   Subparent: subcategory.id,
                        // });
                      }}
                      onMouseLeave={() => {
                        handleToggle(false);
                      }}
                      onClick={()=>{
      
                        Object.keys(subcategory?.category).length===0 && (

                          dispatch(setSelectedOnClick({...clicked,parent:selected?.parent, subparent:subcategory,child:{}})),
                          handleToggle(false),
                          handleCategoryToggle(false)
                        )
                       
                          }}
                      className={`p-2 w-full hover:cursor-pointer flex ${
                        clicked &&
                        clicked.subparent &&
                        clicked.subparent?.id === subcategory.id
                          ? "bg-blue-600 text-white"
                          : "  hover:bg-gray-200  hover:text-gray-700"
                      }`}

                    >
                      <p className="flex-1">{subcategory.name}</p>
                      {selected?.subparent &&
                        Object.keys(selected?.subparent).length > 0 &&
                        toggle &&
                        selected?.subparent?.id === subcategory.id && Object.keys(selected?.subparent?.category).length > 0 &&(
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
          {Object.keys(selected?.subparent).length!=0 &&
          Object.keys(selected?.subparent?.category).length > 0 &&
          toggle &&
          toggleCatg ? (
            <div
              className=" bg-white  shadow p-2 z-10 "
              onMouseLeave={() => handleSubCategory({})}
            >
              <ul className="">
                <li className="p-2 text-red-500">SUB CATEGORIES</li>
                {selected?.subparent?.category.map((childcategory) => {
                  return (
                    <li
                      key={childcategory.id}
                      className={`p-2  ${
                       
                        clicked?.child &&
                        clicked?.child?.id === childcategory.id
                          ? "hover:cursor-pointer bg-blue-600 text-gray-100"
                          : "hover:cursor-pointer hover:bg-gray-200  hover:text-gray-700"
                      }`}
                      onClick={() => {
                        dispatch(
                          setSelectedCategory({...selected,child:childcategory})

                        )
                        dispatch(
                          setSelectedOnClick({ ...clicked, parent:selected?.parent,subparent:selected?.subparent,child:childcategory })
                        );
                        handleToggle(false);
                        handleCategoryToggle(false);

                      }}
                    >
                      {childcategory.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>

        <div
          className=" col-start-2  flex flex-col p-10 box-border  col-span-4 row-start-1 flex-1 h-[80Vh] z-auto overflow-y-auto hide-scrollbar scrolling-touch pr-1  "
          onMouseEnter={() => {
            dispatch(setSelectedCategory({
              parent:{},
              subparent:{},
              child:{}
            }))
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
