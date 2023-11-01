import React from 'react'
import "./loader.css"
import logo from "./logo.png"

const Loader = () => {
  return (
    <div className="prepbytes-loader">
          <img src={logo} alt="Loading..." />
    </div>
  )
}

export default Loader
