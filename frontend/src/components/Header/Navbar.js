import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"




const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toogle = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='navbar'>
      <div className="logo">
        <Link to={"/"}>
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="click here" />
        </Link>
      </div>
      
      <div className="nav">
        <div className="auth">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
        
        <div className="menubar">
          <ul class="menu">
            <li class="dropdown dropdown-toggle"> 
            Study Material
              <ul class="dropdown-content ">
                <li><Link to={"/Mock"}>Mock Test</Link></li>
                <li><Link to={"/Tutorial"}>Video Tutorial</Link></li>
              </ul>
            </li>
          </ul>
          
          <ul>
            <li class="dropdown dropdown-toggle"> Course and Program
              <ul class="dropdown-content ">
                <li><Link to={"/master-competitive-programming"}>Master Competitive Programming</Link></li>
                <li><Link>Full Stack Program</Link></li>
              </ul>
            </li>
          </ul>
          
          <ul>
            <li>Elevation Academy</li>
          </ul>
                    
          <ul>
            <li class="dropdown dropdown-toggle">Project
              <ul class="dropdown-content ">
                <li><Link>HTML</Link></li>
                <li><Link> CSS</Link></li>
                <li><Link>Javascript</Link></li>
                <li><Link>React</Link></li>
                <li><Link>Node</Link></li>
                <li><Link>Mongodb</Link></li>
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
                  <li><Link style={{color:"unset", textDecoration:"none"}}>Full Stack Program</Link></li>
                </ul>
                
                <ul>
                  <li><Link style={{color:"unset", textDecoration:"none"}}>Elevation Academy</Link></li>
                </ul>
                
                <ul>
                  <li><Link to={"/Mock"} onClick={toogle} style={{color:"unset", textDecoration:"none"}}>Mock Test</Link></li>
                </ul>
                
                <ul>
                  <li><Link to={"/Tutorial"} onClick={toogle} style={{color:"unset", textDecoration:"none"}} >Video Tutorial</Link></li>
                </ul>
                
                <ul style={{ color: "#ff219f" }}>
                  <li><Link style={{color:"unset", textDecoration:"none"}}>Login/signup</Link></li>
                </ul>
              </div>) 
              
              : 
              
              null
        }
        
    </div>


  )

}

export default Navbar
