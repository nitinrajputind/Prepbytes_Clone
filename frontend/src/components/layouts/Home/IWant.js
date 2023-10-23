import React from 'react'
import "./iwant.css"


const IWant = () => {
  return (
    <div className="container-4">
        <div className="container-4-heading">
            <h1>I Want to</h1>
        </div>
        
        <div className="program ">

            {/* Card 1 */}
            <div className="image-container">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_prepare_for_campus.webp" alt="" />
                <div className="sub-program">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp" alt="" />
                    
                    <p style={{color:"#00a5ec"}}>PREPARE FOR <br /> CAMPUS <br /> PLACEMENT</p>
                    
                    <button><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="image-container">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_master_competetive.webp" alt="" />
                
                <div className="sub-program">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp" alt="" />
                    <p style={{color:"#f07795"}}>MASTER <br /> COMPETITIVE  <br /> PROGRAMMING</p>
                    <button><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
            {/* Card 3 */}
            <div className="image-container">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_learn_full_mern.webp" alt="" />
                
                <div className="sub-program"> 
                   <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp" alt=""/>
                   <p style={{color:"#0fb582"}}> BUILD <br /> DEVELOPMENT <br /> PROJECT </p>
                   
                   <button><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        
        </div>
        
    </div>

  )
}

export default IWant
