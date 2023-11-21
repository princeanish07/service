import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setOnOver} from './cardSlice'
import Category from "./category";
const Home = () => {
  const selected = useSelector((state) => state.cardSlice.hovered);
  console.log(selected);
const dispatch=useDispatch();
  const location = useLocation();
  return (
    <section className=" grid grid-cols-5   p-3 text-[0.9em]  gap-1 ">
      <Category />
      <div className=" col-start-2  flex flex-col px-4 gap-4 box-border  col-span-4 row-start-1 flex-1 z-auto overflow-y-auto hide-scrollbar scrolling-touch   "
      onMouseEnter={()=>{
        
dispatch(setOnOver({parent:{},subparent:{},child:{}}))
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
        <div className=" flex-1 flex flex-col">
          {" "}
          <Outlet />
        </div>
      </div>

    </section>
  );
};

export default Home;
