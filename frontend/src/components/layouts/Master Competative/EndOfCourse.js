import React from 'react'
import "./endOfCourse.css"

const EndOfCourse = () => {
  return (
    <div className="CoursePageLearnings__main">
        <h5>By The End Of This Course, You Will Be Able To</h5>
        <div className="CoursePageLearnings__content-container">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vecto2.webp" alt="" />

            <div className="CoursePageLearnings__details-container">
                <h5>By The End Of This Course, You Will Be Able To</h5>

                <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-0">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="" />
                    <div className="CoursePageLearnings__detail">4 star and above in CodeChef</div>
                </div>

                <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-1">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/2.webp" alt="" />
                    <div className="CoursePageLearnings__detail">Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC</div>
                </div>

                <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-2">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/3.webp" alt="" />
                    <div className="CoursePageLearnings__detail">Candidate master and above in CodeForces</div>
                </div>
                <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-3">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/4.webp" alt="" />
                    <div className="CoursePageLearnings__detail">Specialist and above in SPOJ.com</div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default EndOfCourse
