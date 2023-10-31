import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"

const DashBoard = () => {

  const username = localStorage.getItem('username');
  const userfirstname = localStorage.getItem('firstname');
  const data = JSON.parse(localStorage.getItem('cartData'));

  console.log(data)




  return (
    <>
      <div className="header">
        <header className="DashBoard_Header">
          <div className="Header_Logo">
          <Link to={"/"}><img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="logo"/></Link>
          </div>
          <div className="Client_Icon">
            <div><h1>{username}</h1></div>
            <div className="userFirstname"><p>Hi {userfirstname}</p></div>
          </div>
        </header>
      </div>


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
          ( <h1 className="dashboard-empty">Empty data</h1>)}


      </div>

    </>
  );
};

export default DashBoard;
