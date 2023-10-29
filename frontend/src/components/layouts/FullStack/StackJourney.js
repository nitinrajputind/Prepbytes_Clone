import React from 'react'
import "./stackJourney.css"



const StackJourney = () => {
  return (
    <div className="StackJourney">

        <div className="StackJourney__container">
            <p className="StackJourney__container--heading">How will your journey look like?</p>
            <p className="StackJourney__container--text">We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>
        </div>

        {/* Destop View Section  */}
        <section className="StackJourney__main">

            <div className="StackJourney__main--left">

                <div className="StackJourney__main--left-tab-container">
                    <div className="StackJourney__main--left-tab-container-tab">
                        <div className="StackJourney__main--left-tab-container-tab--circle">1</div>
                        <div className="StackJourney__main--left-tab-container-tab--box StackJourney__main--left-tab-container-tab--box-active">Batch Commencement</div>
                    </div>
                </div>
        
                <div className="StackJourney__main--left-tab-container">
                    <div className="StackJourney__main--left-tab-container-tab">
                        <div className="StackJourney__main--left-tab-container-tab--circle">2</div>
                        <div className="StackJourney__main--left-tab-container-tab--box ">Learn required languages, framework & tools</div>
                    </div>
                </div>

                <div className="StackJourney__main--left-tab-container">
                    <div className="StackJourney__main--left-tab-container-tab">
                        <div className="StackJourney__main--left-tab-container-tab--circle">3</div>
                        <div className="StackJourney__main--left-tab-container-tab--box">Complete awesome real world projects</div>
                    </div>
                </div>

                <div className="StackJourney__main--left-tab-container">
                    <div className="StackJourney__main--left-tab-container-tab">
                        <div className="StackJourney__main--left-tab-container-tab--circle">4</div>
                        <div className="StackJourney__main--left-tab-container-tab--box ">Experience the complete development lifecycle</div>
                    </div>
                </div>
                
                <div className="StackJourney__main--left-tab-container">
                    <div className="StackJourney__main--left-tab-container-tab">
                        <div className="StackJourney__main--left-tab-container-tab--circle">5</div>
                        <div className="StackJourney__main--left-tab-container-tab--box">Be a certified Full Stack Developer</div>
                    </div>
                </div>
                
            </div>

            <div className="StackJourney__main--right">
                <div className="StackJourney__main--right-content">

                    <div className="StackJourney__main--right-content-heading">
                        <p className="StackJourney__main--right-content-heading--text">Batch Commencement</p>
                    </div>

                    <div className="StackJourney__main--right-content-list">
                        <ul className="list">
                            <li className="list__item">Get access to dashboard & complete plan</li>
                            <li className="list__item">Introduction with lead mentor for this program</li>
                            <li className="list__item">Access to recorded video lectures</li>
                            <li className="list__item">Access to Mock Tests</li>
                            <li className="list__item">One live session with mentors per week</li>
                            <li className="list__item">Every live session will be of 2 hours duration</li>
                        </ul>
                    </div>

                    <div className="StackJourney__main--right-content-image">
                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_batchcommencement.svg" alt="" className="StackJourney__main--right-content-image-img" />
                    </div>
                </div>
            </div>


        </section>


        {/* Ipad  and Mobile cView Section  */}
        <section className="StackJourney__main-ipad">


            <div className="StackJourney__main-ipad-content">
                <div className="StackJourney__main--left-tab-container-tab">
                    <div className="StackJourney__main--left-tab-container-tab--circle">1</div>
                    <div className="StackJourney__main--left-tab-container-tab--box">Batch Commencement</div>
                </div>
                <div className="StackJourney__main--right-content-list">
                    <ul className="list">
                        <li className="list__item">Get access to dashboard & complete plan</li>
                        <li className="list__item">Introduction with lead mentor for this program</li>
                        <li className="list__item">Access to recorded video lectures</li>
                        <li className="list__item">Access to Mock Tests</li>
                        <li className="list__item">One live session with mentors per week</li>
                        <li className="list__item">Every live session will be of 2 hours duration</li>
                    </ul>
                </div>
            </div>


            <div className="StackJourney__main-ipad-content">
                <div className="StackJourney__main--left-tab-container-tab">
                    <div className="StackJourney__main--left-tab-container-tab--circle">2</div>
                    <div className="StackJourney__main--left-tab-container-tab--box">Learn required languages, framework & tools</div>
                </div>
                <div className="StackJourney__main--right-content-list">
                    <ul className="list">
                        <li className="list__item">Live online classes of Javascript, ReactJs, NodeJs,Express, HTML & CSS</li>
                        <li className="list__item">Learn the industry wide used tools like MongoDB, Git & Jira</li>
                    </ul>
                </div>
            </div>
            


            <div className="StackJourney__main-ipad-content">
                <div className="StackJourney__main--left-tab-container-tab">
                    <div className="StackJourney__main--left-tab-container-tab--circle">3</div>
                    <div className="StackJourney__main--left-tab-container-tab--box">Complete awesome real world projects</div>
                </div>
                <div className="StackJourney__main--right-content-list">
                    <ul className="list">
                        <li className="list__item">HTML Blog Page</li>
                        <li className="list__item">Reminder Clock App</li>
                        <li className="list__item">Todo App</li>
                        <li className="list__item">React Blog</li>
                        <li className="list__item">Chat App</li>
                        <li className="list__item">E-commerce Web App</li>
                    </ul>
                </div>
            </div>
            


            <div className="StackJourney__main-ipad-content">
                <div className="StackJourney__main--left-tab-container-tab">
                    <div className="StackJourney__main--left-tab-container-tab--circle">4</div>
                    <div className="StackJourney__main--left-tab-container-tab--box">Experience the complete development lifecycle</div>
                </div>
                <div className="StackJourney__main--right-content-list">
                    <ul className="list">
                        <li className="list__item">Learn the Agile Development Methodology</li>
                        <li className="list__item">Real time experience of complete software development lifecycle from development to deployment</li>
                    </ul>
                </div>
            </div>
            


            <div className="StackJourney__main-ipad-content">
                <div className="StackJourney__main--left-tab-container-tab">
                    <div className="StackJourney__main--left-tab-container-tab--circle">1</div>
                    <div className="StackJourney__main--left-tab-container-tab--box">Be a certified Full Stack Developer</div>
                </div>
                <div className="StackJourney__main--right-content-list">
                    <ul className="list">
                        <li className="list__item">Get certificate of course completion on completing projects, assignments & mock tests</li>
                    </ul>
                </div>
            </div>

        </section>
    </div>
  )
}

export default StackJourney
