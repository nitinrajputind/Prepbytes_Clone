import React, { useState } from 'react'
import "./programSyllabus.css"


const ProgramSyllabus = () => {
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
    const [inter, setinter] = useState(false);
    const handle_inter = () => {
      setinter(!inter);
    };
    const [opp, setopp] = useState(false);
    const handle_opp = () => {
      setopp(!opp);
    };
    return (
    <div style={{marginBottom:"60px"}}>
        <div className="heading-project">
            <div className="inner-heading-project1 syllabus-head">
                <h1>Program Syllabus</h1>
                <p> Learn from the best and be prepared to crack full <br /> stack developer jobs</p>
            </div>
        </div>
        
        <div className="syllabues">
            <div className="syllabus11 syllabus12">
                <h5>1st Week - 4th Week</h5>
            </div>
            
            <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(247, 128, 119)", borderRadius: "9px" }}>
                <div className="inner-syllabus1 inner1">
                    <div className="h2">
                        <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(247, 128, 119)", border: "2px solid rgb(247, 128, 119)", }}>
                            <p>1</p>
                        </p> 
                        <h2>Frontend Development Basics</h2>
                    </div>
                    
                    <p class="d-inline-flex gap-1">
                        <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_html}>
                            {html ? ( 
                            <i class="fa-solid fa-minus" style={{ color: " rgb(247, 128, 119)" }}></i>) 
                            : 
                            (
                            <i class="fa-solid fa-plus" style={{ color: " rgb(247, 128, 119)" }} ></i>
                            )}
                        </button>
                    </p>
                
                </div>
                
                <div className={`collapse1 ${html ? 'open' : ''}`}>
                    <div className="card card-body bg-Color">
                        {html && (
                        <div className="orderlist orderlist1">
                            <p>Frontend Development Basics - HTML, CSS AND Github</p>
                            <ol>
                                <li>How websites work</li>
                                <li>Web Development Overview - Advantages</li>
                                <li>HTML Introduction</li>
                                <li>Structure of Webpage</li>
                                <li>HTML Tags</li>
                                <li>Texts, Images, Videos</li>
                                <li>Lists, Forms, Tables</li>
                                <li>Links, Anchor tags</li>
                                <li>SHTML Divs</li>
                                <li>Github</li>
                                <li>CSS Introduction</li>
                                <li>Inline vs Internal vs External styling</li>
                                <li>CSS Display</li>
                                <li>CSS Font Styling, background, margin, padding</li>
                                <li>Styling Lists, Tables, Forms</li>
                                <li>FontAwesome</li>
                                <li>Transitionals, Transformations, Animations</li>
                                <li>Styling button</li>
                                <li>Tool tip, Box Sizing, Flex, Grid</li>
                                <li>Projects</li>
                            </ol>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="syllabus11 syllabus13">
                <h5>5th Week - 8th Week</h5>
                <p></p>
            </div>
            <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(101, 187, 229)", borderRadius: "9px" }}>
                <div className="inner-syllabus1 inner2">
                    <div className="h2">
                        <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(101, 187, 229)", border: "2px solid rgb(101, 187, 229)", }}>
                            <p>2</p>
                        </p>
                        <h2>Javascript Fundamentals & Problem Solving</h2>
                    </div>
                    
                    <p class="d-inline-flex gap-1">
                        <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_js}>
                            {js ? 
                            (<i class="fa-solid fa-minus" style={{ color: " rgb(101, 187, 229)" }}></i>) 
                            : 
                            ( <i class="fa-solid fa-plus" style={{ color: " rgb(101, 187, 229)" }} ></i>)
                            }
                        </button>
                    </p>
                </div>
                
                <div className={`collapse1 ${js ? 'open' : ''}`}>
                    <div className="card card-body">
                        {js && (
                        <div className="orderlist orderlist1">
                            <p>Javascript Fundamentals & Problem Solving</p>
                            <ol>
                                <li>Introduction to JavaScript</li>
                                <li>Variables, scoping, Data type</li>
                                <li>Logic Building</li>
                                <li>Strings and Numbers</li>
                                <li>Operators and loops</li>
                                <li>Functions</li>
                                <li>Arrays and Objects</li>
                                <li>Data Structures - Stack, Queues, Maps, Sets</li>
                                <li>Searching and Sorting Algorithms</li>
                                <li>Problem Solving</li>
                            </ol>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="syllabus11 syllabus14">
                <h5>9th Week - 12th Week</h5>
            </div>
            <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(101, 187, 229)", borderRadius: "9px" }}>
                <div className="inner-syllabus1 inner3">
                    <div className="h2">
                        <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(101, 187, 229)", border: "2px solid rgb(101, 187, 229)"}}>
                            <p>3</p>
                        </p>
                        <h2>Building Websites using JS </h2>
                    </div>
                    <p class="d-inline-flex gap-1">
                        <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_react}>
                            {
                            react ? 
                            (<i class="fa-solid fa-minus" style={{ color: "yellow" }}></i>) 
                            : 
                            (<i class="fa-solid fa-plus" style={{ color: "yellow" }}></i>)
                            }
                        </button>
                    </p>
                </div>
                
                <div className={`collapse1 ${react ? 'open' : ''}`}>
                    <div className="card card-body">
                        {react && (
                        <div className="orderlist orderlist1">
                            <p>Building Websites using JS</p>
                            <ol>
                                <li>Understanding and working with DOM</li>
                                <li>Modifying Website Elements with JS</li>
                                <li>Developer tools in Browsers</li>
                                <li>Prototypes</li>
                                <li>Closures</li>
                                <li>Browser Local Storage</li>
                                <li>Jquery, Ajax</li>
                                <li>Promises</li>
                                <li>ES5 vs ES6 vs ES7</li>
                                <li>Eventloop in Javascript</li>
                            </ol>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="syllabus11 syllabus15">
                <h5>13th Week - 16th Week</h5>
            </div>
            <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(247, 182, 67)", borderRadius: "9px" }}>
                <div className="inner-syllabus1 inner4">
                    <div className="h2">
                        <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(247, 182, 67)", border: "2px solid rgb(247, 182, 67)",}}>
                            <p>4</p>
                        </p>
                        <h2>React </h2>
                    </div>
                    <p class="d-inline-flex gap-1">
                        <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_node} >
                            {
                            node ? 
                            (<i class="fa-solid fa-minus"></i>) 
                            : 
                            (<i class="fa-solid fa-plus"></i>)
                            }
                        </button>
                    </p>
                </div>
                
                <div className={`collapse1 ${node ? 'open' : ''}`}>
                    <div className="card card-body">
                        {node && (
                        <div className="orderlist orderlist1">
                            <ol>
                                <li>React Intro</li>
                                <li>Create an app using create-react-app</li>
                                <li>React Lifecycle </li>
                                <li>Event handling, props</li>
                                <li>Routes</li>
                                <li>Pure Components</li>
                                <li>Controlled vs Uncontrolled components</li>
                                <li>Babel, Webpack</li>
                                <li>Node installation</li>
                                <li>Understanding basics of react app</li>
                                <li>Understanding virtual DOMS , Single page apps</li>
                                <li>States, class components vs functional components</li>
                                <li>Building forms in React</li>
                                <li>Conditional Rendering</li>
                                <li>High order components</li>
                                <li>Redux</li>
                                <li>Axios, Creating a mock server</li>
                                <li>SASS overview</li>
                            </ol>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="syllabus11 syllabus16">
                <h5>17th Week - 19th Week</h5>
            </div>
            <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(247, 128, 119)", borderRadius: "9px" }}>
                <div className="inner-syllabus1 inner5">
                    <div className="h2">
                        <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(247, 128, 119)", border: "2px solid rgb(247, 128, 119)"}} >
                            <p>5</p>
                        </p>
                        <h2>NodeJS</h2>
                    </div>
                    <p class="d-inline-flex gap-1">
                        <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_db}>
                            {
                            db ? 
                            (<i class="fa-solid fa-minus" style={{ color: " rgb(247, 128, 119)" }} ></i>) 
                            : 
                            (<i class="fa-solid fa-plus" style={{ color: " rgb(247, 128, 119)" }} ></i>)
                            }
                        </button>
                    </p>
                </div>
                
                <div className={`collapse1 ${db ? 'open' : ''}`}>
                    <div className="card card-body">
                        {db && (
                        <div className="orderlist orderlist1">
                            <p>Node js</p>
                            <ol>
                                <li>Creating a Simple Server</li>
                                <li>Routing</li>
                                <li>Intergrate Frontend and Backend </li>
                                <li>Express Middleware</li>
                                <li>JWT Token, Passport.js</li>
                                <li>Response types - HTML, JSON</li>
                                <li>Express Introduction</li>
                                <li>Express Params and Query String</li>
                                <li>API Authentication</li>
                                <li>Socket Programming</li>
                            </ol>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="syllabus11 syllabus17">
                <h5>20th Week - 22nd Week</h5>
                <p></p>
                </div>
                <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(101, 187, 229)", borderRadius: "9px" }}>
                    <div className="inner-syllabus1 inner6">
                        <div className="h2">
                            <p style={{ width: "40px",textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(101, 187, 229)", border: "2px solid rgb(101, 187, 229)", }}>
                                <p>6</p>
                            </p>
                            <h2>Database</h2>
                        </div>
                        <p class="d-inline-flex gap-1">
                            <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_code} >
                                {
                                code ? 
                                (<i class="fa-solid fa-minus" style={{ color: " rgb( , 187, 229)" }} ></i>) 
                                : 
                                ( <i class="fa-solid fa-plus" style={{ color: " rgb(101, 187, 229)" }} ></i> )
                                }
                            </button>
                        </p>
                    </div>
                    
                    <div className={`collapse1 ${code ? 'open' : ''}`}>
                        <div className="card card-body">
                            {code && (
                            <div className="orderlist orderlist1">
                                <p>Database</p>
                                <ol>
                                    <li>SQL vs NOSQL</li>
                                    <li>Installing MongoDB</li>
                                    <li>Deleting and updating Data </li>
                                    <li>MongoDB overview</li>
                                    <li>Connecting and Inserting Data</li>
                                    <li>Understanding CRUD operations</li>
                                </ol>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="syllabus11 syllabus18">
                    <h5>23rd - 24th Week</h5>{" "}
                </div>
                <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(247, 182, 67)", borderRadius: "9px" }}>
                    <div className="inner-syllabus1 inner7">
                        <div className="h2">
                            <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(247, 182, 67)", border: "2px solid rgb(247, 182, 67)", }}>
                                <p>7</p>
                            </p>
                            <h2>Code Review & Deployment</h2>
                        </div>  
                        <p class="d-inline-flex gap-1">
                            <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_project} >
                                {
                                project ? 
                                (<i class="fa-solid fa-minus" style={{ color: "yellow" }}></i>) 
                                : 
                                (<i class="fa-solid fa-plus" style={{ color: "yellow" }}></i>)
                                }
                            </button>
                        </p>
                    </div>
                    <div className={`collapse1 ${project ? 'open' : ''}`}>
                        <div className="card card-body">
                            {project && (
                            <div className="orderlist orderlist1">
                                <p>Code Review & Deployment</p>
                                <ol>
                                    <li>Deploy using Netlify and Github</li>
                                    <li>Get code review by Software Developers</li>
                                    <li>Deploy all the projects </li>
                                </ol>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="syllabus11 syllabus19">
                    <h5>25th - 28th Week</h5>
                    </div>
                    <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(247, 182, 67)", borderRadius: "9px" }}>  
                    <div className="inner-syllabus1 inner8">
                        <div className="h2">
                            <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(247, 182, 67)", border: "2px solid rgb(247, 182, 67)" }}>
                                <p>8</p>
                            </p>
                            <h2>Interview Preparation & Major Projects</h2>
                        </div>
                        <p class="d-inline-flex gap-1">
                            <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_inter} >
                                {
                                inter ? 
                                (<i class="fa-solid fa-minus" style={{ color: "yellow" }}></i>) 
                                : 
                                (<i class="fa-solid fa-plus" style={{ color: "yellow" }}></i>)
                                }
                            </button>
                        </p>
                    </div>
                    <div className={`collapse1 ${inter ? 'open' : ''}`}>
                        <div className="card card-body">
                            {inter && (
                            <div className="orderlist orderlist1">
                                <p>Interview Preparation & Major Projects</p>
                                <ol>
                                    <li>HTML Blog Page</li>
                                    <li>ToDo App</li>
                                    <li>Reminder Clock App</li>
                                    <li>React Blog Web App</li>
                                    <li>Portfolio Building</li>
                                    <li>Ecommerce Web App(Major Project)</li>
                                    <li>Online Assessement Platform(Major Project)</li>
                                    <li>Resume Building</li>
                                </ol>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="syllabus11 syllbus20">
                    <h5>28th Week Onwards</h5>
                    </div>
                    <div className="syllabus-detail" style={{ borderLeft: "10px solid rgb(101, 187, 229)", borderRadius: "9px" }}>  
                    <div className="inner-syllabus1 inner9">
                        <div className="h2">
                            <p style={{ width: "40px", textAlign: "center", marginLeft: "10px", borderRadius: "9px", color: "white", backgroundColor: "rgb(101, 187, 229)", border: "2px solid rgb(101, 187, 229)", }} >
                                <p>9</p>
                            </p>
                            <h2>Interviews Opportunities</h2>
                            </div>
                            <p class="d-inline-flex gap-1">
                                <button className="sylbutton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handle_opp} >
                                    {
                                    opp ? 
                                    (<i class="fa-solid fa-minus" style={{ color: " rgb(101, 187, 229)" }}></i>) 
                                    : 
                                    (<i class="fa-solid fa-plus" style={{ color: " rgb(101, 187, 229)" }}></i>)
                                    }
                                </button>
                            </p>
                        </div>
                        
                        <div className={`collapse9 ${opp ? 'open' : ''}`}>
                            <div className="card card-body">
                                {opp && (
                                <div className="orderlist orderlist1">
                                    <p>Interviews Opportunities with companies</p>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    );  
}

export default ProgramSyllabus
