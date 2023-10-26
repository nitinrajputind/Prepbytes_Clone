import React from 'react'
import "./batchSelect.css"


const BatchSelect = () => {

  return (
    <div className="CoursesPage__container-batchDetails">
        <div className="CoursePageBatchDetails__section_main_container">
            <div className="CoursePageBatchDetails__section_container">
                <h4 className="CoursePageBatchDetails__heading"> SELECT BATCH </h4>
                <div className="CoursePageBatchDetails__section">

                    <div className="CoursePageBatchDetails__batch_text_section">
                        <div className="CoursePageBatchComponent__date_container">


                            <div className="CoursePageBatchComponent_radio_buttons CoursePageBatchComponent_radio_buttons_not-selected" >
                                <label htmlFor="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no" className='CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no'>
                                    <input type="radio" value="0" className='CoursePageBatchComponent__radio_input' />
                                    <span className='CoursePageBatchComponent__radio_text_container'>
                                        <h5 className="CoursePageBatchComponent__radio_batch_start_date">1st May</h5>
                                        <p className="CoursePageBatchComponent__reg_end_date_not-selected">Enrolment Started</p>
                                    </span>
                                </label>
                            </div>

                            <div className="CoursePageBatchComponent_radio_buttons CoursePageBatchComponent_radio_buttons_selected">
                                <label htmlFor="" className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no">
                                    <input type="radio" name="" id="" className="CoursePageBatchComponent__radio_input" value={1}/>
                                    <span className="CoursePageBatchComponent__radio_text_container">
                                        <h5 className="CoursePageBatchComponent__radio_batch_start_date">15th May</h5>
                                        <p className="CoursePageBatchComponent__reg_end_date_selected">Enrolment Started</p>
                                    </span>
                                </label>
                            </div>

                        </div>
                    </div>


                    <div className="CoursePageBatchDetails__enrollNow_container">
                        <div className="CoursePageBatchDetails__actual_priceamount_no_discount">₹ 25000</div>
                        <div className="CoursePageBatchDetails__cta_container">
                            <div className="CoursePageBatchDetails__enroll_now_button_box">
                                <button className='CoursePageBatchDetails__enroll_now_button'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BatchSelect
