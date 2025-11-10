import React from 'react'
import './Home.css'
import profile from '../assets/profile.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useTypewriter  } from 'react-simple-typewriter';
const Home = () => {
    const [text] = useTypewriter({
    words: ['Developer...', 'React Developer...', 'Web Designer...','Learner...','App Designer...','Innovater...'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div>
    <div className="intro">
      <p className="intro-box">Hi, I am</p>
      <h1 className="name">Jeswin <br />
        <span className="highlight">Vadivel</span></h1>
      <button className="contact-button" >Contact me</button>
      <div className="social">
         <a href="#" className="icon"><FaLinkedin size={40} color="#0021F5"/></a>
         <a href="#" className="icon1"><FaGithub size={40} color="#ffffff"/></a>
        <div className="links">
          <span>Linkedin  </span>  |  <span>  Github</span>
        </div>
      </div>
    </div>
    <div className="image-sec">
      <img src={profile} alt="Profile" className='pro' />
    </div>
    <div className="aside">
      <h1 className="f-text">My Roles <br /> <span className='we'>{text}</span></h1>
      <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis, similique! Molestias soluta dicta commodi! 
        Rerum, natus consequuntur maxime expedita excepturi 
        nesciunt. Consequuntur consequatur laboriosam 
        reiciendis quod dolorem sit officiis minima 
        consectetur doloribus vero officia excepturi minus,
        eos rem in debitis.</p>
        <div className="same">
          <span>My Skill</span> | <span id="#lan">Technologies</span>
          </div>
    </div>
    </div>
  )
}

export default Home
