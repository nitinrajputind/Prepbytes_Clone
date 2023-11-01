import React from "react";
import "./signUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function SignUp() {

  const [data, setdata] = useState();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    collegename: "",
    passingyear: "",
  });
  
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://prepbytes-clone.onrender.com/register", formData)
      .then((response) => {
        if (response.data.user) {
          setFormData({
            username: "",
            email: "",
            password: "",
            collegename: "",
            passingyear: "",
          });
          nav("/login");
        } else {
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
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

                    <div className="Register__container--right-top-links-linkone">
                        <Link to={"/signup"}>SIGNUP</Link>
                    </div>
                    <div className="Register__container--right-top-links-linktwo">
                        <Link to={"/login"}>LOGIN</Link>
                    </div>

                </div>
            </div>

            <div className="SignIn__container--right-form">
                <div className="SignIn__container--right-form--container">

                    <div className="SignIn__container--right-form--container-top">
                        <h1 className="SignIn__container--right-form--container-top--title">Create your new account</h1>
                    </div>
                    <div className="SignIn__container--right-form--container-middle">
                    <form action="" onSubmit={handleSubmit} className="SignIn__container--right-form--container-middle-form">
                        <div className="signup-info">
                            <div className="user-info">
                                <label htmlFor="Name">Name</label>
                                <input type="text" id="Name" name="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            
                            <div className="user-info">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}required />
                            </div>
                            
                            <div className="user-info">
                                <label htmlFor="number">Phone no</label>
                                <input type="text" id="number" required />
                            </div>
                            
                            <div className="user-info">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="password" id="pass" value={formData.password} onChange={handleChange} required/>
                            </div>
                            <div className="college-detail">
                                <div className="user-info">
                                    <label htmlFor="college">College</label>
                                    <input type="text" id="college" name="collegename" value={formData.collegename} onChange={handleChange} required />
                                </div>
                                <div class="user-info">
                                    <label for="passing">Passing Year</label>
                                    <input type="text" id="passing" name="passingyear" value={formData.passingyear} onChange={handleChange} required/>
                                </div>
                            </div>
                            
                            <div className="term">
                                <input type="checkbox"  required/> I agree to the <p style={{ color: "#4b8ce8" }}>terms and conditions</p> 
                            </div>
                            
                            <p style={{ color: "red",    display: "block",   margin: "auto",width:"90%" }}>{data}</p>
                            <div className="user-info1">
                                <button type="submit">SIGN UP</button>
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

export default SignUp;