import React from 'react'
import "./upComming.css"


const UpComming = () => {
  return (
    <section className="UpcomingBatches">
        <div className="UpcomingBatches__main">

            <div className="UpcomingBatches__main-left">
                <p className="UpcomingBatches__main-left--text">Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN</p>
                <button className="UpcomingBatches__main-left--btn">Apply Now</button>
            </div>
            <div className="UpcomingBatches__main-right">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp" alt="" className="UpcomingBatches__main-right--img" />
            </div>
        </div>
    </section>
  )
}

export default UpComming
