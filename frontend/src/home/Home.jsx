import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Card from './card'
import Naavbar from './Navbar'
const Home = () => {
    const location=useLocation()
  return (
    <div className=" bg-red-400 text-slate-600  z-0">
      {/* <Naavbar/> */}
        
            {/* <Card/> */}
        

    </div>
  )
}

export default Home
