import React from 'react'
import "./experienced.css"

const Experienced = () => {
  return (
    <div className="container5">

        {/* Inner Contnaier First */}
        <div className="inner-container-1">
            <div className="sub-inner">
                <h1>Are you an Experienced Professional willing to Switch?</h1>
            </div>
            
            <div className="sub-inner-1 ">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg" alt="" />
                <p>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
            </div>
            
            <div className="sub-inner-1">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg" alt="" />
                <p>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
            </div>
            
            <div className="sub-inner-1">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg" alt="" />
                <p>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
            </div>
            
            <div className="sub-inner-2">
                <p><span style={{ color: "#424242", fontWeight: "500"}}>PrepBytes Elevation Academy </span>- 4 months Full Stack Program with Job Guarantee</p>
            </div>
            
            <div className="sub-inner-3">
                <button>Know more</button>
            </div>
            
        </div>
        
        
        {/* Inner Contnaier Second */}
        <div className="inner-container-2">
            
            <div className="sub-inner-4">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg" alt="" />
            </div>
            
            <div className="sub-inner-5">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg" alt="" className="image1"/>
                
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg" alt="" className="image2"/>
            </div>

        </div>

    </div>

  )
}

export default Experienced
