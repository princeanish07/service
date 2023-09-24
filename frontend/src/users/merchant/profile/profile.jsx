import React, { useState } from 'react'
import Basic from './basic'
import Qualification from './qualification'

function Profile() {
    const [basic, setBasic]=useState(true)
    const [qualification,setQualification]=useState(false)
  return (
    <div className='grid place-content-center mt-4'>
    <div>
    <div className=' flex place-content-center'>
            <ul className='flex gap-10 text-slate-600'>
                <li className={`  text-[1.1em] font-medium  ${basic ? 'bg-green-600 text-white px-2 no-underline':null}`}>
                    <button onClick={()=>{
                        setBasic(true)
                        setQualification(false)
                    }}>Personal Information</button>
                </li>
                <li className={`text-[1.1em] font-medium  ${qualification ? 'bg-green-600 text-white px-2 no-underline':null}`}>
                    <button onClick={()=>{
                        setBasic(false)
                        setQualification(true)
                    }}>Qualification</button>
                </li>
            </ul>
        </div>
       
     <Basic/>
       
    </div>

    </div>
  )
}

export default Profile