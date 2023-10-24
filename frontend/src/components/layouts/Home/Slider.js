import React from "react";
import "./slider.css";


function Slider() {
  return (
    <div className="Slider_Contanier">
        <h1>100% of our students finishing the course have got placed</h1>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active carousel-item">
                <p>Thanks PrepBytes Your course really helped me lot , helped me Crack my company Nagarro through my campus placements. I also cracked TCS Codevita.Thank you so much </p>
                <hr />
                <div className="inner-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Datta+Mortha.jpg" alt="" className="circle1" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Nikhil.jpg" alt="" className="circle2" /> 
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/shivani+Ravi.jpg" alt="" className="circle3" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Kanika+kala.png" alt="" className="circle4" /> 
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Abhishek+Kumar.jpg" alt="" className="circle5" />
                </div>
            </div>
            
            <div className="carousel-item">
                <p>
                    Prepbytes really helped me start my prep from basic. The teachers
                    are really helpful and were always available to clear my doubts.
                    Thats the reason I was able to crack the interview and land an
                    internship.
                </p>
                <hr />
                <div className="inner-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Datta+Mortha.jpg" alt="" className="circle1" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/shivani+Ravi.jpg" alt="" className="circle2" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Nikhil.jpg" alt="" className="circle3" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Kanika+kala.png" alt="" className="circle4" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Abhishek+Kumar.jpg" alt="" className="circle5"/>
                </div>{" "}
            </div>
            
            <div className="carousel-item">
                <p>
                    One stop solution for placement preparations. Contains live as well
                    as recorded videos for theory. Also huge emphasis is given on
                    problem solving and clearing of concepts.
                </p>
                <hr />
                <div className="inner-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Nikhil.jpg" alt="" className="circle1" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/shivani+Ravi.jpg" alt="" className="circle2" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Datta+Mortha.jpg" alt="" className="circle3" />
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Kanika+kala.png" alt="" className="circle4"/>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Abhishek+Kumar.jpg" alt="" className="circle5" />
                </div>{" "}
            </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

        </div>
    </div>
  );
}

export default Slider;