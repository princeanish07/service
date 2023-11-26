import React from 'react'
import { useSelector } from 'react-redux'
import { setCategoryAciton } from '../redux/categorySlice'
import { useDispatch } from 'react-redux'
import {setSubcategory} from "../redux/categorySlice"
const SubCategory = ({subcategories}) => {
  const dispatch=useDispatch()
  const AddSubCategory=()=>{
    return <div className='flex justify-center'>
        <button className='bg-green-600 l p-2 px-8 rounded-full   text-white'
        onClick={()=>{
          dispatch(setCategoryAciton("subcategory"));

        }}
        >Add More</button>
    </div>
  }
  
  const selected = useSelector((state) => state.categorySlice.category);
console.log('selected',selected);
  return (
    <div className="flex flex-col font-semibold shadow h-[90Vh] shadow-gray-400   ">
    <ul className="flex flex-col mb-8 border-b p-5 border-gray-300 ">
      <li>Departments</li>
      {
        subcategories.map((subcategory)=>{
          return  <ul className="m-1 flex gap-3 hover:bg-gray-200 hover:cursor-pointer p-2 rounded-md" key={subcategory?.id} 
          
          >
            <li className='flex-1' 
            onClick={()=>{
              dispatch(setSubcategory(subcategory))
            }}
            >
            {subcategory?.name.toUpperCase()}

            </li>
            <li >
              <button className='text-sky-600 hover:text-sky-700'>View</button>
            </li>
            <li>
              <button className='text-sky-600 hover:text-sky-700'>Edit</button>
            </li>
            <li>
              <button className='text-sky-600 hover:text-sky-700'>Delete</button>
            </li>
         
          </ul>
             
        })
      }
      
    </ul>
    {
    selected?.id && <AddSubCategory/> 
    }
    </div>
  )
}

export default SubCategory