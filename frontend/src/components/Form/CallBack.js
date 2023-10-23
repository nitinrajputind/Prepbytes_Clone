import React from 'react'
import "./callback.css"

const CallBack = () => {
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
                    <form >
                        <input type="text" name="name" id="name" placeholder='Name'/>
                        <input type="email" name="email" id="email"  placeholder='Email'/>
                        <input type="number" name="phone" id="phone" placeholder='Phone' />
                        <textarea name="query" id="" cols="40" rows="20" autoComplete='off' required placeholder='Query'></textarea>
                        <button type='submit' >Request a Call Back</button>
                        <p>Thanks for registering with us. Our Team will get back to you soon.</p>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CallBack
