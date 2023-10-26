import React from 'react'
import "./paymentPlan.css"

const PaymentPlan = () => {
  return (
    <div className="PaymentPlans">
        <section className="PaymentPlans__main">
            <p className="PaymentPlans__main--heading">Payment Plans</p>
            <p className="PaymentPlans__main--subheading">Choose a payment plan suiting your needs</p>

            <div className="PaymentPlans__main--container">

                <div className="PaymentPlans__main-container">
                    <div className="PaymentPlans__main-container-right">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp" alt="" className="PaymentPlans__main-label-img" />
                        <div className="PaymentPlans__main-container-left-heading">Pay Upfront*</div>
                        <div className="PaymentPlans__main-container-left-book">Pay Now</div>
                        <div className="PaymentPlans__main-container-right-amount">
                            <p className="PaymentPlans__main-container-right-amount-actual">₹ 70,000</p>
                        </div>
                        <hr className="PaymentPlans__main-container-right-break" />
                        <div className="PaymentPlans__main-container-right-detail">
                            <p className="PaymentPlans__main-container-right-detail-title"> *Money-back guarantee on placements</p>
                            <span className="PaymentPlans__main-container-right-detail-unplace"></span>
                        </div>
                        <div className="PaymentPlans__main-container-right-emi">EMI Starting at</div>
                        <div className="PaymentPlans__main-container-right-calculation">
                            <p className="PaymentPlans__main-container-right-calculation-price">₹ 5833</p>
                        </div>
                        
                    </div>
                </div>

                <div className="PaymentPlans__main-container-emi">
                    <button className="PaymentPlans__main--container-card-left-second--btn">Register</button>
                </div>

            </div>

            
            <div className="PaymentPlans__main--guidelines">
                <div className="PaymentPlans__main--guidelines-container">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45OTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNS45OTggMTYiPgogIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtY2hlY2stZG91YmxlIiBkYXRhLW5hbWU9Ikljb24gYXdlc29tZS1jaGVjay1kb3VibGUiIGQ9Ik0xNS43NzcsNS40NjEsMTQuNTQsNC4yMjNhLjc0Ny43NDcsMCwwLDAtMS4wNTksMEw2LDExLjcwNywyLjUxNiw4LjIyM2EuNzQ3Ljc0NywwLDAsMC0xLjA1OSwwTC4yMTcsOS40NjNhLjc1MS43NTEsMCwwLDAsMCwxLjA2Mmw1LjI0OSw1LjI1MmEuNzQ3Ljc0NywwLDAsMCwxLjA1OSwwbDkuMjQ5LTkuMjU1QS43NTMuNzUzLDAsMCwwLDE1Ljc3Nyw1LjQ2MVpNNS42NDQsOC43NzNhLjUuNSwwLDAsMCwuNzA2LDBsNi41LTYuNTA1YS41LjUsMCwwLDAsMC0uNzA2TDExLjQzNy4xNDZhLjUuNSwwLDAsMC0uNzA2LDBMNiw0Ljg3OSw0LjI2NiwzLjE0NWEuNS41LDAsMCwwLS43MDYsMEwyLjE0NSw0LjU2MWEuNS41LDAsMCwwLDAsLjcwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA0IDAuMDAyKSIgZmlsbD0iI2Y3ODA3NyIvPgo8L3N2Zz4K" alt="" className="PaymentPlans__main--guidelines-container--img" />
                    <p className="PaymentPlans__main--guidelines-container--text">
                        <span>Guaranteed Placement of minimum 5 LPA</span>
                    </p>
                </div>
            </div>


        </section>
    </div>
  )
}

export default PaymentPlan
