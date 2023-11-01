import React, { useState } from 'react'
import "./callback.css"
import axios from "axios"

const CallBack = () => {
    const [res, setRes]= useState("")
    const [formData, setFormData] = useState({
        name :"",
        email:"",
        phone : "",
        Query : "",
    });

    console.log(formData);

    const handleChange=(e)=>{
        e.preventDefault();
        const { name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handlesubmit =(e)=>{
        e.preventDefault();
        axios.post("https://prepbytes-clone.onrender.com/enquire",formData)
        .then((response)=>{
            console.log(response.data.msg);
            setRes(response.data.msg)
            setFormData({
                name: "",
                email: "",
                phone : "",
                Query : "",
            });
        })
        .catch((error)=>{
            console.log("Error Registration : ", error)
        });

    }


  return (
    <div className='getCallBack'>
        <div className="getCallBack_main">

            <div className="getCallBack_main_Contanier">
                {/* left contanier */}
                <div className="getCallBack_main_Contanier_left">
                    <p>Talk to our experts</p>
                    <p>Still Confused how PrepBytes can help you achieve your dream? Talk to our experts</p>
                    <div className="getCallBack_img">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/call_back.svg" alt="" />
                    </div>
                </div>

                {/* Right Contanier */}
                <div className="getCallBack_main_Contanier_right">
                    <form  onSubmit={handlesubmit}>
                        <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} required/>
                        <input type="email" name="email" id="email"  placeholder='Email' value={formData.email} onChange={handleChange} required/>
                        <input type="number" name="phone" id="phone" placeholder='Phone' value={formData.phone} onChange={handleChange} required/>
                        <textarea name="Query" id="" cols="40" rows="20" autoComplete='off' required placeholder='Query' value={formData.Query} onChange={handleChange}></textarea>
                        <button type='submit'>Request a Call Back</button>
                        <p>{res}</p>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CallBack
