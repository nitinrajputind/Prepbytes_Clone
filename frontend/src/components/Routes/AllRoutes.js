/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Home from '../Pages/Home'
import Mock from '../Pages/Mock'
import Tutorial from '../Pages/Tutorial'
import Footer from '../Footer/Footer';
import MasterCompetative from '../Pages/MasterCompetative'
import FullStack from '../Pages/FullStack'
import ElevationAcademy from '../Pages/ElevationAcademy'
import Login from '../LoginAndSingup/Login'
import SignUp from '../LoginAndSingup/SignUp'
import Html from '../Pages/Project/Html'
import Css from '../Pages/Project/Css'
import Javascript from '../Pages/Project/Javascript'
import MongoDB from '../Pages/Project/MongoDB'
import Node from '../Pages/Project/Node'
import ReactJS from '../Pages/Project/ReactJS'
import DashBoard from '../DashBoard/DashBoard'


const AllRoutes = () => {

  const navigate = useNavigate();

  const ShouldShowNavbarAndFooter=()=>{
    const currentPath = window.location.pathname
    return !(currentPath === "/dashBoard" || currentPath === "/cancel")
  }
  return (
    <div>
      {ShouldShowNavbarAndFooter() && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mock' element={<Mock/>}/>
        <Route path='/Tutorial' element={<Tutorial/>}/>
        <Route path='/master-competitive-programming' element={<MasterCompetative/>}/>
        <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStack/>}/>
        <Route path='/elevation-academy' element={<ElevationAcademy/>}/>
        <Route path='/HTML_Project' element={<Html/>}/>
        <Route path='/CSS_Project' element={<Css/>}/>
        <Route path='/JavaScript_Project' element={<Javascript/>}/>
        <Route path='/ReactJs_Project' element={<ReactJS/>}/>
        <Route path='/Node_Project' element={<Node/>}/>
        <Route path='/MongoDB_Project' element={<MongoDB/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>

        <Route path='/dashBoard' element={<DashBoard/>}/>

      </Routes>
      
      {ShouldShowNavbarAndFooter() && <Footer/>}
    </div>
  )
}

export default AllRoutes
