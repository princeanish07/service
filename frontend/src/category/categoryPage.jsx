import React from 'react'
import Category from './category'
import { Outlet, useNavigate,useLocation,useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AddCategory } from './AddCategory'
export const CategoryPage = () => {
  const params=useParams()
  // console.log(selected);

  const navigate= useNavigate();
  const location = useLocation();
  return (
    <section className="flex text-slate-600 text-[0.9em] gap-1 p-3">
<Category/>

 <div
          className=" grid flex-1  box-border  z-auto  hide-scrollbar scrolling-touch bg-white  "
         
        >
            {
              params?.name?<Outlet/>:<AddCategory/>
            }
          </div> 
      </section>

  )
}
