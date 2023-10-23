import React from 'react'
import Hero from '../layouts/Home/Hero'
import Footer from '../Footer/Footer'
import CallBack from '../Form/CallBack'

const Home = () => {
  return (
    <div className='Home_Container'>
      <Hero/>
      <CallBack/>
      <Footer/>
    </div>
  )
}

export default Home
