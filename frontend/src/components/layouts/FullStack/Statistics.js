import React from 'react'
import "./statistics.css"



const Statistics = () => {
  return (
    <div className="Statistics">
        <section className="Statistics__main">

            <div className="Statistics__main-left">
                <div className="Statistics__main-left-container">
                    <p className="Statistics__main-left-container--heading">Industry Growth</p>
                    <div className="Statistics__main-left-container--block-container">
                        <div className="Statistics__main-left-container--block-container-block">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/machine-learning/growth.svg" alt="" className="Statistics__main-left-container--block-container-block--icon" />
                            <div className="Statistics__main-left-container--block-container-block-box">
                                <p className="Statistics__main-left-container--block-container-block-box-heading">30% Annual Growth</p>
                                <p className="Statistics__main-left-container--block-container-block-box-text">for Full-Stack Developer jobs by 2020.</p>
                            </div>
                        </div>

                        <div className="Statistics__main-left-container--block-container-block">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/machine-learning/newJobs.svg" alt="" className="Statistics__main-left-container--block-container-block--icon" />
                            <div className="Statistics__main-left-container--block-container-block-box">
                                <p className="Statistics__main-left-container--block-container-block-box-heading">Over 1 million new jobs</p>
                                <p className="Statistics__main-left-container--block-container-block-box-text">Full-Stack Developer profile will be created by 2020 (Source: NASSCOM)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Statistics__main-right">
                <div className="Statistics__main-right-container">
                    <p className="Statistics__main-right-container--heading">Annual Salary</p>
                    <div className="Statistics__main-right-container--image">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/machine-learning/download.svg" alt="" className="Statistics__main-right-container--image-img" />
                    </div>
                    <p className="Statistics__main-right-container--source">Source: <span>Glassdoor</span> </p>
                </div>
            </div>


        </section>
    </div>
  )
}

export default Statistics
