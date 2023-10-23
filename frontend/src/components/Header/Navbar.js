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
            <li class="dropdown dropdown-toggle"> Study Material
              <ul class="dropdown-content ">
                <li><Link>Mock Test</Link></li>
                <li><Link>Video Tutorial</Link></li>
              </ul>
            </li>
          </ul>
          
          <ul>
            <li class="dropdown dropdown-toggle"> Course and Program
              <ul class="dropdown-content ">
                <li><Link>Master Competitive Programming</Link></li>
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
                  <li>Master Competitive Programming</li>
                </ul>
                
                <ul>
                  <li>Full Stack Program</li>
                </ul>
                
                <ul>
                  <li>Elevation Academy</li>
                </ul>
                
                <ul>
                  <li>Mock Tests</li>
                </ul>
                
                <ul>
                  <li>Video Tutorial</li>
                </ul>
                
                <ul style={{ color: "#ff219f" }}>
                  <li>Login/signup</li>
                </ul>
              </div>) 
              
              : 
              
              null
        }
        
    </div>


  )

}

export default Navbar
