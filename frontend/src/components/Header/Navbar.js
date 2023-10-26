import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"




const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toogle = () => {
    setMenuOpen(!menuOpen);
    window.scroll(0,0)
  };

  const scroller = ()=>{
    window.scroll(0,0)
  }


  return (
    <div className='navbar'>
      <div className="logo">
        <Link to={"/"}>
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="click here" />
        </Link>
      </div>
      
      <div className="nav">
        <div className="auth">
          <button className="login" onClick={scroller}>Login</button>
          <button className="signup" onClick={scroller}>Signup</button>
        </div>
        
        <div className="menubar">
          <ul class="menu">
            <li class="dropdown dropdown-toggle"> 
            Study Material
              <ul class="dropdown-content ">
                <li><Link to={"/Mock"} onClick={scroller}>Mock Test</Link></li>
                <li><Link to={"/Tutorial"} onClick={scroller}>Video Tutorial</Link></li>
              </ul>
            </li>
          </ul>
          
          <ul>
            <li class="dropdown dropdown-toggle"> Course and Program
              <ul class="dropdown-content ">
                <li><Link to={"/master-competitive-programming"} onClick={scroller}>Master Competitive Programming</Link></li>
                <li><Link to={"/online-full-stack-developer-mern-certification-program"} onClick={scroller}>Full Stack Program</Link></li>
              </ul>
            </li>
          </ul>
          
          <ul>
            <Link to={"/elevation-academy"} style={{textDecoration:"none"}} onClick={scroller}><li>Elevation Academy</li></Link>
          </ul>
                    
          <ul>
            <li class="dropdown dropdown-toggle">Project
              <ul class="dropdown-content ">
                <li><Link onClick={scroller}>HTML</Link></li>
                <li><Link onClick={scroller}> CSS</Link></li>
                <li><Link onClick={scroller}>Javascript</Link></li>
                <li><Link onClick={scroller}>React</Link></li>
                <li><Link onClick={scroller}>Node</Link></li>
                <li><Link onClick={scroller}>Mongodb</Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>Hi Nitin Rajput</li>
          </ul>
          
        </div>
      </div>
      
      
      {/* ------------second nav--------------- */}
      
      <button className="navbar-toggler hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toogle} >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      {
      menuOpen ? (
              <div className="menubar2">
                
                <ul>
                  <li><Link to={"/master-competitive-programming"} onClick={toogle}  style={{color:"unset", textDecoration:"none"}}>Master Competitive Programming</Link></li>
                </ul>
                
                <ul>
                  <li><Link to={"/online-full-stack-developer-mern-certification-program"} onClick={toogle} style={{color:"unset", textDecoration:"none"}}>Full Stack Program</Link></li>
                </ul>
                
                <ul>
                  <li><Link to={"/elevation-academy"} onClick={toogle} style={{color:"unset", textDecoration:"none"}}>Elevation Academy</Link></li>
                </ul>
                
                <ul>
                  <li><Link to={"/Mock"} onClick={toogle} style={{color:"unset", textDecoration:"none"}}>Mock Test</Link></li>
                </ul>
                
                <ul>
                  <li><Link to={"/Tutorial"} onClick={toogle} style={{color:"unset", textDecoration:"none"}} >Video Tutorial</Link></li>
                </ul>
                
                <ul style={{ color: "#ff219f" }}>
                  <li><Link  onClick={toogle}  style={{color:"unset", textDecoration:"none"}}>Login/signup</Link></li>
                </ul>
              </div>) 
              
              : 
              
              null
        }
        
    </div>


  )

}

export default Navbar
