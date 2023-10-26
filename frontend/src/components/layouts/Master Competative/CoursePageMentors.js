import React from 'react'
import "./coursePageMentors.css"


const CoursePageMentors = () => {
  return (
    <div className="leading-mentors">
        <h2>Get Guidance From Industry Leading Mentors</h2>
        <h3>Other Mentors You Will Be Interacting With</h3>
        <div className="inner-leading-mentors">

          <div className="founder">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" className="imgofmentor"/>
            <div className="inner-founder">
                <h4>Mamta </h4>
                <p>Co-founder,Prepbytes</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
            </div>
          </div>


          <div className="founder">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp" alt="" className="imgofmentor" />
            <div className="inner-founder">
                <h4>Kushdeep</h4>
                <p>SDE,Sharechat</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp" alt="" />
            </div>
          </div>

          <div className="founder">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp" alt="" className="imgofmentor" />
            <div className="inner-founder">
                <h4>Aveek</h4>
                <p>Mentors,Prepbytes</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp" alt=""/>
            </div>
          </div>

        </div>
        
      </div>
  )
}

export default CoursePageMentors
