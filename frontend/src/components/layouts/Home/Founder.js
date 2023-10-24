import React from 'react'
import "./founder.css"

const Founder = () => {
  return (
    <div className="container-6-top">
      <div className="container-6">

        <div className="lady">
          <div className="inner-lady">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png" alt="" className="imag1"/>
            <h2 style={{color:"#f78077",fontSize: "28px",fontWeight:"600" , marginTop: "14px"}}>Mamta Kumari</h2>
            <p style={{ color: "#858585",fontSize: "18px"}}>Co-Founder PrepBytes</p>
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" className="img2" />
          </div>
        </div>
        
        <div className="info">
          <h1>Attend Free sessions with industry experts and get valuable guidance</h1>
          <h2>How to master competitive coding?</h2>
          <button>Know More</button>
          <hr />
          <h2>How to crack coding interviews?</h2>
          <button>Know More</button>
        </div>
      
      </div>

    {/* -------------------------------------boxes------------------------------------------- */}

    <div className="knowdetail">
      <div className="detail1">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt=""/>
        <h1>100K+</h1>
        <p>Coding Community</p>
      </div>
      
      <div className="detail1">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg" alt="" />
        <h1>1000+</h1>
        <p>Hours of Live session</p>
      </div>

      <div className="detail1">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg" alt="" />
        <h1>10000+</h1>
        <p>Hours of learning</p>
      </div>

      <div className="detail1">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg" alt="" />
        <h1>700K+</h1>
        <p>Doubts Solved</p>
      </div>

    </div>

  </div>
  
  )
}

export default Founder
