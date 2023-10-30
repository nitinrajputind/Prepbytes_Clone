import React, { useState } from "react";
import "./applicationDetail.css";

function ApplicationDetail() {
  const [selectedApplication, setSelectedApplication] = useState(1);

  const handleApplicationClick = (appNumber) => {
    setSelectedApplication(appNumber);
  };

  const getButtonStyle = (appNumber) => {
    return {
      color: selectedApplication === appNumber ? "#f78077" : "#c2c2c2",
      background: selectedApplication === appNumber ? "white" : "#f3f3f3",
      borderLeft: selectedApplication === appNumber ? "6px solid #f78077" : "none",

    };
  };

  return (
    <div className="Main_Appication_Contanier">
      <div className="apllication-detail">
        <div className="inner-conatiner1">
          <h2>How can you be part of the next batch</h2>
          <p>
            Experts mentors designed to get you job-ready, designed for complete
            beginners as well. All this with absolute zero cost including
            real-time assignments that help you practice what you have learnt.
            for complete beginners as well.
          </p>
        </div>
        <div className="inner-conatiner2">
          <div className="buttons">
            <div
              className="inner-button"
              onClick={() => handleApplicationClick(1)}
              style={getButtonStyle(1)}
            >
                <div className="heading-app">

              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/registeration-icon.webp"
                alt=""
                />
              <p>Application</p>
                </div>
            </div>
            <div
              className="inner-button"
              onClick={() => handleApplicationClick(2)}
              style={getButtonStyle(2)}
            >
                <div className="heading-app">

              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp"
                alt=""
                />
              <p>Shortlisting</p>
                </div>
            </div>
            <div
              className="inner-button"
              onClick={() => handleApplicationClick(3)}
              style={getButtonStyle(3)}
            >
                <div className="heading-app">

              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp"
                alt=""
                />
              <p>Free Webinars</p>
                </div>
            </div>
            <div
              className="inner-button"
              onClick={() => handleApplicationClick(4)}
              style={getButtonStyle(4)}
            >
                <div className="heading-app">

              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/payment-icon.webp"
                alt=""
                />
              <p>Enrolment</p>
                </div>
            </div>
            <div
              className="inner-button"
              onClick={() => handleApplicationClick(5)}
              style={getButtonStyle(5)}
            >
                <div className="heading-app">

              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/start-batch-icon.webp"
                alt=""
                />
              <p>Batch commencement</p>
                </div>
            </div>
          </div>
          <div className="inner-conatiner2-detail">
            {selectedApplication === 1 && (
              <div className="application">
                <h2>Application</h2>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> We are inviting applications for 2023, 2022 & 2021 passouts.</p>
                </p>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" />Apply for the next batch by filling up the application form.</p>
                </p>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> Fill all the information correctly.</p>
                </p>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> Any false information will lead to disqualification.</p>
                </p>
              </div>
            )}
            {selectedApplication === 2 && (
              <div className="application">
                <h2>Shortlisting</h2>
            
            <p>
                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> After you have submitted the application, your application will be reviewed by PrepBytes team.</p>
            </p>
            <p>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" />
         <p>Candidates meeting the eligibility criteria will be shortlisted and the free webinars link will be shared to them over email.</p>   </p>
                <p>
                    <p>

              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" />    Candidates meeting the eligibility criteria will be
                  shortlisted and the free webinars link will be shared to them
                  over email.
                </p>
                    </p>
              </div>
            )}
            {selectedApplication === 3 && (
              <div className="application">
                <h2>Free Webinars</h2>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> Attend Free Webinar conducted by expert mentors</p>
                </p>
                <p>

                <p>  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> Understand the importance of Web Development and pathway to crack Web Development Jobs</p>
                </p>
              </div>
            )}
            {selectedApplication === 4 && (
              <div className="application">
                <h2>Enrolment</h2>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> Students clearing the interview will be provided with admission letters.</p>
                </p>
                <p>

                <p> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" /> Selected students have to sign the offer letter and pay enrolment amount to enrol in the program</p>
                </p>
                <p>

           <p>     <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" />  Enrolment Fees is 100% refundable if the candidate wants to come out of the program within 7 days.</p>
                </p>
              </div>
            )}
            {selectedApplication === 5 && (
              <div className="application">
                <h2>Batch commencement</h2>
                <p>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=" alt="" />

                <p>Batch will be started post enrolment. Classes will be completely live.</p>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetail;
