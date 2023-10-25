import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Home from '../Pages/Home'
import Mock from '../Pages/Mock'
import Tutorial from '../Pages/Tutorial'
import Footer from '../Footer/Footer';
import MasterCompetative from '../Pages/MasterCompetative'


const AllRoutes = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mock' element={<Mock/>}/>
        <Route path='/Tutorial' element={<Tutorial/>}/>
        <Route path='/master-competitive-programming' element={<MasterCompetative/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default AllRoutes
