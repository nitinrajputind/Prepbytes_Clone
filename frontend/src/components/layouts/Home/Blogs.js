import React from 'react'
import "./blogs.css"

const Blogs = () => {
  return (
    <div className="blogs-container">
        <h1>Most Popular Blogs</h1>
        
        <div className="blogs">
            <div className="inner-blogs">
                <img src="https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png" alt=""/>
                <p>Top 50 C Programming Interview Questions and Answers</p>
                <button>Read Now</button>
            </div>
            
            <div className="inner-blogs">
                <img src="https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_vinit_story.png" alt=""/>
                <p>Motivational Story : He got his first placement success after being rejected by 22 companies</p>
                <button>Read Now</button>
            </div>
            
            <div className="inner-blogs">
                <img src="https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png" alt="" />
                <p>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</p>
                <button>Read Now</button>
            </div>
        </div>
    
    </div>
  )
}

export default Blogs
