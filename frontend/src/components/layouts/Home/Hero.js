import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className='Hero_Contanier'>
        {/* Top Image Contanier  */}
        <div className="main_Hero_container">

            {/* Hero TextContainer */}
            <div className="text">
                <h1> 
                    <span>Start your journey of success</span>
                    Personalised Coding Programs to make coding easier for you
                </h1>
                
                <p>Want to know how PrepBytes can help you?</p>
                
                <button>Explore now</button>
            </div>

            {/* HeroImage Container  */}
            <div className="image">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg" alt="" />
            </div>
        
        </div>

        {/* Partners */}

        <div className="Home_achievement">
            <div className="Home_achievement_container">
                
                <div className="achievement_item">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp" alt=""/>
                </div>

                <div className="achievement_item">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp" alt="" />
                </div>

                <div className="achievement_item">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp" alt="" />
                </div>

                <div className="achievement_item">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp" alt=""/>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Hero
