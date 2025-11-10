import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="nav">
      <h1 className='v'><span>V</span>J<span className='dot'>...</span></h1>
      <ul>
        <li>
          <a href='#Home'>Home</a>
          <a href='#about'>AboutMe</a>
          <a href='#project'>Project</a>
          <a href='#contact'>ContactUs</a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
