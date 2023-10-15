import React from 'react'
import { ColorRing } from 'react-loader-spinner';

const SubmitButton = ({isSubmitting,isLoading,typeButton,password,isDirty}) => {
    return (
      <div className="grid ">
        {
        isLoading || isSubmitting? <div className=''>
          
          <button className="   col-start-2 col-span-2  grid place-content-center "> <ColorRing width="45" height="45"/></button>
          </div>
          :
        <div className='  '>

        <button
          type="submit"
          className=" p-2  bg-[#02215B] font-medium text-[1em] col-start-2 col-span-2  text-white disabled:opacity-30 rounded-sm  px-12  "
          disabled={ !password?(!isDirty):null || isSubmitting}
          
        >
          {typeButton}
        </button>
        </div>

        }
      </div>
    );
  };

export default SubmitButton