import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Home from '../Pages/Home'
import Mock from '../Pages/Mock'
import Tutorial from '../Pages/Tutorial'
import Footer from '../Footer/Footer';
import MasterCompetative from '../Pages/MasterCompetative'
import FullStack from '../Pages/FullStack'
import ElevationAcademy from '../Pages/ElevationAcademy'


const AllRoutes = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mock' element={<Mock/>}/>
        <Route path='/Tutorial' element={<Tutorial/>}/>
        <Route path='/master-competitive-programming' element={<MasterCompetative/>}/>
        <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStack/>}/>
        <Route path='/elevation-academy' element={<ElevationAcademy/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default AllRoutes
