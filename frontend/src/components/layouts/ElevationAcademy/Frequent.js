import React, { useState } from 'react'
import "./frequent.css"



const Frequent = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (index) => {
      setSelectedButton(index);
    };
  
    const [ques1, setques1] = useState(false);
    const question1 = () => {
      setques1(!ques1);
    };
    const [ques2, setques2] = useState(false);
    const question2 = () => {
      setques2(!ques2);
    };
    const [ques3, setques3] = useState(false);
    const question3 = () => {
      setques3(!ques3);
    };
    const [ques4, setques4] = useState(false);
    const question4 = () => {
      setques4(!ques4);
    };
  
    //   ---------------------------createria
  
    const [createria, setcreteria] = useState(1);
    const handleelegiblity = () => {
      setcreteria(1);
    };
  
    const handlebatch = () => {
      setcreteria(2);
    };
    const handleplacement = () => {
      setcreteria(3);
    };
    
    return (
    <div>
        <div className="heading">
            <h1 className='Main_freq_heading'>Frequently Asked Questions</h1>
        </div>
        <div className="top-container-frequent">
            
            <button className={`frequent ${selectedButton === 1 ? "selected" : ""}`} onClick={() => { handleButtonClick(1); handleelegiblity(); }}>
                <p>Eligibility Creteria</p>
            </button>
            
            <button className={`frequent ${selectedButton === 2 ? "selected" : ""}`} onClick={() => { handleButtonClick(2); handlebatch();}}>
                <p>Batch Enrollment</p>
            </button>
            
            <button className={`frequent ${selectedButton === 3 ? "selected" : ""}`} onClick={() => { handleButtonClick(3); handleplacement(); }}>
                <p>Placment Support</p>
            </button>
        </div>
        
        {createria === 1 && (
        <div className="top-cont">
            <button onClick={question1} className="question"> Can I apply if I am still in College? <p>{ques1 ? "-" : "+"}</p></button>
            {ques1 && (
            <div className="answer">
                <p>Current batch is focussed on 2022, 2021 and 2020 passouts.</p>
            </div>
            )}

            <button onClick={question2} className="question">Can I apply if I am from non cse branch? <p>{ques2 ? "-" : "+"}</p></button>
            {ques2 && (
            <div className="answer">
                <p> Yes, if you are willing to work hard on your coding skills, you can apply.</p>
            </div>
            )}
            
            <button onClick={question3} className="question">Do I need to have strong coding skills? <p>{ques3 ? "-" : "+"}</p></button>
            {ques3 && (
            <div className="answer">
                <p>No, you do not need to have strong coding skills. You just needto have good fundamentals and willingness to work hard.</p>
            </div>
            )}
            
            <button onClick={question4} className="question">How can I apply?<p>{ques4 ? "-" : "+"}</p></button>
            {ques4 && (
            <div className="answer">
                <p>Click on apply button on the top banner and fill the complete application form.</p>
            </div>
            )}
        </div>
        )}
  
        {createria === 2 && (
            <div className="top-cont">
            <button onClick={question1} className="question">
            What is the process of enroling in the batch? <p>{ques1 ? "-" : "+"}</p>
            </button>
            {ques1 && (
              <div className="answer">
                <p>You need to fill the application form and wait for our team to get in touch with you.</p>
              </div>
            )}
            <button onClick={question2} className="question">
            Classes will be Live or Recorded? <p>{ques2 ? "-" : "+"}</p>
            </button>
            {ques2 && (
              <div className="answer">
                <p>
                Classes will be completely Live
                </p>
              </div>
            )}
    
            <button onClick={question3} className="question">
            What will be the class timings? <p>{ques3 ? "-" : "+"}</p>
            </button>
            {ques3 && (
              <div className="answer">
                <p>
                What will be the class timings?
                </p>
              </div>
            )}
    
       
          </div>
        )}
      
      {
          createria===3 &&
          (
              <div className="top-cont">
              <button onClick={question1} className="question">
              When will I get placement support? <p>{ques1 ? "-" : "+"}</p>
              </button>
              {ques1 && (
                <div className="answer">
                  <p>You will get placement support after you have completed the program and have finished all projects</p>
                </div>
              )}
              <button onClick={question2} className="question">
              How exactly is placement support provided? <p>{ques2 ? "-" : "+"}</p>
              </button>
              {ques2 && (
                <div className="answer">
                  <p>
                  Post course completion , your resume will be shared by the partner companies and after your resume is shortlised you will get interview oppurtunity
                  </p>
                </div>
              )}
      
              <button onClick={question3} className="question">
              For how long will I get placement support? <p>{ques3 ? "-" : "+"}</p>
              </button>
              {ques3 && (
                <div className="answer">
                  <p>
                  You will get placement support for 12 months post course completion
                  </p>
                </div>
              )}
      
              <button onClick={question4} className="question">
              What if my resume is not getting shortlisted?   <p>{ques4 ? "-" : "+"}</p>
              </button>
              {ques4 && (
                <div className="answer">
                  <p>
                  We have crafted the program very carefully , keeping in mind what recruiters look for in a candidate and their resume so there is a high probablity of resume getting shortlited. In worse case, if resume does not get shortlisted, we will work together on your resume and ensure it gets shortlisted
                  </p>
                </div>
              )}
            </div>
          )
      }
      </div>
    );
}

export default Frequent
