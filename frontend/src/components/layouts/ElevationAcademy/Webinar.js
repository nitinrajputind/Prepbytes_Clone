import React from "react";
import "./webinar.css";

const Webinar = () => {
  return (
    <>

      <div className="TestDetails">
        <div className="TestDetails__main">
            <div className="TestDetails__main-container">
                <div className="TestDetails__main--container-card">

                    <div className="TestDetails__main--container-card-left">
                        <div className="TestDetails__main--container-card-left-second">
                            <p className="TestDetails__main--container-card-left-second--text">Free Webinar</p>
                            <p className="TestDetails__main--container-card-left-second--subtext">Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                        </div>
                        <div className="TestDetails__main--container-card-left-first">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/calendar.webp" alt="" className="TestDetails__main--container-card-left-first--img"  loading="lazy"/>
                        </div>
                    </div>

                    <div className="TestDetails__main--container-card-right">
                        <p className="TestDetails__main--container-card-right--text">Free Webinar</p>
                        <p className="TestDetails__main--container-card-right--subtext">Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                        <div className="TestDetails__main--container-card-right-box">
                            <p className="TestDetails__main--container-card-right-box--text">17th April</p>
                        </div>
                        <div className="TestDetails__main--container-card-right-button">
                            <button className="TestDetails__main--container-card-right-button--btn">Register</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>


      <div className="IncomeSharingMetrics">
        <div className="IncomeSharingMetrics__main">
            <div className="IncomeSharingMetrics__main-container">

                <div className="IncomeSharingMetrics__main-container-item">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg" alt="" className="IncomeSharingMetrics__main-container-item--img" />
                    <div className="IncomeSharingMetrics__main-container-item-content">
                        <p className="IncomeSharingMetrics__main-container-item-content--text">100k+</p>
                        <p className="IncomeSharingMetrics__main-container-item-content--subtext">Student Coding Community</p>
                    </div>
                </div>

                <div className="IncomeSharingMetrics__main-container-item">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg" alt="" className="IncomeSharingMetrics__main-container-item--img" />
                    <div className="IncomeSharingMetrics__main-container-item-content">
                        <p className="IncomeSharingMetrics__main-container-item-content--text">800+</p>
                        <p className="IncomeSharingMetrics__main-container-item-content--subtext">Colleges</p>
                    </div>
                </div>

                <div className="IncomeSharingMetrics__main-container-item">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg" alt="" className="IncomeSharingMetrics__main-container-item--img" />
                    <div className="IncomeSharingMetrics__main-container-item-content">
                        <p className="IncomeSharingMetrics__main-container-item-content--text">100+</p>
                        <p className="IncomeSharingMetrics__main-container-item-content--subtext">Students placed</p>
                    </div>
                </div>

            </div>
        </div>
      </div>



    </>
  );
};

export default Webinar;
