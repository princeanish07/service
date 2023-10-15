import React from 'react'
import Navbar from "./navbar"
import { Outlet, useLocation } from 'react-router-dom'
import Card  from './card'
const Home = () => {
    const location=useLocation()
  return (
    <div className="h-screen bg-white text-slate-600 z-0">
        <Navbar/>
        {
            location.key && location.key==="default"?<Card/>:<Outlet/>
        }

    </div>
  )
}

export default Home
