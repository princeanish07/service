import React from 'react'
import Navbar from "./navbar"
import { Outlet, useLocation } from 'react-router-dom'
import Card  from './card'
const Home = () => {
    const location=useLocation()
    console.log(location.key);
  return (
    <div className="h-screen bg-[#004B8F]  overflow-scroll z-0">
        <Navbar/>
        {
            location.key && location.key==="default"?<Card/>:<Outlet/>
        }

    </div>
  )
}

export default Home
