import React, { useState } from 'react'
import {Link} from  "react-router-dom"
import "./stackSyllabus.css";


const StackSyllabus = () => {
    const [html, sethtml] = useState(false);
    const handle_html = () => {
      sethtml(!html);
    };
    const [js, setjs] = useState(false);
    const handle_js = () => {
      setjs(!js);
    };
    const [react, setreact] = useState(false);
    const handle_react = () => {
      setreact(!react);
    };
    const [node, setnode] = useState(false);
    const handle_node = () => {
      setnode(!node);
    };
    const [code, setcode] = useState(false);
    const handle_code = () => {
      setcode(!code);
    };
    const [db, setdb] = useState(false);
    const handle_db = () => {
      setdb(!db);
    };
    const [project, setproject] = useState(false);
    const handle_project = () => {
      setproject(!project);
    };
    return (
    <div className='Program_Syllabus '>
        <div className="heading-project">
            <div className="inner-heading-project1">
                <h1>Program Syllabus & Projects</h1>
                <p>We have reverse engineered our syllabus by talking to the best companies and understanding <br /> what skills the industry needs the most right now.</p>
            </div>
            
            <div className="inner-heading-project2">
                <Link to={"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf"}><button>Download Syllabus</button></Link>
            </div>
        </div>
        
        
        <div className="syllabus">
            
            <div className="syllabus1 syllabus2">
                <h2>Web Development Basics - HTML, CSS, BootStrap</h2>
                <p>Get to learn how websites work. Start your web development journey with the basics of HTML and learn <br /> how to create impressive websites using HTML, CSS, and Bootstrap.</p>                
            </div>
            
            <div className="syllabus-detail">
                <div className={(html? "inner-syllabus marginBottom-20 StackSyllabus__course-bottom-active" : "inner-syllabus marginBottom-20")}>
                    <h2>Course Content</h2>
                    <p class="d-inline-flex gap-1">
                    <button className="ViewBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_html} >
                  {html ? "Hide" : "View Detail"}
                </button>
              </p>
            </div>
            
            <div className={`collapse1 ${html ? "open" : ""}`}>
                <div className="card card-body">
                    {html && (
                    <div className="orderlist">
                        <ol>
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>How websites work</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>   HTML Introduction</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>HTML Tags</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Lists, Forms, Tables</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>HTML Divs</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Inline vs Internal vs External styling</p>
                            </li>

                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>CSS Font Styling, background, margin, padding</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>  FontAwesome</p>
                            </li>

                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>  Styling button</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Bootstrap containers</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Bootstrap Alerts, Buttons</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Bootstrap Corousel</p>
                            </li>

                        </ol>
                  </div>
                )}
                
                {html && (
                <div className="orderlis2">
                    <ol>
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                            <p>Web Development Overview - Advantages</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                            <p> Structure of Webpage</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                            <p>  Texts, Images, Videos</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                            <p>Links, Anchor tags</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                            <p> CSS Introduction</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                            <p> CSS Display</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                            <p> Styling Lists, Tables, Forms</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                            <p> Transitionals, Transformations, Animations</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                            <p> Tool tip, Box Sizing, Flex, Grid</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                        <p>Bootstrap Tables,Images, Colors</p>
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                            <p>Bootstrap Spinners, Cards, Pagination, Drop Down</p>
                        </li>
                    </ol>
                </div>
                )}
            </div>
            </div>
            </div>
            
            <div className="syllabus1 syllabus3">
                <h2>Javascript</h2>
                <p>Deep dive into the world of Javascript, one of the commonly usedlanguages for web development. <br /> Explore the basics of JS, promises, closures, and complete Javascript.</p>
                <p></p>
            </div>
            
            <div className="syllabus-detail">
                <div className={js? "inner-syllabus StackSyllabus__course-bottom-active" : "inner-syllabus"}>
                    <h2>Course Content</h2>
                    <p class="d-inline-flex gap-1">
                        <button className="ViewBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"aria-expanded="false" aria-controls="collapseExample" onClick={handle_js}>
                            {js ? "Hide  " : "View Detail"}
                        </button>
                    </p>
            </div>
            
            <div className={`collapse2 ${js ? "open" : ""}`}>
                <div className="card card-body">
                    {js && (
                    <div className="orderlist">
                        <ol>
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Introduction to Javascript</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Strings and Numbers</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Functions</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Data Structures - List, Stack, Queues, Maps</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Understanding and working with DOM</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Prototypes</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Browser Local Storage</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Eventloop in Javascrip</p>
                            </li>
                        </ol>
                    </div>
                    )}
                    
                    {js && (
                    <div className="orderlis2">
                        <ol>
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Variables, scoping, Data type</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Operators and loops</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Arrays and Objects</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Hashing</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Developer tools in Browsers</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p>Closures</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> Jquery, Ajax</p>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                <p> ES5 vs ES6 vs ES7</p>
                            </li>
                        </ol>
                    </div>
                    )}
                    
                </div>
                </div>
                </div>
                
                <div className="syllabus1 syllabus4">
                    <h2>ReactJS</h2>
                    <p>Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all <br /> the components of React, understand how React is better, and don't just learn, build amazing web apps <br /> using react.</p>
                </div>
                
                <div className="syllabus-detail">
                    <div className={react ? "inner-syllabus StackSyllabus__course-bottom-active" : "inner-syllabus"}>
                        <h2>Course Content</h2>
                        <p class="d-inline-flex gap-1">
                            <button className="ViewBtn" type="button"data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_react}>
                                {react ? "Hide" : "View Detail"}
                            </button>
                        </p>
                    </div>
                    
                    <div className={`collapse3 ${react ? "open" : ""}`}>
                        <div className="card card-body">
                            {react && (
                            <div className="orderlist">
                                <ol>
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> React Intro</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> Create an app using create-react-app</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> React Lifecycle</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Event handling, props</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Routes</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Pure Components</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Controlled vs Uncontrolled components</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Babel, Webpack</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>SASS overview</p>
                                    </li>
                                </ol>
                            </div>
                            )}
                            
                            {react && (
                            <div className="orderlis2">
                                <ol>
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                        <p>Node installation</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                        <p>Understanding basics of react app</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> Understanding virtual DOMS , Single page apps</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>States, class components vs functional components</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> Building forms in React</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> Conditional Rendering</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>High order components</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Redux</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                        <p> Axios, Creating a mock server</p>
                                    </li>
                                </ol>
                            </div>
                            )}
                        </div>
                    </div>    
                </div>
                
                <div className="syllabus1 syllabus5">
                    <h2>NodeJs</h2>
                    <p>Always thinking about how to build servers? Its time to build one. Learn about express, security, <br /> authentication, restricting routes, hashing passwords, and JWT’s, and much more.</p>
                </div>
                
                <div className="syllabus-detail">
                    <div className={node? "inner-syllabus StackSyllabus__course-bottom-active" : "inner-syllabus"}>
                        <h2>Course Content</h2>
                        <p class="d-inline-flex gap-1">
                            <button className="ViewBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_node}>
                                {node ? "Hide" : "View Detail" }
                            </button>
                        </p>
                    </div>

                    <div className={`collapse4 ${node ? "open" : ""}`}>
                        <div className="card card-body">
                            {node && (
                            <div className="orderlist">
                                <ol>
                                    <li>
                                        <i class="fa-solid fa-greater-than"style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Creating a Simple Server</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                        <p>Routing</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Intergrate Frontend and Backend</p>{" "}
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Express Middleware</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p> JWT Token, Passport.js</p>
                                    </li>
                                    
                                </ol>
                            </div>
                            )}
                            
                            {node && (
                            <div className="orderlis2">
                                <ol>
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Response types - HTML, JSON</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>  Express Introduction</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                        <p>Express Params and Query String</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>API Authentication</p>
                                    </li>
                                    
                                    <li>
                                        <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                        <p>Socket Programming</p>
                                    </li>
                                </ol>
                            </div>
                            )}
                        </div>
                    </div>
                    </div>
                    
                    <div className="syllabus1 syllabus6">
                        <h2>Databases - MongoDB</h2>
                        <p> Want to know how companies manage all their Data and how on a click of a button all the data is <br /> there? Don't just learn, master the concepts of Databases. Be a pro in managing data using MongoDB. </p>
                    </div>
                    <div className="syllabus-detail">
                        <div className={db? "inner-syllabus StackSyllabus__course-bottom-active" : "inner-syllabus"}>
                            <h2>Course Content</h2>
                            <p class="d-inline-flex gap-1">
                                <button className="ViewBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_db}>
                                    {db ? "Hide" : "View Detail"}
                                </button>
                            </p>
                        </div>
                        
                        <div className={`collapse5 ${db ? "open" : ""}`}>
                            <div className="card card-body">
                                {db && (
                                <div className="orderlist">
                                    <ol>
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                            <p>SQL vs NOSQL</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Installing MongoDB</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Deleting and updating Data</p>{" "}
                                        </li>
                                        
                                    </ol>
                                </div>
                                )}
                                
                                {db && (
                                <div className="orderlis2">
                                    <ol>
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                            <p>MongoDB overview</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Connecting and Inserting Data</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Understanding CRUD operations</p>
                                        </li>
                                    </ol>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="syllabus1 syllabus7">
                        <h2>Code Review + Deployment</h2>
                        <p></p>
                    </div>
                        <div className={code? "inner-syllabus StackSyllabus__course-bottom-active" : "inner-syllabus"}>
                            <h2>Course Content</h2>
                            <p class="d-inline-flex gap-1">
                                <button className="ViewBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_code} >
                                    {code ? "Hide" : "View Detail"}
                                </button>
                            </p>
                        </div>
                        
                        <div className={`collapse6 ${code ? "open" : ""}`}>
                            <div className="card card-body">
                                {code && (
                                <div className="orderlist">
                                    <ol>
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Tools for Code review</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                            <p>Understanding Firebase</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Deploy using Netlify and Github</p>{" "}
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }} ></i>
                                            <p> Deploy all the projects</p>
                                        </li>
                                        
                                    </ol>
                                        
                                </div>
                                )}
                                
                                {code && (
                                <div className="orderlis2">
                                    <ol>
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>  Understand Review Board</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>Github</p>
                                        </li>
                                        
                                        <li>
                                            <i class="fa-solid fa-greater-than" style={{ color: "orange", paddingRight: "9px" }}></i>
                                            <p>  Get code review by Software Developers</p>
                                        </li>
                                    </ol>
                                </div>
                                )}
                            </div>
                        </div>
                        
                    <div className="syllabus1 syllabus8">
                        <h2>Projects</h2>
                        <p>You will build 6+ projects during the whole program. Starting from building basic apps to bring your <br /> learning to the application, to building a real-world website that you can add in your resume or start <br /> your own business, you will do it all. The projects are carefully chosen by software developers for you. </p>
                    </div>
                    
                    <div className="syllabus-detail">
                        <div className={project? "inner-syllabus StackSyllabus__course-bottom-active" : "inner-syllabus"}>
                            <h2>Course Content</h2>
                            <p class="d-inline-flex gap-1">
                                <button className="ViewBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_project}>
                                    {project ? "Hide" : "View Detail"}
                                </button>
                            </p>
                        </div>
                        
                        <div cclassName={`collapse7 ${project ? "open" : ""}`}>
                            <div className="card card-body">
                                {project && (
                                <div className="porject-cart">
                                    <div className="project1">
                                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/HTML_HTML.svg" alt=""/>
                                        <h2>HTML Blog Page</h2>
                                        <p>Start your web development by making a simple blog page using HTML.</p>
                                    </div>
                                    
                                    <div className="project1">
                                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/Clock.svg" alt="" />
                                        <h2>Reminder Clock App</h2>
                                        <p> Want to build an app to keep your reminders? Build your own Digital Reminder Clock App using HTML, CSS and JS </p>
                                    </div>
                                    
                                    <div className="project1">
                                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_todo.svg" alt="" />
                                        <h2>ToDo App</h2>
                                        <p> This will be a basic project to make your understanding of HTML and CSS clear but you can use it to keep your ToDos as well.</p>
                                    </div>
                                    
                                    <div className="project1">
                                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_blog.svg" alt="" />
                                        <h2>React Blog App </h2>
                                        <p> Create your own Medium website. Through the project you will understand how React , Node and MongoDB work together to create magic.</p>
                                    </div>
                                    
                                    <div className="project1">
                                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_shopping.svg" alt="" />
                                        <h2>E-commerce Web App</h2>
                                        <p> This will be one of the major projects of the program. It will be a full-fledged working website. Just add some products and you will be ready to sell online and take payments.</p>
                                    </div>
                                
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
                
    </div>
    );
  
}

export default StackSyllabus
