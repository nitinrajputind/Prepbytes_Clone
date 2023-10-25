import React from 'react'
import "./videotutorial.css"


const VideoTutorial = (props) => {

  const { url, heading, details} = props

  return (
    <div className="VideoRepositoryMain__main-content--cards-card">

      <iframe
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen = "true"
      title='Tutorial for Study'
      className='VideoRepositoryMain__main-content--cards-card-top--img'
      ></iframe>

      <div className="VideoRepositoryMain__main-content--cards-card-middle">
        <p className="VideoRepositoryMain__main-content--cards-card-middle--text">{heading}</p>
        <p className="VideoRepositoryMain__main-content--cards-card-middle--desc">{details}</p>
      </div>

      <div className="VideoRepositoryMain__main-content--cards-card-bottom">
        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=" alt="" className="VideoRepositoryMain__main-content--cards-card-bottom--img" />
        <p className='VideoRepositoryMain__main-content--cards-card-bottom--text'>Videos</p>
      </div>

    </div>
  )
}

export default VideoTutorial
