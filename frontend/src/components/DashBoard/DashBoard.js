import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"

const DashBoard = () => {

  const username = localStorage.getItem('username');
  const userfirstname = localStorage.getItem('firstname');
  const data = JSON.parse(localStorage.getItem('cartData'));

  console.log(data)


  const [toogle, setToogle] = useState(false)
  const HandleToogle=()=>{
    setToogle(!toogle)
  }


  return (
    <>


      <div className="header student-panel-header">

        <div className="Header__left-container-web">

          {
            toogle ?
            (
              <svg className="MuiSvgIcon-root narrowLinks__toggle_icon MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true" onClick={HandleToogle}>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            )
            :
            (
              <svg className="MuiSvgIcon-root narrowLinks__toggle_icon MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true" onClick={HandleToogle}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            )
          }
          
          <div className="header_logo_container header_logo_no_margin">
            <div className="header_logo">
              <Link to={"/"}><img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="logo"/></Link>
            </div>
          </div>
        </div>

        <div className="navbar_container studentPanelNavBar_container">

          <div className="studentPanelNavBar_profile">
            <div className="header_program_container">
              <div className="userName">
                <div className="jss2">
                  <div className="MuiAvatar-root MuiAvatar-circle jss3 MuiAvatar-colorDefault">
                  {username}
                  </div>
                  <span className="ProfileAvatar">Hi {userfirstname}</span>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>




      <div className="panel-section-container">


        <div className="panel-side-nav">
          <div className={toogle? "Profile_nav Profile_nav_close"  : "Profile_nav"}>
            <div className="Profile_container">
              <Link>
              <div className={toogle? "Profile_nav_selected Profile_nav_close " : "Profile_nav_selected"}>
                <span className="Profile_nav-list-icon">
                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path>
                  </svg>
                </span>
                <span className={toogle?"Profile_nav-list-detail-close" :  "Profile_nav-list-detail"}>My Courses</span>
              </div>
              </Link>
            </div>
          </div>
        </div>




        <div className="panel-section">
          
          <div className="mycourses-section">
            
            {/* Top Course Contanier  */}
            
            <div className="mycourses-section_top">
              
              <span className="mycourses-section_top_view">
                <Link className="mycourses-section_tab_active">Courses / Test </Link>
              </span>
            </div>
            
            {/* Course Details */}
            
            {data && data.length > 0 ? 
            
            (<div className="mycourses-section_courses-container">
              {
              data.filter((item) => item.id === 22 || item.id === 23)
              .map((item, index) => {
                return (
                <div key={index} className="EnrolledCourseCard__container">
                  <img src={item.backimg} alt=""  className="EnrolledCourseCard__container-bg-image"/>
                  <div>
                    <div className="EnrolledCourseCard__container-progress-bar-container progress-bar-top-margin">
                      <div className="EnrolledCourseCard__container-progress-bar">
                        <img src={item.log} alt="" className="EnrolledCourseCard__container-course-image" />
                      </div>
                      <div className="EnrolledCourseCard__container-dates-container">

                        <div className="EnrolledCourseCard__container-dates-section">
                          <img src={item.cal} alt="" className="EnrolledCourseCard__container-date-icon" />
                          <div className="EnrolledCourseCard__container-dates">
                            <div className="EnrolledCourseCard__container-date-label">START DATE:</div>
                            <div className="EnrolledCourseCard__container-date">2 Mar 2023</div>
                          </div>
                        </div>
                        
                        <div className="EnrolledCourseCard__container-dates-section">
                          <img src={item.time} alt="" className="EnrolledCourseCard__container-date-icon" />
                          <div className="EnrolledCourseCard__container-dates">
                            <div className="EnrolledCourseCard__container-date-label">LAST VISIT:</div>
                            <div className="EnrolledCourseCard__container-date">31 Oct 2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="EnrolledCourseCard__container-heading">{item.name}</h3>
                  </div>
                  <div className="EnrolledCourseCard__container-btn-container">
                    <button className="EnrolledCourseCard__container-button button-padding-btm">Go to course</button>
                  </div>
                </div>
                );
                })}
                
                {
                data.filter((item) => item.id >= 0 && item.id <= 20)
                .map((item, index) => {
                  return (
                  <div className="TopicMockTestCard  max-Width" key={item.id}>
                    <div className="TopicMockTestCard__image">
                      <img src={item.img} alt="" className="TopicMockTestCard__image--img" />
                    </div>
                    <p className="TopicMockTestCard__heading">{item.testname}</p>
                    <div className="TopicMockTestCard__bottom">
                      <button className='TopicMockTestCard__bottom--button '>Test Now</button>
                    </div>
                  </div>
                  );
                  })}
              </div>) 
              : 
              ( <h3 className="dashboard-empty">No Courses / Test</h3>)}
            </div>
          </div>
        </div>


    </>
  );
};

export default DashBoard;
