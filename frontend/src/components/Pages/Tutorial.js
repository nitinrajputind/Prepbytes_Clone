import React, { useEffect, useState } from "react";
import axios from "axios"
import VideoTutorial from "../layouts/Tutorial/VideoTutorial";
import Loader from "../Loader/Loader";




const Tutorial = () => {


  const [apidata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://prepbytes-clone.onrender.com/tutorial")
      .then((response) => {
        setdata(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  },[]);
  console.log(apidata)



  return (
    <>

    {/* Banner */}
      <div className="VideoRepositoryMain__header">

        <div className="VideoRepositoryMain__header-container">
          {/* Left Contanier */}
          <div className="VideoRepositoryMain__header-container-left">
            <h1 className="VideoRepositoryMain__header-container-left-top">Prepbytes Video Library</h1>
            <p className="VideoRepositoryMain__header-container-left-bottom">Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place. </p>
          </div>

          {/* Right Image Container */}
          <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png" alt="" className="VideoRepositoryMain__header-container-right-image" />

        </div>

      </div>

      {/* Video Heading and Rendering Section  */}
      <div className="VideoRepositoryMain__main">

          <h2 className="VideoRepositoryMain__main-content--heading">CATEGORIES</h2>

          <div className="VideoRepositoryMain__main-content--cards">
            {/* Video Tutorial */}

            {
              loading ?
              (<Loader/>)
              :
              (
                apidata && apidata.map((item, index)=>{
                  return(
                    <VideoTutorial 
                    key={index}
                    url ={item.video}
                    heading = {item.heading}
                    details = {item.detail}/>
                  )
                })
              )
            }

          </div>

      </div>
    </>
  );
};

export default Tutorial;
