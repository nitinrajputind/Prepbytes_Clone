import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Mutli_Carousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: {  max: 768, min: 300 },
      items: 1,
    },
  };
  return (
  
<>
<div style={{background: "0px 0px no-repeat padding-box padding-box rgb(247, 247, 247)",paddingTop:"10px"}}>
    <h5 style={{textAlign:"center",fontWeight:"bold",    color: "#858585"}}>Testimonials</h5>
    <h3 style={{textAlign:"center"}}>Our Students Speaks</h3>
    
    <div className="conatiner" >
      <Carousel responsive={responsive}>
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp" alt="" />
            <h4>Chelsea
              <p>Juspay</p>
            </h4>
          </div>
            <p>Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.</p>
        </div>
            
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp" alt="" />
            <h4>Susovan Ghosh
              <p>StepSetGo</p>
            </h4>
          </div>
            <p>It's absolutely awesome guys. Go for it without a second thought and you won't regret it!</p>
        </div>
        
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/akash_bisht.webp" alt="" />
            <h4>Akash Bisht
              <p>AccelQ</p>
            </h4>
          </div>
          <p>Thank you prepbytes for providing wonderful opportunity during Covid time. Its constant mentorship support program helped me to enhance my coding skills and also to get a job at a reputed company. Thanks a lot.</p>
        </div>
        
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Tanej+Kumar+Kata.webp" alt="" />
            <h4>Tanej
              <p>Authbridge</p>
            </h4>
          </div>
          <p>Prepbytes helped  me in getting a job.I helps to fill the gap between theory and practice. Mainly what I like is the set of problems which are given just after the concept is very useful. Their doubt solving platform is good and fast. They don't give answer directly instead they ask your approach and correct that approach, this helps very much in technical interview.</p>
        </div>


        <div className="carsual-container">
          <div className="carsual">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Akshay_indiamart.webp" alt="" />
            <h4>Akshay
              <p>Indiamart</p>
            </h4>
          </div>
          <p>A wonderful place to learn. PrepBytes helped me in learning important topics for coding interiew and also getting placed in Indiamart. </p>
        </div>


        <div className="carsual-container">
          <div className="carsual">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Shubham+Mishra.webp" alt="" />
            <h4>Shubham Mishra
              <p>Blowhorn</p>
            </h4>
          </div>
          <p>I enrolled in Placement Program in the month of November and within 6 months Prepbytes arranged 3-4 interviews in Product based companies/startup. The course content and practice questions are up to mark, the biggest advantage of this is that you will get a doubt clearing platform and weekly live sessions from engineers working in top product based MNCs.</p>
        </div>




      </Carousel>
    </div>
</div>


{/* StackMetrics */}


{<div className="StackMetrics">
  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/digital-marketing/Feature.webp" alt=""  className="StackMetrics--img"/>
</div>
}

</>
  );
}

export default Mutli_Carousel;
