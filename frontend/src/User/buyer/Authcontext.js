import React, { createContext } from 'react'

function Authcontext() {
    const AuthProvider=createContext(true)


  return (
    <div>Authcontext</div>
  )
}

export default Authcontext