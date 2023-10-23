/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Hero from '../layouts/Home/Hero'
import Footer from '../Footer/Footer'
import CallBack from '../Form/CallBack'
import CodingJourney from '../layouts/Home/CodingJourney'
import IWant from '../layouts/Home/IWant'


const Home = () => {
  return (
    <div className='Home_Container'>
      <Hero/>
      <CodingJourney/>
      <IWant/>
      <CallBack/>
      <Footer/>
    </div>
  )
}

export default Home
