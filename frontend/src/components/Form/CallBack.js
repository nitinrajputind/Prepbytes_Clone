import React, { useState } from 'react'
import "./callback.css"

const CallBack = () => {

    const [formData, setFormData] = useState({
        name :"",
        email:"",
        phone : "",
        Query : "",
    });

    console.log(formData);

    const handleChange=(e)=>{
        const { name, value} = e.target;
        setFormData({...formData, [value]: value});
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
                    <form  onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} required/>
                        <input type="email" name="email" id="email"  placeholder='Email' value={formData.email} onChange={handleChange} required/>
                        <input type="number" name="phone" id="phone" placeholder='Phone' value={formData.phone} on />
                        <textarea name="query" id="" cols="40" rows="20" autoComplete='off' required placeholder='Query'></textarea>
                        <button type='submit'  >Request a Call Back</button>
                        <p>Thanks for registering with us. Our Team will get back to you soon.</p>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CallBack
