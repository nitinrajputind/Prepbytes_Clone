import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TestCard from '../layouts/Mock/TestCard'


const Mock = () => {

    const[mockData, SetMockData] = useState([])

    useEffect(()=>{
        axios.get('https://prepbytes-clone.onrender.com/mocktest')
        .then((response)=>{
            // console.log(response);
            SetMockData(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    console.log(mockData)



  return (
    <>
    
        {/* Banner */}
        <div className="Mock_Banner">
            <div className="Mock_texContent">
                <h1>Mock Test</h1>
                <p>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
            </div>
        </div>

        <div className="FeaturedMockTestList">
            <div className="FeaturedMockTestList__main">

                <p className='FeaturedMockTestList__main--heading'>Featured Mock Tests</p>
                
                <div className="FeaturedMockTestList__main-container">
                    <div className="FeaturedMockTestList__main-container--past">
                        <div className="FeaturedMockTestList__main-container--past-heading">
                            <p>Past Mock Tests</p>

                            {/* test Card Render Here */}
                            <div className="FeaturedMockTestList__main-container--past-mocktest">
                                {
                                    mockData && mockData.map((item, index)=>{
                                        return(
                                            <TestCard
                                            id = {item.id}
                                            name = {item.name}
                                            date = {item.date}
                                            participants = {item.participants}
                                            time = {item.time}
                                            img = {item.img}
                                            price = {item.price}
                                            />
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
</>
  )
}

export default Mock
