import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"



const Footer = () => {

  const Scroller=()=>{
    window.scroll(0,0)
  }




  return (
    <div className='Footer'>
      <div className="Footer_Container">
        
        {/* Social Media Contanier */}
        <div className="Footer_Social_Media">

          <div className="footer_tittle">
            Follow US
          </div>

          <div className="Social_Icon">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
          </div>

            <div className="footer_tittle">
              Contact US
            </div>
            
            <div className="phone">
              <i class="fa-sharp fa-solid fa-phone-volume"></i> <Link to={"tel:+91-7969%200021"}>+91- 7969 0021 11</Link>
              </div>
            
            <div className="support">
              <i class="fa-solid fa-message"></i> <Link to={"mailto:Support@prepbytes.com"}>Support@prepbytes.com</Link>
            </div>

        </div>

        {/* Footer Acticle  */}

        <div className="footer_Article">

          <div className="footer_tittle">
            LATEST ARTICLES
            <ul>
              <Link><li>CPP Interview Questions</li></Link>
              <Link><li>Angular Interview Questions</li></Link>
              <Link><li>Cal Command Linux Examples</li></Link>
              <Link><li>SAR Command Linux Monitor System Performane</li></Link>
            </ul>
          </div>

          <div className="footer_tittle">
            POPULAR ARTICLES
            <ul>
            <Link><li>Git Interview Questions and Answers</li></Link>
              <Link><li>Cloud Computing interview Questions</li></Link>
              <Link><li>Automation Testing interview Questions</li></Link>
              <Link><li>Django interview Questions</li></Link>
              <Link to={"#"}><li>MongoDB interview Questions</li></Link>
            </ul>
          </div>

        </div>

        {/* QUICK LINKS Container */}
        <div className="Quick_Link">
          <div className="footer_tittle">
            Project
          </div>
        <ul>
          <Link to={"/HTML_Project"} onClick={Scroller}><li>HTML</li></Link>
          <Link to={"/CSS_Project"} onClick={Scroller}><li>CSS</li></Link>
          <Link to={"/JavaScript_Project"} onClick={Scroller}><li>JavaScript</li></Link>
          <Link to={"/ReactJs_Project"} onClick={Scroller}><li>ReactJS</li></Link>
          <Link to={"/Node_Project"} onClick={Scroller}><li>Node</li></Link>
          <Link to={"/MongoDB_Project"} onClick={Scroller}><li>MongoDB</li></Link>
        </ul>
        </div>


      </div>

      <hr className='footer_line' />

      <div className="footer_Container_Down">
        <div className="CopyRight">
          <p>Copyright©2023</p>
        </div>
        <div className="policy">
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="FooterStrip_Contanier">
        <p>Need Help? Talk to us on &nbsp; <Link to={"tel:+91-7969%200021"}>079 6900 2111 </Link> &nbsp; or Request Callback</p>
      </div>
    </div>
  )
}

export default Footer
