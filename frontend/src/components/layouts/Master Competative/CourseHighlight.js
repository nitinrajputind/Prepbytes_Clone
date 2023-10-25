import React from 'react'
import "./courseHightlight.css"

const CourseHighlight = () => {
  return (
    <div className="CoursePageHighlights__main_container">
        <div className="CoursePageHighlights__main_sub-container">

            <div className="CoursePageHighlights__list_container-0">
                <div className="CoursePageHighlights__img-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" className="CoursePageHighlights__img" />
                    <p className="CoursePageHighlights__list_text">9 months intensive bootcamp</p>
                </div>
            </div>

            <div className="CoursePageHighlights__list_container-1">
                <div className="CoursePageHighlights__img-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp" alt="" className="CoursePageHighlights__img" />
                </div>
                <p className="CoursePageHighlights__list_text">Quick doubt resolution</p>
            </div>

            <div className="CoursePageHighlights__list_container-2">
                <div className="CoursePageHighlights__img-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp" alt="" className="CoursePageHighlights__img" />
                </div>
                <p className="CoursePageHighlights__list_text">Live coding sessions with top-rated coders</p>
            </div>

            <div className="CoursePageHighlights__list_container-3">
                <div className="CoursePageHighlights__img-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp" alt="" className="CoursePageHighlights__img" />
                </div>
                <p className="CoursePageHighlights__list_text">Get certificate on course completion</p>
            </div>

        </div>
    </div>
  )
}

export default CourseHighlight
