/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Hero from '../layouts/Home/Hero'
import CallBack from '../Form/CallBack'
import CodingJourney from '../layouts/Home/CodingJourney'
import IWant from '../layouts/Home/IWant'
import Experienced from '../layouts/Home/Experienced'
import Founder from '../layouts/Home/Founder'
import Mentor from '../layouts/Home/Mentor'
import Slider from '../layouts/Home/Slider'
import Map from '../layouts/Home/Map'
import MentorCard from '../layouts/Home/MentorCard'
import Collage from '../layouts/Home/Collage'
import Blogs from '../layouts/Home/Blogs'


const Home = () => {
  return (
    <div className='Home_Container'>
      <Hero/>
      <CodingJourney/>
      <IWant/>
      <Experienced/>
      <Founder/>
      <Mentor/>
      <Slider/>
      <Map/>
      <MentorCard/>
      <Collage/>
      <Blogs/>
      <CallBack/>
    </div>
  )
}

export default Home
