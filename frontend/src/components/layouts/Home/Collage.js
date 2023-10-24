import React from 'react'
import "./collage.css"

const Collage = () => {
  return (
    <div className="Collage_Main_Contanier">

        <div className="college">
            <div className="college-heading">
                <div className="sub-heading">
                    <h3>Want to represent your college</h3>
                    <p><span style={{color:"#424242"}}>Join </span> Prepbytes Campus Business Manager Internship Program</p>
                    <button>Join Now</button>
                </div>
            </div>
            
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-Homepage-mobile.webp" alt="" className="college-hidden" />
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp " alt="" className="college-display" />
        </div>

      {/* ---------------------------------------Mentors & Colleges--------------------------------------- */}
      
      <div className="Prepbytes_college">
        <h3>PrepBytes for <span style={{fontWeight:"600"}}>Mentors & Colleges</span></h3>
        <p> "Join PrepBytes in the journey to reach more colleges and mentor more students"</p>
      </div>
      
      <div className="college-mentor">

        <div className="inner-college-mentor">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png" alt="" />
            <h3>Be a part of growing Mentor Community of PrepBytes</h3>
            <p> We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready </p>
            <button>Know More</button>
        </div>
        
        <div className="inner-college-mentor">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/futuristic_algo.png" alt="" />
            <h3>Futuristic ALGO-driven Personalised learning module for your college </h3>
            <p>Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college </p>
            <button>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default Collage
