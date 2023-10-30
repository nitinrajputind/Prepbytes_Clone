import React, { useState } from 'react'
import "./faqs.css" 



const FAQS = () => {

    const [ques1,setques1]=useState(false)
    const question1=()=>{
        setques1(!ques1)
    }
    const [ques2,setques2]=useState(false)
    const question2=()=>{
        setques2(!ques2)
    }
    const [ques3,setques3]=useState(false)
    const question3=()=>{
        setques3(!ques3)
    }
    const [ques4,setques4]=useState(false)
    const question4=()=>{
        setques4(!ques4)
    }
    const [ques5,setques5]=useState(false)
    const question5=()=>{
        setques5(!ques5)
    }
  return (
    <div className='top-cont'>
        <h1 style={{margin:"40px auto 40px auto" , display: "flex", justifyContent : "center", alignItems :"center" , fontWeight:"400"}}>FAQS</h1>
            <button onClick={question1} className="question">What is the duration of this program?  <p>{ques1 ?"-":"+"}</p></button>
            { ques1 &&(

                
                <div className="answer"><p>Duration of this program is 3-4 months</p></div>
                )
            }
    <button onClick={question2} className="question">What will be the primary language for this program? <p>{ques2 ?"-":"+"}</p></button> 
            {ques2 && (

                
                <div className="answer"><p>Javascript would be the primary language.</p></div>
                )
            }

         

           <button onClick={question3} className="question">Is there any pre-requisite for this program? <p>{ques3 ?"-":"+"}</p></button> 
            { ques3 && (

                
                <div className="answer"><p>No, there are no pre-requisites.</p></div>
                )
            }

            

          <button onClick={question4} className="question">What if I miss the Live sessions? <p>{ques4 ?"-":"+"}</p></button> 
            { ques4 && (

                
                <div className="answer"><p>Although its highly recommended to not miss the live project sessions but in case if missed recording of the session would be added in your dashboard.</p></div>
                )
            }

            
           <button onClick={question5} className="question">How is this program different from other full stack courses?<p>{ques5 ?"-":"+"}</p></button> 
            { ques5 &&
            (

                
                <div className="answer"><p>This program provides not only learning but also complete experience of a full stack developer & software development cycle.</p></div>
                )
            }


        </div>
      
 
  )
}

export default FAQS
