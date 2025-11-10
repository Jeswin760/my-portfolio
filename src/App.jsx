import './App.css'
import Home from './Compounds/Home';
import About from './Compounds/About';
import Project from './Compounds/Project';
import Lan from './Compounds/Lan';
import Contact from './Compounds/Contact';
import Footer from './Compounds/Footer';
function App() {

  return (
    <>
    <div className='Full' id="Home">
      <div className="nav">
        <h1><span>V</span>J<span className='dot'>...</span></h1>
      <ul>
        <li>
          <a href='#about'>AboutMe</a>
          <a href='#project'>Project</a>
          <a href='#contact'>ContactUs</a>
        </li>
      </ul>
      <a href="/resume.pdf" download>
      <button> 
        Hire Me
      </button>
      </a>   
    </div>
    <Home />
    <About />
    <Project />
    <Lan />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default App
