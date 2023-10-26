import React from 'react'
import "./stackHeader.css"


const StackHeader = () => {
  return (
    <div className="StackHeader">
        <section className="StackHeader-main">

            <div className="StackHeader-main__left">
                <p className="StackHeader-main__left--partner">Partner with</p>
                <div className="StackHeader-main__left--top">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg" alt="" />
                </div>
                <h1 className="StackHeader-main__left--heading">Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                <p className="StackHeader-main__left--text">Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</p>
                <div className="StackHeader-main__left-buttons">
                    <div className="StackHeader-main__left-buttons--button StackHeader-main__left-buttons-secondary">
                        <a href="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" target='blank'>
                            <button className='StackHeader-main__left-buttons--button-syllabus'>Download Syllabus</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="StackHeader_main__right">

                <div className="StackHeader_box box_1">
                    <p className="StackHeader_box__heading">Next Batch starts: 1st May, 2023</p>
                    <p className="StackHeader_box__text">Limited seats available</p>
                </div>

                <div className="StackHeader_box box_2">
                    <p className="StackHeader_box__heading">Program Duration: 4 - 5 months</p>
                    <p className="StackHeader_box__text">15-20 hours/week</p>
                </div>

                <div className="StackHeader_box box_3">
                    <p className="StackHeader_box__heading">Learning Format</p>
                    <p className="StackHeader_box__text">Recorded Lectures + Online Live Classes</p>
                </div>

            </div>

        </section>
    </div>
  )
}

export default StackHeader
