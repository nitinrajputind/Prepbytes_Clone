import React from 'react'
import "./stackMentors.css"



const StackMentors = () => {
  return (
    <div className="StackMentors">
        <section className="StackMentors__main">

            <p className="StackMentors__main--heading">Mentors & Instructors</p>
            <div className="StackMentors__main--container">

                <div className="StackMentors__main--container-card">
                    <div className="StackMentors__main--container-card-image">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/Mamta.webp" alt="" className="StackMentors__main--container-card-image--img" />
                    </div>
                    <p className="StackMentors__main--container-card--heading">Mamta Kumari, Co-Founder PrepBytes</p>
                    <p className="StackMentors__main--container-card--text">Mamta has over 5 years of experience working in tech giants like Amazon and Samsung and has mentored more than 2000 students to help them enhance their coding skills. She is all set to guide you in your journey of web development</p>
                </div>

                <div className="StackMentors__main--container-card">
                    <div className="StackMentors__main--container-card-image">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_rahul.webp" alt="" className="StackMentors__main--container-card-image--img" />
                    </div>
                    <p className="StackMentors__main--container-card--heading">Rahul Dutta, Software Developer OLA</p>
                    <p className="StackMentors__main--container-card--text">Rahul has work experience of over 3 years and is currently working as Software Developer in OLA. Rahul has mentored many students in past and is excited about sharing his knowledge here.</p>
                </div>


                <div className="StackMentors__main--container-card">
                    <div className="StackMentors__main--container-card-image">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_harshita.webp" alt="" className="StackMentors__main--container-card-image--img" />
                    </div>
                    <p className="StackMentors__main--container-card--heading">Harshita Sharma, Product Engineer AskSid.ai </p>
                    <p className="StackMentors__main--container-card--text">Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.</p>
                </div>

            </div>

        </section>
    </div>
  )
}

export default StackMentors
