import React from 'react'
import "./codingJourney.css"

const CodingJourney = () => {
  return (
    <div className='CodingJourney'>
        <div className="CodingJourney__main">

            <div className="CodingJourney__main-left">
                <div className="lazyload-wrapper">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" alt=""  className='CodingJourney__main-left--img'/>
                </div>
            </div>
            <div className="CodingJourney__main-right">
                <p className='CodingJourney__main-right--heading'>How PrepBytes Mentorship driven Personalised Learning works?</p>
                <p className="CodingJourney__main-right--subheading"></p>

                <div className="CodingJourney__main-right-container">
                    <div className="lazyload-wrapper">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" alt=""  className='CodingJourney__main-right--img'/>
                    </div>

                    <div className="CodingJourney__main-right-container-card-one">

                        <div className="CodingJourney__main-right-container-card-one-left">

                            <p className='CodingJourney__main-right-container-card-one-left--heading'>Personalised Lectures & Weekly Plan</p>

                            <div className="CodingJourney__main-right-container-card-one-left-box" style={{background: "rgb(253, 240, 215)", border: "1px dashed rgb(247, 128, 119)"}}>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_learning.svg" alt="" className='CodingJourney__main-right-container-card-one-left-box--img'/>
                                <p className='CodingJourney__main-right-container-card-one-left-box--text'>Get learning videos & weekly plan based on your coding skills</p>
                            </div>
                        </div>

                        <div className="CodingJourney__main-right-container-card-one-right">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                        </div>

                    </div>

                    <div className="CodingJourney__main-right-container-card-two">

                        <div className="CodingJourney__main-right-container-card-two-left">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" className='CodingJourney__main-right-container-card-two-left--icon' />
                        </div>
                        <div className="CodingJourney__main-right-container-card-two-right">

                            <p className='CodingJourney__main-right-container-card-two-right--heading' style={{color: "rgb(253, 205, 6)"}}>Personalised Coding Assignments</p>
                            
                            <div className="CodingJourney__main-right-container-card-two-right-box" style={{background: "rgb(255, 249, 228)", border: "1px dashed rgb(253, 205, 6)"}}>

                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/code_live_with_experts.svg" alt=""  className='CodingJourney__main-right-container-card-two-right-box--img'/>
                                <p className='CodingJourney__main-right-container-card-two-right-box--text' style={{color: "rgb(253, 205, 6)"}}>Practice coding questions that adapts based on your progress</p>

                            </div>
                        </div>
                    </div>

                    <div className="CodingJourney__main-right-container-card-one">

                        <div className="CodingJourney__main-right-container-card-one-left">

                            <p className='CodingJourney__main-right-container-card-one-left--heading' style={{color: "rgb(15, 181, 130)"}}>Doubt Solving by Coding Experts</p>

                            <div className="CodingJourney__main-right-container-card-one-left-box" style={{background: "rgb(228, 246, 241)", border: "1px dashed rgb(15, 181, 130)"}}>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/ask_doubts_totally_live.svg" alt=""  className='CodingJourney__main-right-container-card-one-left-box--img'/>
                                <p className='CodingJourney__main-right-container-card-one-left-box--text' style={{color: "rgb(15, 181, 130)"}}>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            </div>
                        </div>

                        <div className="CodingJourney__main-right-container-card-one-right">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                        </div>

                    </div>

                    <div className="CodingJourney__main-right-container-card-two">
                        
                        <div className="CodingJourney__main-right-container-card-two-left">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                        </div>

                        <div className="CodingJourney__main-right-container-card-two-right">
                            <p className='CodingJourney__main-right-container-card-two-right--heading' style={{color: "rgb(240, 119, 149)"}}>CODE LIVE WITH Top Coders</p>
                            <div className="CodingJourney__main-right-container-card-two-right-box" style={{background: "rgb(255, 231, 237)", border:" 1px dashed rgb(240, 119, 149)"}}>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_practice.svg" alt=""  className='CodingJourney__main-right-container-card-two-right-box--img'/>
                                <p className='CodingJourney__main-right-container-card-two-right-box--text' style={{color: "rgb(240, 119, 149)"}}>Topic wise Live Coding sessions with top rated coders</p>
                            </div>

                        </div>
                    </div>

                    <div className="CodingJourney__main-right-container-card-three">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg" alt=""  className='CodingJourney__main-right-container-card-three--img'/>
                    </div>


                </div>
            </div>

        </div>
    </div>
  )
}

export default CodingJourney
