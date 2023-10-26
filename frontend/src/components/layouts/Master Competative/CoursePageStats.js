import React from 'react'
import "./coursePageStats.css"


const CoursePageStats = () => {
  return (
    <div className="CoursePageStats">
        <div className="CoursePageStats__stat-container">
            <h1>10k+</h1>
            <p>Students Enrolled</p>
        </div>
        <div className="CoursePageStats__stat-container">
            <h1>1000K+</h1>
            <p>Doubts Solved</p>
        </div>
        <div className="CoursePageStats__stat-container">
            <h1>2k+ hrs</h1>
            <p>Mentor Interaction</p>
        </div>
    </div>
  )
}

export default CoursePageStats
