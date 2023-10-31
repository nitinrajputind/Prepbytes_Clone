/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./testCard.css"
import { addtocart } from '../../Redux/Slice/CreateSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';


const TestCard2 = (props) => {
  const {id, img, name, price,} = props



  const [verified , setVerified] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector((state)=> state.cart.data)

  // console.log(select);
  
  // Token Verification for the user is valid or not
  useEffect(()=>{
    const token = localStorage.getItem('token');
    // console.log("This is Token ",token)

    axios.get('https://prepbytes-clone.onrender.com/dashboard',{
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


  const makePayment = async (id, img, name, price,)=>{
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
      "https://prepbytes-clone.onrender.com/api/create-checkout-session",
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


  const handleClick = (id, img, name, price,) =>{
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
    <div className="TopicMockTestCard" key={id}>
        <div className="TopicMockTestCard__image">
            <img src={img} alt="" className="TopicMockTestCard__image--img" />
        </div>
        <p className="TopicMockTestCard__heading">{name}</p>
        <div className="TopicMockTestCard__bottom">

        {
        verified ? 
        ( <button className='TopicMockTestCard__bottom--button' onClick={()=>{makePayment(id, img, name, price,); handleClick(id, img, name, price,)}} >Test Now</button>)
        :
        ( <Link to={"/login"} onClick={()=>{window.scroll(0,0)}}><button className='TopicMockTestCard__bottom--button'>Test Now</button></Link>)
        }
        </div>
    </div>
  )
}

export default TestCard2
