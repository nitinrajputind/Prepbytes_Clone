/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"
import axios from 'axios';




const Navbar = () => {
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const username = localStorage.getItem("username");
  const userfirstname = localStorage.getItem("firstname");
  const userid = localStorage.getItem("userid");

  const handletoken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("cartData");
    localStorage.removeItem("firstname");
    localStorage.removeItem("username");
   
  };
  useEffect(()=>{
    console.log("clear Token");
  },[username])

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token); // Update token state

    if (token) {
      axios
        .get("http://localhost:8080/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setVerified(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setVerified(false);
    }
  }, [token]);











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
        {
          username ? 
          (<div className="auth"></div>)
          :
          (
          <div className="auth">
            <Link to={"/login"}><button className="login" onClick={scroller}>Login</button></Link>
            <Link to={"/signup"}><button className="signup" onClick={scroller}>Signup</button></Link>
          </div>
          )
        }

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
                <li><Link to={"/HTML_Project"} onClick={scroller}>HTML</Link></li>
                <li><Link to={"/CSS_Project"} onClick={scroller}> CSS</Link></li>
                <li><Link to={"/JavaScript_Project"} onClick={scroller}>Javascript</Link></li>
                <li><Link to={"/ReactJs_Project"} onClick={scroller}>React</Link></li>
                <li><Link to={"/Node_Project"} onClick={scroller}>Node</Link></li>
                <li><Link to={"/MongoDB_Project"} onClick={scroller}>Mongodb</Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
            <div class="dropdown">
              {username ? (
              <>
              <div className="username" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <h4>{username}</h4>
                <p>Hi {userfirstname}</p>
              </div>
                <ul class="dropdown-menu">
                  <li>
                    <Link to={"/dashBoard"} className="dropdown-item" href="#">
                      <img style={{ paddingRight: "10px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
                      MY Dashboard
                      </Link>
                      <hr />
                  </li>
                  
                  <li>
                    <Link className="dropdown-item" href="#">
                      {
                      username ?  // Check if token is in local storage
                      (<Link onClick={handletoken} style={{ textDecoration: "none", color: "#ff8787", }}>Logout </Link>) : null} </Link>
                  </li>
                </ul>
                </>) 
                : 
                (<li>{""}</li>)}
              </div>
            </li>
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
                {username ? (
                <div>
                  <ul>
                    <Link to={"/master_comp"} style={{ textDecoration: "none", color: "black", display: "flex",}}>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cGF0aCBpZD0idXNlciIgZD0iTTEwLjUsOEExMC41LDEwLjUsMCwxLDAsMjEsMTguNSwxMC41LDEwLjUsMCwwLDAsMTAuNSw4Wm0wLDQuMDY1QTMuNzI2LDMuNzI2LDAsMSwxLDYuNzc0LDE1Ljc5LDMuNzI2LDMuNzI2LDAsMCwxLDEwLjUsMTIuMDY1Wm0wLDE0LjU2NWE4LjExMyw4LjExMywwLDAsMS02LjItMi44ODgsNC43MjEsNC43MjEsMCwwLDEsNC4xNy0yLjUzMiwxLjAzNiwxLjAzNiwwLDAsMSwuMy4wNDcsNS42MDYsNS42MDYsMCwwLDAsMS43MzIuMjkyLDUuNTg0LDUuNTg0LDAsMCwwLDEuNzMyLS4yOTIsMS4wMzYsMS4wMzYsMCwwLDEsLjMtLjA0Nyw0LjcyMSw0LjcyMSwwLDAsMSw0LjE3LDIuNTMyQTguMTEzLDguMTEzLDAsMCwxLDEwLjUsMjYuNjI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtOCkiIGZpbGw9IiMwMzYiLz4KPC9zdmc+Cg==" alt="" />
                      <li onClick={toogle} style={{ paddingLeft: "10px" }}>{userfirstname}</li>
                    </Link>  
                  </ul>
                  
                  <ul>
                    <Link to={"/dashBoard"} style={{ textDecoration: "none", color: "black", display: "flex",}}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K"alt="" />
                    <Link to={"/dashboard"} style={{ textDecoration: "none", color: "black" }} >
                      {" "}
                      <li onClick={toogle} style={{ paddingLeft: "10px" }}> My Dashboard </li>
                    </Link>
                    </Link>
                  </ul>
                </div>) 
                : 
                null
                }

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
                  <li>

                    {
                      username ? 
                      (<Link onClick={() => { toogle(); handletoken(); }} style={{color:"unset", textDecoration:"none"}}>Logout</Link>)
                      :
                      (<Link  to={"/login"} onClick={toogle}  style={{color:"unset", textDecoration:"none"}}>Login/signup</Link>)
                    }

                    
                  </li>
                </ul>
              </div>) 
              
              : 
              
              null
        }
        
    </div>


  )

}

export default Navbar
