/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./testCard.css"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { addtocart } from '../../Redux/Slice/CreateSlice';

const TestCard = (props) => {
  const{id, name, date, participants, time, img, price} = props

  const [verified , setVerified] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector((state)=> state.cart.data)

  // console.log(select);
  
  // Token Verification for the user is valid or not
  useEffect(()=>{
    const token = localStorage.getItem('token');
    // console.log("This is Token ",token)

    axios.get('http://localhost:8080/dashboard',{
      headers: {
        Authorization : `Bearer ${token}`
      },
    })
    .then((response)=>{
      console.log(response.data);
      setVerified(true);
    })
    .catch((err)=>{
      console.log("error is authorization : "+ err)
    });
  },[])


  const makePayment = async (id, name, date, participants, time, img, price)=>{
    const stripe = await loadStripe(
      "pk_test_51NCPAYSItp4zxD80Sgt6IQMetdOUyh3Kvs17Thauj56i1IyWYBn2u8byDboYRfA3k9VTPW0qMaYcCif9QtFd3AZQ00rCEMQsVX"
    )

    const body = {
      products: [
        {
          id: id,
          name: name,
          price: price,
          quantity: 1,
        },
      ],
    };
    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      "http://localhost:8080/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if(result.error){
      console.log(result.error);
    }
  };


  const handleClick = (id, name, date, participants, time, img, price) =>{
    const userid = localStorage.getItem('userid');

    if(verified){
      const isItemInCart = select.some(cartItem=>cartItem.id === id);

      if(!isItemInCart){
        dispatch(
          addtocart({
            id : id,
            img : img,
            testname : name,
            price : price,
            quantity :1,
          })
        )
      }
      else{
        console.log("Item is already in cart")
      }
    }


  }



  

  



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
      {
        verified ? 
        (<button className='PastMockTestCard__bottom--button' onClick={()=>{makePayment(id, name, date, participants, time, img, price); handleClick(id, name, date, participants, time, img, price)}} >Test Now</button>)
        :
        ( <Link to={"/login"} onClick={()=>{window.scroll(0,0)}}><button className='PastMockTestCard__bottom--button'>Test Now</button></Link>)
      }
      </div>

    </div>
  )
}

export default TestCard
