import React from "react";
import { useState} from "react";
import "./curriculum.css";
function Curriculum() {
  const [data, setdata] = useState(1);

  const handle_maths = () => {
    setdata(3);
  };

  const handle_cpp = () => {
    setdata(1);
  };

  const handle_dsa = () => {
    setdata(2);
  };

  return (
    <div className="Curriculum_Contanier">
        <h1>Curriculum</h1>

        <div className="Curriculum">
            <div className="inner-Curriculum">
                <div className="choice" onClick={handle_cpp}>
                    <img src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="" />
                    <p> Language Fundamentals (Choose any one of C/C++/Java/Python)</p>
                </div>
                
                <div className="choice" onClick={handle_dsa}>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon2.webp" alt="" />
                    <p> Data Structures and Algorithms</p>
                </div>
                
                <div className="choice" onClick={handle_maths}>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon3.webp" alt="" />
                    <p> Competitive Maths</p>
                </div>
                
                <div className="curculam-img">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Curriculum-Image.webp" alt="" />
                </div>
            
            </div>
            
            
            <div className="inner-Curriculum2">
                {data === 1 && (
                <ul>
                    <li> C/C++/Java/Python Overview </li>
                    <li>Logic Building</li>
                    <li>Data Types</li>
                    <li>Loops and Conditions</li>
                    <li>Pattern Programming</li>
                    <li>Operators and Expressions</li>
                    <li>Input/Output</li>
                    <li>Functions</li>
                    <li>Functions and OOPs(Python)</li>
                    <li>Pointers(C/C++)</li>
                    <li>Arrays</li>
                </ul>
                )}
                
                {data === 2 && (
                <ul>
                    <li>Linked List</li>
                    <li>Stacks</li>
                    <li>Queues</li>
                    <li>Trees</li>
                    <li>Heaps</li>
                    <li>Graphs</li>
                    <li>Segment Trees</li>
                    <li>Searching</li>
                    <li>Sorting</li>
                    <li>Hashing</li>
                    <li>Intro to DS/Algo</li>
                </ul>
                )}
                
                {data === 3 && (
                <ul>
                    <li>Prime Numbers</li>
                    <li>Permutation & Combinations</li>
                    <li>GCD</li>
                    <li>LCM</li>
                    <li>Probablities</li>
                    <li>Number Theory</li>
                    <li>Modular Arithmetic </li>
                    <li>Binary Exponention</li>
                    <li>Matrix Exponentiation</li>
                    <li>Game Theory</li>
                    <li>Computational Geometry</li>
                </ul>
                )}
                
            </div>
            
        </div>
        
    </div>
  );
}

export default Curriculum;
