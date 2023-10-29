import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./multi-Carousel.css"


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
            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
            <h4>Shivam Gupta</h4>  
          </div>
            <p>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
        </div>
            
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/shivani+Ravi.svg" alt="" />
            <h4>Shivani Ravi</h4>
          </div>
            <p>PrepBytes have helped me improve my analytical skills & helped me in all the ways possible. My understanding of questions and logic has also increased. The best thing about PrepBytes are the lectures, it is so simple and everything is explained with examples. </p>
        </div>
        
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Abhishek+Kumar.svg" alt="" />
            <h4>Abhishek Kumar</h4>
          </div>
          <p>Lectures are up to the mark, concepts are crystal clear by the mentors. And the best part about the course is weekly assignments were provided to us which were not just good but ensuring that we were understanding the concepts but also improved our coding skills considerably.</p>
        </div>
        
        <div className="carsual-container">
          <div className="carsual">
            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Nikhil.svg" alt="" />
            <h4>Nikhil</h4>
          </div>
          <p>I got a mentor who was very knowledgeable & guided me throughout my placement journey. She explained everything very precisely and clearly & helped me with my doubts and coding problems. PrepBytes helped me a lot in gaining confidence. I thank PrepBytes for their effort.</p>
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
