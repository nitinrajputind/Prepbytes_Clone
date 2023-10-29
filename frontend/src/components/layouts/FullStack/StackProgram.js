import React from 'react'
import "./stackProgram.css"

const StackProgram = () => {
  return (

    <div className="StackProgram__main">

            <div className="StackProgram__main__left">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/girlimage.webp" alt="" className="StackProgram__main__left-img" />
            </div>

            <div className="StackProgram__main__right">
                <p className="StackProgram__main__right--heading">What you will be after finishing the program?</p>
                <div className="StackProgram__main__right--box">

                    <div className="StackProgram__main__right--box-one">
                        <div className="StackProgram__main__right--box-one--icon-container">
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/certificate.svg" alt="" className="StackProgram__main__right--box-one--icon-container--icon" />
                        </div>
                        <div className="StackProgram__main__right--box-one--text-container">
                            <p className="StackProgram__main__right--box-one--text-container--text">Certified Full stack Developer</p>
                        </div>
                    </div>


                    <div className="StackProgram__main__right--box-one">
                        <div className="StackProgram__main__right--box-one--icon-container">
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/realtime.svg" alt="" className="StackProgram__main__right--box-one--icon-container--icon" />
                        </div>
                        <div className="StackProgram__main__right--box-one--text-container">
                            <p className="StackProgram__main__right--box-one--text-container--text">Experience of Real world work</p>
                        </div>
                    </div>


                    <div className="StackProgram__main__right--box-one">
                        <div className="StackProgram__main__right--box-one--icon-container">
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/excellent.svg" alt="" className="StackProgram__main__right--box-one--icon-container--icon" />
                        </div>
                        <div className="StackProgram__main__right--box-one--text-container">
                            <p className="StackProgram__main__right--box-one--text-container--text">Ready to crack any web developer interview</p>
                        </div>
                    </div>



                </div>
            </div>
    </div>

  )
}

export default StackProgram
