import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <div>
      <h1 className='project' id="project">Project</h1>
        <div className="bar">
            <div className="cir"></div>
                <h1 className='real'>Real Estate Web App</h1>
                  <p className='sub-para'>
                    A modern real estate listing platform where users can browse, search, and filter properties.
                    Tech Stack: React, Tailwind CSS, Motion Animation
                    Features: FeedBack, Admin Reach Out, Contact Agent <br />
                    🔗 [Live Demo] | 💻 [GitHub]
                  </p>
              <div className="cir1"></div>
              <h1 className='spo'>Spotify Clone Web App</h1>
                <p className='sub-para2'>
                  A clone of Spotify with playlist views, album covers, and dark theme.
                  Tech Stack: HTML, CSS, JavaScript, Styled Components
                  Features: Homepage UI, Login and Signup, sidebar, player layout <br />
                  🔗 [Live Demo] | 💻 [GitHub]
                </p>
                <div className="cir2"></div>
              <h1 className='whe'>Weather App</h1>
                <p className='sub-para3'>
                  A weather forecast app showing temperature, humidity, and real-time weather data.
                  Tech Stack: JavaScript, OpenWeather API, HTML, CSS
                  Features: City search, dynamic icons, error handling <br />
                  🔗 [Live Demo] | 💻 [GitHub]
                </p>
      </div>
    </div>
  )
}

export default Project
