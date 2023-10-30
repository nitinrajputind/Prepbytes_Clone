/* eslint-disable no-unused-vars */
import React from 'react'
import "./testCard.css"


const TestCard2 = (props) => {
  const {id, img, name, price,} = props

  return (
    <div className="TopicMockTestCard" key={id}>
        <div className="TopicMockTestCard__image">
            <img src={img} alt="" className="TopicMockTestCard__image--img" />
        </div>
        <p className="TopicMockTestCard__heading">{name}</p>
        <div className="TopicMockTestCard__bottom">
            <button className='TopicMockTestCard__bottom--button  '>Test Now</button>
        </div>
    </div>
  )
}

export default TestCard2
