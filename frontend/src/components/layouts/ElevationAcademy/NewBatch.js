import React from 'react'
import "./newBatch.css"

const NewBatch = () => {
  return (
    <section className="NewBatch">
        <div className="NewBatch__main">

            <div className="NewBatch__main_left">
                <p className="NewBatch__main_left_heading_text">For 2023, 2022 & 2021 graduates</p>
                <p className="NewBatch__main_left_date_text">Batch Starting: 1st May 2023</p>
            </div>

            <div className="NewBatch__main_right">
                <div className="NewBatch__main_right_top">


                    <div className="NewBatch__main_right_point_outer_counter">

                        <div className="NewBatch__main_right_point_container">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" alt="" className="NewBatch__main_right_point_img" />
                            <div className="NewBatch__main_right_point_text_container">
                                <span className="NewBatch__main_right_point_text_heading">Free Webinar</span>                                
                                <span className="NewBatch__main_right_point_text_date">17th April</span>
                            </div>
                        </div>

                        <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                    </div>

                    <div className="NewBatch__main_right_point_outer_counter">

                        <div className="NewBatch__main_right_point_container">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp" alt="" className="NewBatch__main_right_point_img" />
                            <div className="NewBatch__main_right_point_text_container">
                                <span className="NewBatch__main_right_point_text_heading">1:1 Counselling session</span>
                                <span className="NewBatch__main_right_point_text_date">From 18th April</span>
                            </div>
                        </div>

                        <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                    </div>


                    <div className="NewBatch__main_right_point_outer_counter">
                        <div className="NewBatch__main_right_point_container">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp" alt="" className="NewBatch__main_right_point_img" />
                            <div className="NewBatch__main_right_point_text_container">
                                <span className="NewBatch__main_right_point_text_heading">Batch Start</span>
                                <span className="NewBatch__main_right_point_text_date">01 May'23, Mon-Fri (7-10PM)</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    </section>
  )
}

export default NewBatch
