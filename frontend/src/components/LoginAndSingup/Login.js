import React from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import withRouter

function Login() {
  const nav = useNavigate();
  const [data, setdata] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://prepbytes-clone.onrender.com/login", formData)
      .then((response) => {
        if (response.data.user) {
          const token = response.data.token;
          console.log(token);
          const usersid = response.data.userid;
          localStorage.setItem("token", token);
          localStorage.setItem("userid", usersid);

          const email = response.data.user[0];
          const username = email
            .split("@")[0]
            .match(/[a-zA-Z]+/)[0]
            .split("")[0];

            const fullname = email
            .split("@")[0]
            .match(/[a-zA-Z]+/)[0]
            ;

          console.log(username);
          localStorage.setItem("username", username.toUpperCase());
          localStorage.setItem("firstname", fullname);

          nav("/");
        } else {
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };



  return (
    <div className="SignIn">

      <div className="signup-container">

        <div className="SignIn__container--left">

            <div className="SignIn__container-left">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp" alt="" className="SignIn__container-left-img" />
            </div>

            <div className="SigninAchievements">

                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp" alt="" className="SigninAchievements__image" />


                <div className="SigninAchievements__container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp" alt=""  className="SigninAchievements__container-img"/>
                    <div className="SigninAchievements__container-detail">
                        <p className="SigninAchievements__container-detail-count" >10K+</p>
                        <p className="SigninAchievements__container-detail-title">Student Enrolled</p>
                    </div>    
                </div>
                
                <div className="SigninAchievements__container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp" alt=""  className="SigninAchievements__container-img"/>
                    <div className="SigninAchievements__container-detail">
                        <p className="SigninAchievements__container-detail-count">10K+</p>
                        <p className="SigninAchievements__container-detail-title">Student Enrolled</p>
                    </div>
                </div>
                
                <div className="SigninAchievements__container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp" alt=""  className="SigninAchievements__container-img"/>
                    <div className="SigninAchievements__container-detail">
                        <p className="SigninAchievements__container-detail-count">10K+</p>
                        <p className="SigninAchievements__container-detail-title">Student Enrolled</p>
                    </div>
                </div>
                <div className="SigninAchievements__container">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp" alt="" className="SigninAchievements__container-img" />
                    <div className="SigninAchievements__container-detail">
                        <p className="SigninAchievements__container-detail-count">10K+</p>
                        <p className="SigninAchievements__container-detail-title">Student Enrolled</p>
                    </div>
                </div>


            </div>
        </div>


        {/* Form Contanier */}

        <div className="SignIn__container--right">

            <div className="SignIn__container--right-top">
                <div className="SignIn__container--right-top-links">

                    <div className="SignIn__container--right-top-links-linkone">
                        <Link to={"/signup"}>SIGNUP</Link>
                    </div>
                    <div className="SignIn__container--right-top-links-linktwo">
                        <Link>LOGIN</Link>
                    </div>

                </div>
            </div>

            <div className="SignIn__container--right-form">
                <div className="SignIn__container--right-form--container">

                    <div className="SignIn__container--right-form--container-top">
                        <h1 className="SignIn__container--right-form--container-top--title">Sign in to your account</h1>
                    </div>
                    <div className="SignIn__container--right-form--container-middle">
                        <form onSubmit={handleSubmit} className="SignIn__container--right-form--container-middle-form">

                            <div className="signup-info">
                                <div className="user-info">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                
                                <div className="user-info">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" id="pass" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                
                                <p style={{ color: "red", display: "block", margin: "auto", width: "90%", }}>
                                    {data}
                                </p>
                                
                                <div className="user-info1">
                                    <button>SIGN IN</button>
                                </div>
                                
                                <div className="user-info1" style={{ marginBottom: "20px" }}>
                                    <button style={{ background: "white", color: "black", border: "1px solid black", }}> LOGIN Via OTP </button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
        


        </div>
        
    </div>
  );
}

export default Login;
