/* eslint-disable no-unused-vars */
import React from 'react'
import "./testCard.css"

const TestCard = (props) => {

  const{id, name, date, participants, time, img, price} = props



  return (
    <div className="PastMockTestCard">

      <div className="PastMockTestCard__image">
        <img src={img} alt=""  className='PastMockTestCard__image--img'/>
      </div>
      <p className="PastMockTestCard__heading">{name}</p>

      <div className="PastMockTestCard__middle">

        <div className="PastMockTestCard__middle-left">
          <p className="PastMockTestCard__middle-left-top">{date}</p>
          <p className="PastMockTestCard__middle-left-bottom">Date</p>
        </div>

        <div className="PastMockTestCard__middle-middle">
          <p className="PastMockTestCard__middle-middle-top">{participants}</p>
          <p className="PastMockTestCard__middle-middle-bottom">Participants</p>
        </div>

        <div className="PastMockTestCard__middle-right">
          <p className="PastMockTestCard__middle-right-top">{time}</p>
          <p className="PastMockTestCard__middle-right-bottom">Duration</p>
        </div>

      </div>

      <div className="PastMockTestCard__bottom">
        <button className='PastMockTestCard__bottom--button'>Test Now</button>
      </div>

    </div>
  )
}

export default TestCard
