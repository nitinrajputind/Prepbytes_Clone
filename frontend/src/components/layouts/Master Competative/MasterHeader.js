import React from 'react'
import "./masterheader.css"

const MasterHeader = () => {
  return (
    <div className="CoursesPageMastHeadHeader">
        <div className="CoursesPageMastHeadHeader__fixed-btn-container"></div>

        <div className="CoursesPageMastHeadHeader__container">

            <div className="CoursesPageMastHeadHeader__left">
                <div className="CoursesPageMastHeadHeader__left-heading">
                    <h1 className="CoursePageMasthead__heading_main" style={{color: "rgb(46, 145, 235)"}}>MASTER COMPETITIVE PROGRAMMING</h1>
                    <h6 className="CoursePageMasthead__sub_heading">
                        Master Competitive Programming Fom Zero And Become A Top-Rated Coder &nbsp;
                        <span className="CoursePageMasthead__sub_heading-highlighter" style={{fontWeight:"600"}}>
                            Under The Guidance Of Top Competitive Programmers
                        </span>
                    </h6>
                    <button className="CoursePageMasthead__btn">Enrol Now</button>

                </div>
            </div>


            <div className="CoursesPageMastHeadHeader__right">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp" alt="" className="CoursesPageMastHeadHeader__right-picture"/>
            </div>

        </div>

    </div>
  )
}

export default MasterHeader
