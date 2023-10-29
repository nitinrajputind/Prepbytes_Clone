import React from 'react'
import "./selectBatch.css"

const SelectBatch = () => {
  return (
    <div className="FullStack_batch-details">
        <div className="BatchDetails__section_main_container">
            <div className="BatchDetails__section_container">
                <h4 className="BatchDetails__heading"> SELECT BATCH </h4>

                <div className="BatchDetails__section">

                    <div className="BatchDetails__batch_text_section">
                        <div className="BatchComponent__date_container">

                            <div className="BatchComponent_radio_buttons BatchComponent_radio_buttons_shadow">
                                <label className="BatchComponent_radio_label BatchComponent_radio_label_top_no">
                                    <input type="radio" name="" className='BatchComponent__radio_input' />
                                    <span className="BatchComponent__radio_text_container">
                                        <h5 className="BatchComponent__radio_batch_start_date">1st May</h5>
                                        <p className="BatchComponent__reg_end_date">
                                            <i>Enrolment Started</i>
                                        </p>
                                    </span>
                                </label>
                            </div>

                            <div className="BatchComponent_radio_buttons">
                                <label className="BatchComponent_radio_label BatchComponent_radio_label_top_no">
                                    <input type="radio" className='BatchComponent__radio_input' />
                                    <span className="BatchComponent__radio_text_container">
                                        <h5 className="BatchComponent__radio_batch_start_date">15th May</h5>
                                        <p className="BatchComponent__reg_end_date">
                                            <i>Enrolment Started</i>
                                        </p>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="BatchDetails__enrollNow_container">
                        <div className="BatchDetails__actual_priceamount_no_discount">
                        ₹ 30000
                        </div>
                        <div className="BatchDetails__cta_container">
                            <div className="BatchDetails__enroll_now_button_box">
                                <button className="BatchDetails__enroll_now_button">Enroll Now</button>
                            </div>
                            <div className="BatchDetails__try_free">
                                <button className="BatchDetails__try_free_button">Try for free</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SelectBatch
