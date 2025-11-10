import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
      <h1 className='about' id='about'>About <span className='me'>Me</span></h1>
      <div className="short-intro">
        <h2 className='short'>Short<span className='short-intro'> Intro</span></h2>
        <p className='para'>Hi, I'm Jeswin Vadivel — a passionate <span className='full'>Full Stack Developer</span> with a strong foundation in <span className='skill'>React, Node.js, MongoDB,<br /> 
        and modern web technologies.I enjoy building responsive, user-friendly applications and exploring tools like Figma,<br /> Firebase,</span> and
        React Native to bring ideas to life.I'm currently focused on growing my skills in mobile app development and backend services.</p>
        <h2 className='My'>My<span className='skill'> Skill</span></h2>
        <p className='tech'>Tech Skill: Frontend, SQl Server, Figma, Python, MongoDB, Resposive Design, Backend..</p>
        <p className='soft'>Soft Skill:  Self-learning, Discipline, Consistency, Adaptability, Goal-oriented, Communication..</p>
      </div>
    </div>
  )
}

export default About
