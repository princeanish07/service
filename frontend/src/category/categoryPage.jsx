import React from 'react'
import Category from './category'
import { Outlet, useNavigate,useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
export const CategoryPage = () => {
  const selected = useSelector((state) => state.categorySlice.category);
  console.log(selected);

  const navigate= useNavigate();
  const location = useLocation();
  return (
    <section className="grid md:grid-cols-5 sm:grid-cols-3 text-slate-600 text-[0.9em] gap-3 p-3">
<Category/>

 <div
          className=" flex flex-col col-start-2 col-end-6 row-start-1 bg-white box-border  z-auto  hide-scrollbar scrolling-touch p-4  "
         
        >
            <div className="flex justify-end">
              <button className="bg-blue-600 p-2 text-white" onClick={()=>{
                navigate('create',{state:{path:location.pathname}})
              }}>Add Category</button>
            </div>
            {" "}
            <Outlet />
          </div> 
      </section>

  )
}
