import React from 'react'
import "./stackTools.css"

const StackTools = () => {
  return (
    <div className="StackTools">
        <div className="StackTools__left">
            <p className="StackTools__left--heading">Languages & Tools you will learn</p>
            <p className="StackTools__left--text">Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</p>
        </div>
        <div className="StackTools__right">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png" alt="" className="StackTools__right--img" />
        </div>
    </div>
  )
}

export default StackTools
