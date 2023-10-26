import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    name: "Shivam Gupta",
    review:
      "My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.",
    img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg",
  },
  {
    name: "Shivani Ravi",
    review:
      "PrepBytes have helped me improve my analytical skills & helped me in all the ways possible. My understanding of questions and logic has also increased. The best thing about PrepBytes are the lectures, it is so simple and everything is explained with examples. ",
    img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/shivani+Ravi.svg",
  },
  //Second image url
  {
    name: "Abhishek Kumar",
    review:
      "Lectures are up to the mark, concepts are crystal clear by the mentors. And the best part about the course is weekly assignments were provided to us which were not just good but ensuring that we were understanding the concepts but also improved our coding skills considerably.",
    img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Abhishek+Kumar.svg",
  },
  //Third image url
  {
    name: "Nikhil",
    review:
      "I got a mentor who was very knowledgeable & guided me throughout my placement journey. She explained everything very precisely and clearly & helped me with my doubts and coding problems. PrepBytes helped me a lot in gaining confidence. I thank PrepBytes for their effort.",
    img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Nikhil.svg",
  },
];
const Slider = () => {
  return (
    <div className="parent">
        <h1>This Might Be You!</h1>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((item, index) => {
          return (
            <div className="slider" key={index}>
              <div className="namedesign">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt=""/>
                <h3>{item.name}</h3>
              </div>
              <p>{item.review}</p>
              <img src={item.img} alt="" />
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp" className="design" alt=""/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
